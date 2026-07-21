"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { StreamCard } from "@/components/StreamCard";
import { OptionCard } from "@/components/OptionCard";
import { BranchCard } from "@/components/BranchCard";
import { CareerPathCard } from "@/components/CareerPathCard";
import { containerVariants, pageVariants } from "@/lib/motion";
import { Stream, StreamOption, Branch, CareerPath } from "@/lib/data";
import { AlertCircle, GraduationCap, ChevronLeft, Loader2 } from "lucide-react";

type FlowStep = "streams" | "options" | "branches" | "career-paths";

export default function Home() {
  const router = useRouter();

  // State management
  const [currentStep, setCurrentStep] = useState<FlowStep>("streams");
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedOption, setSelectedOption] = useState<StreamOption | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // Fetched data state
  const [streams, setStreams] = useState<Stream[]>([]);
  const [options, setOptions] = useState<StreamOption[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  // Initial fetch of streams
  useEffect(() => {
    async function loadStreams() {
      try {
        setLoading(true);
        const res = await fetch("/api/streams");
        const data = await res.json();
        setStreams(data);
      } catch (err) {
        console.error("Error loading streams:", err);
      } finally {
        setLoading(false);
      }
    }
    loadStreams();
  }, []);

  // Fetch Stream Options when stream selected
  const handleSelectStream = async (stream: Stream) => {
    setSelectedStream(stream);
    setSelectedOption(null);
    setSelectedBranch(null);
    try {
      setLoading(true);
      const res = await fetch(`/api/stream-options?stream_id=${stream.id}`);
      const data = await res.json();
      setOptions(data);
      setCurrentStep("options");
    } catch (err) {
      console.error("Error fetching options:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Branches when option selected
  const handleSelectOption = async (option: StreamOption) => {
    setSelectedOption(option);
    setSelectedBranch(null);
    try {
      setLoading(true);
      const res = await fetch(`/api/branches?option_id=${option.id}`);
      const data = await res.json();
      setBranches(data);
      setCurrentStep("branches");
    } catch (err) {
      console.error("Error fetching branches:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Career Paths when branch selected
  const handleSelectBranch = async (branch: Branch) => {
    setSelectedBranch(branch);
    try {
      setLoading(true);
      const res = await fetch(`/api/career-paths?branch_id=${branch.id}`);
      const data = await res.json();
      setCareerPaths(data);
      setCurrentStep("career-paths");
    } catch (err) {
      console.error("Error fetching career paths:", err);
    } finally {
      setLoading(false);
    }
  };

  // Route to roadmap view when career path selected
  const handleSelectCareerPath = (cp: CareerPath) => {
    router.push(`/roadmap/${cp.id}`);
  };

  // Reset flow back to top
  const handleReset = () => {
    setCurrentStep("streams");
    setSelectedStream(null);
    setSelectedOption(null);
    setSelectedBranch(null);
  };

  // Breadcrumb step selector
  const handleSelectBreadcrumbStep = (index: number) => {
    if (index === 0) {
      setCurrentStep("options");
      setSelectedOption(null);
      setSelectedBranch(null);
    } else if (index === 1) {
      setCurrentStep("branches");
      setSelectedBranch(null);
    } else if (index === 2) {
      setCurrentStep("career-paths");
    }
  };

  const breadcrumbItems = [];
  if (selectedStream) breadcrumbItems.push({ id: selectedStream.id, label: selectedStream.name });
  if (selectedOption) breadcrumbItems.push({ id: selectedOption.id, label: selectedOption.title });
  if (selectedBranch) breadcrumbItems.push({ id: selectedBranch.id, label: selectedBranch.title });

  return (
    <div className="min-h-screen bg-charcoal text-offwhite flex flex-col font-sans">
      <Header
        steps={breadcrumbItems}
        onSelectStep={handleSelectBreadcrumbStep}
        onReset={handleReset}
      />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <AnimatePresence mode="wait">
          {/* SCREEN 1: STREAMS SELECTION */}
          {currentStep === "streams" && (
            <motion.div
              key="streams-screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slateAccent/15 border border-slateAccent/30 text-slateAccent text-xs font-medium">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Phase 1 & 2 Foundation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-offwhite tracking-tight">
                  What stream did you complete your 12th in?
                </h2>
                <p className="text-xs sm:text-sm text-offwhite-muted max-w-xl">
                  Select your Class 12 specialization stream to discover higher education options, engineering branches, and detailed learning roadmaps.
                </p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-3">
                  <Loader2 className="w-6 h-6 text-brassAccent animate-spin" />
                  <p className="text-xs text-offwhite-muted">Loading streams...</p>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2"
                >
                  {streams.map((s) => (
                    <StreamCard
                      key={s.id}
                      stream={s}
                      onSelect={handleSelectStream}
                      hasData={s.id === "mpc"}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* SCREEN 2: OPTIONS SCREEN */}
          {currentStep === "options" && selectedStream && (
            <motion.div
              key="options-screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={handleReset}
                  className="text-xs text-offwhite-muted hover:text-offwhite flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Streams
                </button>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-offwhite tracking-tight">
                  Available options for {selectedStream.name}
                </h2>
                <p className="text-xs sm:text-sm text-offwhite-muted max-w-xl">
                  {selectedStream.full_form}. Explore degree programs and technical avenues available after completing this stream.
                </p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-3">
                  <Loader2 className="w-6 h-6 text-brassAccent animate-spin" />
                  <p className="text-xs text-offwhite-muted">Loading options...</p>
                </div>
              ) : options.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 gap-4 pt-2"
                >
                  {options.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      option={opt}
                      onSelect={handleSelectOption}
                    />
                  ))}
                </motion.div>
              ) : (
                <div className="bg-charcoal-surface border border-charcoal-border p-6 rounded-card text-center space-y-3">
                  <AlertCircle className="w-8 h-8 text-brassAccent mx-auto opacity-70" />
                  <h3 className="text-base font-semibold text-offwhite">Options coming in Phase 4</h3>
                  <p className="text-xs text-offwhite-muted max-w-md mx-auto leading-relaxed">
                    Options for <span className="font-semibold text-offwhite">{selectedStream.name}</span> will be seeded in Phase 4. Currently, full data is populated for <span className="text-brassAccent font-medium">MPC → Engineering → CSE → Web Development</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 px-4 py-2 bg-charcoal-elevated border border-charcoal-border text-xs text-offwhite hover:bg-slateAccent/20 transition-colors rounded-lg"
                  >
                    Select MPC Stream
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* SCREEN 3: BRANCH SCREEN */}
          {currentStep === "branches" && selectedOption && (
            <motion.div
              key="branches-screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep("options")}
                  className="text-xs text-offwhite-muted hover:text-offwhite flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to {selectedStream?.name} Options
                </button>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-offwhite tracking-tight">
                  Branches under {selectedOption.title}
                </h2>
                <p className="text-xs sm:text-sm text-offwhite-muted max-w-xl">
                  Select a specialization branch to explore relevant career trajectories and industry roadmaps.
                </p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-3">
                  <Loader2 className="w-6 h-6 text-brassAccent animate-spin" />
                  <p className="text-xs text-offwhite-muted">Loading branches...</p>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 gap-4 pt-2"
                >
                  {branches.map((b) => (
                    <BranchCard
                      key={b.id}
                      branch={b}
                      onSelect={handleSelectBranch}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* SCREEN 4: CAREER PATH SCREEN */}
          {currentStep === "career-paths" && selectedBranch && (
            <motion.div
              key="career-paths-screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep("branches")}
                  className="text-xs text-offwhite-muted hover:text-offwhite flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to Branches
                </button>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-offwhite tracking-tight">
                  Career Paths for {selectedBranch.title}
                </h2>
                <p className="text-xs sm:text-sm text-offwhite-muted max-w-xl">
                  Choose a career path to view a step-by-step visual roadmap node guide.
                </p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-3">
                  <Loader2 className="w-6 h-6 text-brassAccent animate-spin" />
                  <p className="text-xs text-offwhite-muted">Loading career paths...</p>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 gap-4 pt-2"
                >
                  {careerPaths.map((cp) => (
                    <CareerPathCard
                      key={cp.id}
                      careerPath={cp}
                      onSelect={handleSelectCareerPath}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-charcoal-border py-4 px-4 text-center text-xs text-offwhite-dark mt-auto">
        <p>Pathfinder — Demo Career Guidance Platform for 12th Grade Students in India</p>
      </footer>
    </div>
  );
}
