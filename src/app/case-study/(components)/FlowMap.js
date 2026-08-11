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
    node("account", "Create Account", 20, 300),
    node("language", "Select Language", 170, 300),
    node("english", "English", 170, 210),
    node("urdu", "Urdu Hindi", 170, 390),
    node("home", "Home", 340, 300, true),
    node("lesson", "Open Lesson", 450, 300),
    node("cards", "Flash Cards", 600, 300),
    node("practice", "Practice", 750, 300, true),
    node("alphabet", "Alphabet", 900, 150, true),
    node("words", "Words", 900, 450, true),
    node("pickSound", "Pick Sound", 1100, 30),
    node("pickLetter", "Pick Letter", 1100, 90),
    node("listenLetter", "Listen Sound", 1100, 150),
    node("drawLetter", "Draw Letter", 1100, 210),
    node("findLetter", "Find Letter", 1100, 270),
    node("pickMeaning", "Pick Meaning", 1100, 390),
    node("pickArabic", "Pick Arabic", 1100, 450),
    node("listenWord", "Listen Word", 1100, 510),
    node("findWord", "Find Word", 1100, 570),
    node("wordContext", "Word Context", 1100, 630),
    node("complete", "Lesson Done", 820, 700, true),
];

const connections = [
    ["account", "language"],
    ["language", "english"],
    ["language", "urdu"],
    ["language", "home"],
    ["home", "lesson"],
    ["lesson", "cards"],
    ["cards", "practice"],
    ["practice", "alphabet"],
    ["practice", "words"],
    ["alphabet", "pickSound"],
    ["alphabet", "pickLetter"],
    ["alphabet", "listenLetter"],
    ["alphabet", "drawLetter"],
    ["alphabet", "findLetter"],
    ["words", "pickMeaning"],
    ["words", "pickArabic"],
    ["words", "listenWord"],
    ["words", "findWord"],
    ["words", "wordContext"],
    ["alphabet", "complete"],
    ["words", "complete"],
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
        <section className="mt-20! sm:mt-28! md:mt-32!">
            <div className="grid gap-y-3 sm:gap-y-4 px-3! sm:px-8! md:grid-cols-[100px_1fr_2fr] md:px-20!">
                <div className="text-lg sm:text-xl font-bold tracking-tighter text-[var(--secondary)]!">
                    ( 04 )
                </div>
                <h2 className="text-lg sm:text-xl font-bold drop-shadow-[0_0_10px_var(--secondary)]">
                    Project Workflow
                </h2>
                <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-neutral-400">
                    Every route leads back to learning: start a lesson, reinforce
                    it through practice, or get help without leaving the flow.
                </p>
            </div>

            <div className="mt-6! sm:mt-8! w-full overflow-x-auto snap-x snap-mandatory lg:overflow-visible">
                <div className="h-[620px] min-w-[1200px] lg:min-w-full relative">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        fitView
                        fitViewOptions={{ padding: 0.08, minZoom: 0.6, maxZoom: 1 }}
                        nodesDraggable={false}
                        nodesConnectable={false}
                        elementsSelectable={false}
                        zoomOnScroll={false}
                        zoomOnPinch={false}
                        zoomOnDoubleClick={false}
                        panOnDrag={true}
                        preventScrolling={false}
                        proOptions={{ hideAttribution: true }}
                    />
                </div>
            </div>
        </section>
    );
}
