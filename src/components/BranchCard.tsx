"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";
import { Branch } from "@/lib/data";
import { ArrowRight, Cpu } from "lucide-react";

interface BranchCardProps {
  branch: Branch;
  onSelect: (branch: Branch) => void;
}

export function BranchCard({ branch, onSelect }: BranchCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      onClick={() => onSelect(branch)}
      className="group bg-charcoal-surface border border-charcoal-border hover:border-slateAccent/50 rounded-card p-5 cursor-pointer shadow-sm transition-all duration-200"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-lg bg-slateAccent/15 border border-slateAccent/30 flex items-center justify-center text-slateAccent group-hover:bg-slateAccent group-hover:text-offwhite transition-colors duration-200 shrink-0">
          <Cpu className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-offwhite group-hover:text-brassAccent transition-colors duration-200">
            {branch.title}
          </h3>
          <p className="text-xs text-offwhite-muted leading-relaxed mt-1">
            {branch.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-xs text-slateAccent font-medium">
            <span>Explore Specialization Career Paths</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
