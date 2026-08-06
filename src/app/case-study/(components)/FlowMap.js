"use client";

import { Handle, Position, ReactFlow } from "@xyflow/react";

function PillNode({ data }) {
    return (
        <div
            className={`whitespace-nowrap rounded-full px-4! py-2! text-[13px] leading-none shadow-[0_1px_3px_rgba(0,0,0,.2)] ${
                data.accent
                    ? "bg-[var(--secondary)] font-semibold text-[#111]"
                    : "bg-white text-black! font-medium"
            }`}
        >
            <Handle
                type="target"
                position={Position.Left}
                className="pointer-events-none! h-0! w-0! border-0! bg-transparent!"
            />
            {data.label}
            <Handle
                type="source"
                position={Position.Right}
                className="pointer-events-none! h-0! w-0! border-0! bg-transparent!"
            />
        </div>
    );
}

const nodeTypes = { pill: PillNode };

const node = (id, label, x, y, accent = false) => ({
    id,
    type: "pill",
    position: { x, y },
    data: { label, accent },
    draggable: false,
    selectable: false,
});

const nodes = [
    node("start", "start", 25, 258),
    node("onboarding", "onboarding", 125, 258),

    node("learn", "learn", 300, 70, true),
    node("alphabet", "alphabet", 455, 12),
    node("vocabulary", "vocabulary", 455, 70),
    node("lessons", "lessons", 455, 128),
    node("lesson", "lesson player", 640, 70),
    node("complete", "complete lesson", 835, 70),

    node("revise", "revise", 300, 258, true),
    node("new", "new words", 455, 200),
    node("due", "due today", 455, 258),
    node("saved", "saved words", 455, 316),
    node("practice", "practice set", 640, 258),
    node("exercise", "exercise", 835, 258),
    node("translation", "translation", 985, 171),
    node("choice", "multiple choice", 985, 229),
    node("listening", "listening", 985, 287),
    node("writing", "handwriting", 985, 345),

    node("help", "get help", 300, 446, true),
    node("ask", "ask question", 455, 388),
    node("explain", "explain word", 455, 446),
    node("check", "check writing", 455, 504),
    node("response", "AI response", 640, 446),
    node("retry", "try again", 835, 388),
    node("continue", "continue lesson", 835, 446),
    node("save", "save answer", 835, 504),
];

const connections = [
    ["start", "onboarding"],
    ["onboarding", "learn"], ["onboarding", "revise"], ["onboarding", "help"],
    ["learn", "alphabet"], ["learn", "vocabulary"], ["learn", "lessons"],
    ["alphabet", "lesson"], ["vocabulary", "lesson"], ["lessons", "lesson"],
    ["lesson", "complete"],
    ["revise", "new"], ["revise", "due"], ["revise", "saved"],
    ["new", "practice"], ["due", "practice"], ["saved", "practice"],
    ["practice", "exercise"],
    ["exercise", "translation"], ["exercise", "choice"],
    ["exercise", "listening"], ["exercise", "writing"],
    ["help", "ask"], ["help", "explain"], ["help", "check"],
    ["ask", "response"], ["explain", "response"], ["check", "response"],
    ["response", "retry"], ["response", "continue"], ["response", "save"],
];

const edges = connections.map(([source, target]) => ({
    id: `${source}-${target}`,
    source,
    target,
    type: "smoothstep",
    style: { stroke: "var(--tertiary)", strokeWidth: 1.25 },
    pathOptions: { borderRadius: 18, offset: 22 },
    selectable: false,
}));

export default function FlowMap() {
    return (
        <section className="mt-32!">
            <div className="grid gap-y-8 px-5! md:grid-cols-[100px_1fr_2fr] md:px-20!">
                <div className="text-xl font-bold tracking-tighter text-[var(--secondary)]!">
                    ( 04 )
                </div>
                <h2 className="text-xl font-bold drop-shadow-[0_0_10px_var(--secondary)]">
                    Learning flow
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
                    Every route leads back to learning: start a lesson, reinforce
                    it through practice, or get help without leaving the flow.
                </p>
            </div>

            <div className="mt-8! h-[620px] overflow-hidden">
                <div className="relative h-full w-full">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        fitView
                        fitViewOptions={{ padding: 0.08, minZoom: 0.72, maxZoom: 1 }}
                        nodesDraggable={false}
                        nodesConnectable={false}
                        elementsSelectable={false}
                        zoomOnScroll={false}
                        zoomOnPinch={false}
                        zoomOnDoubleClick={false}
                        panOnDrag={false}
                        preventScrolling={false}
                        proOptions={{ hideAttribution: true }}
                    />
                </div>
            </div>
        </section>
    );
}
