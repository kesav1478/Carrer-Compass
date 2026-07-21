"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";
import { CareerPath } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";

interface CareerPathCardProps {
  careerPath: CareerPath;
  onSelect: (careerPath: CareerPath) => void;
}

export function CareerPathCard({ careerPath, onSelect }: CareerPathCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      onClick={() => onSelect(careerPath)}
      className="group bg-charcoal-surface border border-charcoal-border hover:border-brassAccent/60 rounded-card p-5 cursor-pointer shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brassAccent/20 border border-brassAccent/40 flex items-center justify-center text-brassAccent group-hover:bg-brassAccent group-hover:text-charcoal transition-colors duration-200">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-offwhite group-hover:text-brassAccent transition-colors duration-200">
              {careerPath.title}
            </h3>
            <p className="text-xs text-offwhite-muted leading-relaxed mt-0.5">
              {careerPath.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-charcoal-border/50 flex items-center justify-between text-xs text-offwhite-muted group-hover:text-offwhite transition-colors">
        <span className="text-sageState font-medium">Interactive Learning Roadmap Available</span>
        <div className="flex items-center gap-1 text-brassAccent font-semibold">
          <span>View Roadmap</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.div>
  );
}
