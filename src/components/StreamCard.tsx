"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";
import { Stream } from "@/lib/data";
import { ArrowRight, BookOpen } from "lucide-react";

interface StreamCardProps {
  stream: Stream;
  onSelect: (stream: Stream) => void;
  hasData?: boolean;
}

export function StreamCard({ stream, onSelect, hasData = true }: StreamCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      onClick={() => onSelect(stream)}
      className="group relative bg-charcoal-surface border border-charcoal-border hover:border-slateAccent/60 rounded-card p-5 cursor-pointer transition-all duration-200 shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-slateAccent/15 border border-slateAccent/30 flex items-center justify-center text-slateAccent group-hover:bg-slateAccent group-hover:text-offwhite transition-colors duration-200">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1.5">
            {hasData ? (
              <span className="text-[11px] font-medium text-sageState bg-sageState/15 border border-sageState/30 px-2 py-0.5 rounded-full">
                Active Path
              </span>
            ) : (
              <span className="text-[11px] font-medium text-offwhite-dark bg-charcoal-elevated border border-charcoal-border px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-offwhite group-hover:text-brassAccent transition-colors duration-200">
          {stream.name}
        </h3>
        <p className="text-xs font-semibold text-slateAccent mt-0.5 tracking-wide">
          {stream.full_form}
        </p>

        <p className="text-xs text-offwhite-muted leading-relaxed mt-3 line-clamp-3">
          {stream.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-charcoal-border/60 flex items-center justify-between text-xs text-offwhite-muted group-hover:text-offwhite transition-colors">
        <span>Explore Options</span>
        <ArrowRight className="w-4 h-4 text-slateAccent group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </motion.div>
  );
}
