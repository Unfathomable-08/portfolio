'use client';

import { useEffect, useRef } from 'react';

export default function NeonTrail() {
    // canvas ref to store canvas element
    const canvasRef = useRef(null);

    // use effect to handle canvas animation
    useEffect(() => {
        // get canvas element
        const canvas = canvasRef.current;
        // if canvas is not found, return
        if (!canvas) return;

        let ctx;                       // canvas context - 2d
        let f;                         // function
        let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };       // mouse position
        let lines = [];                // array of lines - each line has multiple nodes
        let animationFrameId = null;   // animation frame id - to stop animation
        let hueValue = 0;              // hue value - for multiple colors

        // E object to store animation properties
        const E = {
            friction: 0.4,              // friction - controls how fast the lines slow down
            trails: 20,                 // trails - number of lines
            size: 50,                   // size - number of nodes in each line
            dampening: 0.25,            // dampening - controls how fast the lines slow down
            tension: 0.98,              // tension - controls how fast the lines slow down
        };

        // Original n function (fixed)
        function n(e) {
            this.init(e || {});         // initialize the function
        }

        // n prototype - update hue value
        n.prototype = {
            init: function (e) {
                this.phase = e.phase || 0;
                this.offset = e.offset || 0;
                this.frequency = e.frequency || 0.001;
                this.amplitude = e.amplitude || 1;
            },

            // update hue value - using sin wave
            update: function () {
                this.phase += this.frequency;
                hueValue = this.offset + Math.sin(this.phase) * this.amplitude;
                return hueValue;
            },
        };

        // Node constructor - each node has x, y, vx, vy
        function Node() {
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
        }

        // Line constructor - each line has multiple nodes
        function Line(e) {
            this.init(e || {});
        }

        // Line prototype - update and draw lines
        Line.prototype = {
            init: function (e) {
                this.spring = e.spring + 0.1 * Math.random() - 0.05;
                this.friction = E.friction + 0.01 * Math.random() - 0.005;
                this.nodes = [];
                for (let i = 0; i < E.size; i++) {
                    const t = new Node();
                    t.x = pos.x;
                    t.y = pos.y;
                    this.nodes.push(t);
                }
            },

            // update line - using spring physics and dampening
            update: function () {
                let spring = this.spring;
                let t = this.nodes[0];
                t.vx += (pos.x - t.x) * spring;
                t.vy += (pos.y - t.y) * spring;

                for (let i = 0, a = this.nodes.length; i < a; i++) {
                    t = this.nodes[i];
                    if (i > 0) {
                        const n = this.nodes[i - 1];
                        t.vx += (n.x - t.x) * spring;
                        t.vy += (n.y - t.y) * spring;
                        t.vx += n.vx * E.dampening;
                        t.vy += n.vy * E.dampening;
                    }
                    t.vx *= this.friction;
                    t.vy *= this.friction;
                    t.x += t.vx;
                    t.y += t.vy;
                    spring *= E.tension;
                }
            },

            // draw line - using quadratic curve
            draw: function () {
                let px = this.nodes[0].x;
                let py = this.nodes[0].y;

                ctx.beginPath();
                ctx.moveTo(px, py);

                for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
                    const x = this.nodes[i];
                    const y = this.nodes[i + 1];
                    px = 0.5 * (x.x + y.x);
                    py = 0.5 * (x.y + y.y);
                    ctx.quadraticCurveTo(x.x, x.y, px, py);
                }

                const x = this.nodes[this.nodes.length - 2];
                const y = this.nodes[this.nodes.length - 1];
                ctx.quadraticCurveTo(x.x, x.y, y.x, y.y);

                ctx.stroke();
                ctx.closePath();
            },
        };

        // create lines - create multiple lines with different springs
        function createLines() {
            lines = [];
            for (let i = 0; i < E.trails; i++) {
                lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
            }
        }

        // mouse move event - track mouse position
        function onMousemove(e) {
            function trackPosition(ev) {
                if (ev.touches) {
                    pos.x = ev.touches[0].pageX;
                    pos.y = ev.touches[0].pageY;
                } else {
                    pos.x = ev.clientX;
                    pos.y = ev.clientY;
                }
                ev.preventDefault();
            }

            // track touch position
            function trackTouch(ev) {
                if (ev.touches && ev.touches.length === 1) {
                    pos.x = ev.touches[0].pageX;
                    pos.y = ev.touches[0].pageY;
                }
            }

            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            document.addEventListener('mousemove', trackPosition);
            document.addEventListener('touchmove', trackPosition);
            document.addEventListener('touchstart', trackTouch);

            trackPosition(e);
            createLines();   // Important: recreate lines when mouse moves first time
        }

        // render function - draw lines on canvas
        function render() {
            if (!ctx || !ctx.running) return;

            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',90%,50%,0.25)';
            ctx.lineWidth = 1;

            for (let i = 0; i < lines.length; i++) {   // safer than E.trails
                lines[i].update();
                lines[i].draw();
            }

            ctx.frame++;
            animationFrameId = requestAnimationFrame(render);
        }

        // resize canvas - resize canvas on window resize
        function resizeCanvas() {
            if (ctx && ctx.canvas) {
                ctx.canvas.width = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }

        // ====================== INIT ======================
        function init() {
            ctx = canvas.getContext('2d');
            ctx.running = true;
            ctx.frame = 1;

            f = new n({
                phase: Math.random() * 2 * Math.PI,
                amplitude: 85,
                frequency: 0.0015,
                offset: 285,
            });

            createLines();                    // Create lines BEFORE first render
            document.addEventListener('mousemove', onMousemove);
            document.addEventListener('touchstart', onMousemove);
            window.addEventListener('resize', resizeCanvas);
            document.body.addEventListener('orientationchange', resizeCanvas);

            resizeCanvas();
            render();                         // Start animation
        }

        init();

        // Cleanup
        return () => {
            ctx.running = false;
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            window.removeEventListener('resize', resizeCanvas);
            document.body.removeEventListener('orientationchange', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none"
        />
    );
}