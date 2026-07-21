"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants, accordionVariants } from "@/lib/motion";
import { StreamOption } from "@/lib/data";
import { ChevronDown, ArrowRight, Layers } from "lucide-react";

interface OptionCardProps {
  option: StreamOption;
  onSelect: (option: StreamOption) => void;
}

export function OptionCard({ option, onSelect }: OptionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-charcoal-surface border border-charcoal-border hover:border-slateAccent/50 rounded-card p-5 shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-brassAccent/15 border border-brassAccent/30 flex items-center justify-center text-brassAccent">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-offwhite">{option.title}</h3>
            <p className="text-xs text-offwhite-muted line-clamp-1">
              {option.description}
            </p>
          </div>
        </div>

        <button
          onClick={toggleExpand}
          aria-label="Toggle details"
          className="p-1.5 rounded-md text-offwhite-muted hover:text-offwhite hover:bg-charcoal-elevated transition-colors text-xs flex items-center gap-1 border border-transparent hover:border-charcoal-border"
        >
          <span className="hidden sm:inline">{isExpanded ? "Less" : "Details"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Accordion detail content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            variants={accordionVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden border-t border-charcoal-border/50 pt-3"
          >
            <p className="text-xs text-offwhite/90 leading-relaxed bg-charcoal/50 p-3 rounded-lg border border-charcoal-border/30">
              {option.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 pt-3 border-t border-charcoal-border/40 flex items-center justify-end">
        <button
          onClick={() => onSelect(option)}
          className="px-3.5 py-1.5 bg-slateAccent hover:bg-slateAccent-hover text-offwhite text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors duration-150 shadow-sm"
        >
          <span>Select Stream Option</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
