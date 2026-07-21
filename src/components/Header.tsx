"use client";

import React from "react";
import { ChevronRight, ArrowLeft, Compass } from "lucide-react";

interface StepItem {
  id: string;
  label: string;
}

interface HeaderProps {
  steps: StepItem[];
  onSelectStep: (index: number) => void;
  onReset: () => void;
}

export function Header({ steps, onSelectStep, onReset }: HeaderProps) {
  return (
    <header className="border-b border-charcoal-border bg-charcoal/90 backdrop-blur-sm sticky top-0 z-40 px-4 py-3">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={onReset}>
          <div className="w-8 h-8 rounded-lg bg-slateAccent/20 border border-slateAccent/40 flex items-center justify-center text-slateAccent">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-offwhite tracking-wide">
              Pathfinder <span className="text-xs font-normal text-brassAccent px-2 py-0.5 rounded bg-brassAccent/15 ml-1">12th India</span>
            </h1>
          </div>
        </div>

        {/* Breadcrumbs */}
        {steps.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs overflow-x-auto py-1 no-scrollbar">
            <button
              onClick={onReset}
              className="text-offwhite-muted hover:text-offwhite transition-colors flex items-center gap-1 shrink-0"
            >
              Streams
            </button>
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <ChevronRight className="w-3 h-3 text-offwhite-dark shrink-0" />
                <button
                  onClick={() => onSelectStep(idx)}
                  className={`shrink-0 transition-colors ${
                    idx === steps.length - 1
                      ? "text-brassAccent font-medium"
                      : "text-offwhite-muted hover:text-offwhite"
                  }`}
                >
                  {step.label}
                </button>
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
