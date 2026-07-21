"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoadmapNode, RoadmapEdge } from "@/lib/data";
import { accordionVariants } from "@/lib/motion";
import { ChevronDown, CheckCircle2, Circle, GitBranch, ArrowDown, Sparkles, Layers, Info } from "lucide-react";

interface InteractiveRoadmapViewProps {
  nodes: RoadmapNode[];
  edges: RoadmapEdge[];
  careerPathTitle: string;
}

export function InteractiveRoadmapView({
  nodes,
  edges,
  careerPathTitle,
}: InteractiveRoadmapViewProps) {
  // Currently expanded node ID for explanation panel
  const [expandedNodeId, setExpandedNodeId] = useState<string | null>(null);

  // Group nodes by row
  const rowMap = new Map<number, { core?: RoadmapNode; branches: RoadmapNode[] }>();

  nodes.forEach((node) => {
    if (!rowMap.has(node.row)) {
      rowMap.set(node.row, { branches: [] });
    }
    const rowObj = rowMap.get(node.row)!;
    if (node.node_type === "core") {
      rowObj.core = node;
    } else {
      rowObj.branches.push(node);
    }
  });

  const sortedRows = Array.from(rowMap.keys()).sort((a, b) => a - b);

  const handleToggleNode = (nodeId: string) => {
    setExpandedNodeId((prev) => (prev === nodeId ? null : nodeId));
  };

  return (
    <div className="w-full space-y-8 py-4">
      {/* Header Info */}
      <div className="bg-charcoal-surface border border-charcoal-border p-6 rounded-card shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brassAccent/15 border border-brassAccent/30 text-brassAccent">
            Interactive Progression Roadmap
          </span>
          <span className="text-xs text-offwhite-dark">• Tap any node to view full details</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-offwhite tracking-tight">
          {careerPathTitle} Roadmap
        </h1>
        <p className="text-xs sm:text-sm text-offwhite-muted leading-relaxed max-w-2xl">
          Follow the central spine of core fundamentals from top to bottom. Side clusters represent essential tools, frameworks, and specialized techniques.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-offwhite-muted">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slateAccent border border-slateAccent/40" />
            <span>Core Topic Spine</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-brassAccent border border-brassAccent/40" />
            <span>Side Cluster / Tool</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 border-b-2 border-slateAccent" />
            <span>Core Sequence (Solid)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 border-b-2 border-dashed border-brassAccent" />
            <span>Branch Connector (Dotted)</span>
          </div>
        </div>
      </div>

      {/* Vertical Roadmap Graph Canvas */}
      <div className="relative max-w-3xl mx-auto px-2 py-4 space-y-10">
        {/* Central Vertical Spine Solid Line */}
        <div className="absolute left-6 sm:left-1/2 top-12 bottom-12 w-1 bg-charcoal-border sm:-translate-x-1/2 z-0" />

        {sortedRows.map((rowNum, rowIndex) => {
          const rowData = rowMap.get(rowNum)!;
          const coreNode = rowData.core;
          const branchNodes = rowData.branches;

          return (
            <motion.div
              key={`row-${rowNum}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: rowIndex * 0.06, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative z-10 space-y-4"
            >
              {/* Milestone Indicator Banner if Row 1 or Row 6 */}
              {rowNum === 1 && (
                <div className="flex justify-center mb-6">
                  <span className="px-3 py-1 rounded-full bg-charcoal-elevated border border-slateAccent/40 text-slateAccent text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sageState" /> Milestone 1: Web & Code Foundations
                  </span>
                </div>
              )}

              {rowNum === 6 && (
                <div className="flex justify-center my-6">
                  <span className="px-3 py-1 rounded-full bg-charcoal-elevated border border-brassAccent/40 text-brassAccent text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" /> Milestone 2: Modern Frameworks & Production
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {/* Core Node Column (Left or Center Spine) */}
                {coreNode && (
                  <div className="relative sm:pr-6">
                    <NodeCard
                      node={coreNode}
                      isExpanded={expandedNodeId === coreNode.id}
                      onToggle={() => handleToggleNode(coreNode.id)}
                    />
                  </div>
                )}

                {/* Side Branch Nodes Column (Right Cluster via Dotted Connector) */}
                {branchNodes.length > 0 && (
                  <div className="relative space-y-3 sm:pl-6 sm:border-l-2 sm:border-dashed sm:border-brassAccent/40 pt-2 sm:pt-0">
                    <div className="hidden sm:block absolute -left-3 top-6 w-3 border-t-2 border-dashed border-brassAccent/40" />
                    {branchNodes.map((bNode) => (
                      <NodeCard
                        key={bNode.id}
                        node={bNode}
                        isExpanded={expandedNodeId === bNode.id}
                        onToggle={() => handleToggleNode(bNode.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

interface NodeCardProps {
  node: RoadmapNode;
  isExpanded: boolean;
  onToggle: () => void;
}

function NodeCard({ node, isExpanded, onToggle }: NodeCardProps) {
  const isCore = node.node_type === "core";

  return (
    <div
      onClick={onToggle}
      className={`group cursor-pointer rounded-card p-4 border transition-all duration-200 shadow-sm ${
        isCore
          ? "bg-charcoal-surface border-slateAccent/40 hover:border-slateAccent text-offwhite"
          : "bg-charcoal-surface/90 border-brassAccent/40 hover:border-brassAccent text-offwhite"
      } ${isExpanded ? "ring-1 ring-brassAccent/60 shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
              isCore
                ? "bg-slateAccent/20 text-slateAccent border border-slateAccent/40 group-hover:bg-slateAccent group-hover:text-offwhite"
                : "bg-brassAccent/20 text-brassAccent border border-brassAccent/40 group-hover:bg-brassAccent group-hover:text-charcoal"
            } transition-colors`}
          >
            {isCore ? <Layers className="w-3.5 h-3.5" /> : <GitBranch className="w-3.5 h-3.5" />}
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wide group-hover:text-brassAccent transition-colors">
              {node.title}
            </h3>
            <span className="text-[10px] text-offwhite-dark uppercase tracking-wider font-semibold">
              {isCore ? "Core Module" : "Side Tool / Framework"}
            </span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="p-1 rounded text-offwhite-muted hover:text-offwhite hover:bg-charcoal-elevated transition-colors"
          aria-label="Expand explanation"
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Expandable Explanation Panel */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            variants={accordionVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden border-t border-charcoal-border/60 pt-3 text-xs"
          >
            <div className="bg-charcoal/80 p-3 rounded-lg border border-charcoal-border/40 space-y-2">
              <div className="flex items-center gap-1.5 text-brassAccent font-semibold text-[11px]">
                <Info className="w-3.5 h-3.5" />
                <span>Topic Overview & Key Concepts</span>
              </div>
              <p className="text-offwhite/90 leading-relaxed">{node.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
