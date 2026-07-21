"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InteractiveRoadmapView } from "@/components/InteractiveRoadmapView";
import { ArrowLeft, Loader2, Clock, Sparkles, Compass } from "lucide-react";
import { RoadmapNode, RoadmapEdge } from "@/lib/data";

export default function RoadmapPage({ params }: { params: { pathId: string } }) {
  const { pathId } = params;
  const [nodes, setNodes] = useState<RoadmapNode[]>([]);
  const [edges, setEdges] = useState<RoadmapEdge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRoadmap() {
      try {
        setLoading(true);
        const res = await fetch(`/api/roadmap/${pathId}`);
        const data = await res.json();
        setNodes(data.nodes || []);
        setEdges(data.edges || []);
      } catch (err) {
        console.error("Error loading roadmap data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadRoadmap();
  }, [pathId]);

  const formattedTitle = pathId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-charcoal text-offwhite p-4 sm:p-8 flex flex-col font-sans">
      <div className="max-w-4xl mx-auto w-full flex-1 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-offwhite-muted hover:text-offwhite transition-colors bg-charcoal-surface border border-charcoal-border hover:border-slateAccent px-3 py-1.5 rounded-lg shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Career Flow
        </Link>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <Loader2 className="w-6 h-6 text-brassAccent animate-spin" />
            <p className="text-xs text-offwhite-muted">Fetching roadmap dataset...</p>
          </div>
        ) : nodes.length > 0 ? (
          <InteractiveRoadmapView
            nodes={nodes}
            edges={edges}
            careerPathTitle={formattedTitle}
          />
        ) : (
          /* Roadmap Coming Soon Fallback State for Phase 4 */
          <div className="py-12 px-4 max-w-xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brassAccent/15 border border-brassAccent/30 flex items-center justify-center text-brassAccent mx-auto shadow-sm">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-brassAccent bg-brassAccent/15 px-3 py-1 rounded-full border border-brassAccent/30">
                Phase 4 Roadmap Status
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-offwhite">
                Roadmap Coming Soon
              </h1>
              <p className="text-xs sm:text-sm text-offwhite-muted leading-relaxed">
                Detailed step-by-step topic milestones for <span className="text-offwhite font-semibold">{formattedTitle}</span> are currently being curated. The complete 4-tier career structure (Stream → Options → Branch → Career Path) is fully active!
              </p>
            </div>

            <div className="bg-charcoal-surface border border-charcoal-border p-5 rounded-card space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slateAccent">
                <Sparkles className="w-4 h-4 text-brassAccent" />
                <span>Want to see a live visual roadmap?</span>
              </div>
              <p className="text-xs text-offwhite-muted leading-relaxed">
                Check out the fully populated interactive graph for <span className="text-brassAccent font-medium">MPC → Engineering → CSE → Web Development</span>.
              </p>
              <Link
                href="/roadmap/web-dev"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-slateAccent hover:bg-slateAccent-hover text-offwhite text-xs font-medium rounded-lg transition-colors shadow-sm gap-2"
              >
                <Compass className="w-4 h-4" /> View Web Development Roadmap
              </Link>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-charcoal-border py-4 px-4 text-center text-xs text-offwhite-dark mt-auto">
        <p>Pathfinder — Demo Career Guidance Platform for 12th Grade Students in India</p>
      </footer>
    </div>
  );
}
