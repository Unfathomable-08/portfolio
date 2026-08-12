"use client";

import { Handle, Position, ReactFlow } from "@xyflow/react";

function PillNode({ data }) {
    return (
        <div
            className={`whitespace-nowrap rounded-full px-4! py-2! text-[13px] leading-none shadow-[0_1px_3px_rgba(0,0,0,.2)] ${data.accent
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

export default function FlowMap({ note, nodes, connections }) {
    const edges = connections.map(([source, target]) => ({
        id: `${source}-${target}`,
        source,
        target,
        type: "smoothstep",
        style: { stroke: "var(--tertiary)", strokeWidth: 1.25 },
        pathOptions: { borderRadius: 18, offset: 22 },
        selectable: false,
    }));

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
                    {note}
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
