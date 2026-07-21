export interface Stream {
  id: string;
  name: string;
  full_form: string;
  description: string;
}

export interface StreamOption {
  id: string;
  stream_id: string;
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  option_id: string;
  title: string;
  description: string;
}

export interface CareerPath {
  id: string;
  branch_id: string;
  title: string;
  description: string;
}

export interface RoadmapNode {
  id: string;
  career_path_id: string;
  title: string;
  description: string;
  node_type: "core" | "branch";
  column: number;
  row: number;
}

export interface RoadmapEdge {
  id: string;
  source_node_id: string;
  target_node_id: string;
  style: "solid" | "dotted";
}

// Full 5 Streams Data
export const STREAMS_DATA: Stream[] = [
  {
    id: "mpc",
    name: "MPC",
    full_form: "Mathematics, Physics, Chemistry",
    description:
      "Premier stream focusing on physical sciences, analytical problem solving, and higher mathematics. Opens pathways to Engineering, Architecture, Pure Sciences, and Technology.",
  },
  {
    id: "bipc",
    name: "BiPC",
    full_form: "Biology, Physics, Chemistry",
    description:
      "Core medical and biological sciences stream preparing students for Medicine, Dentistry, Pharmacy, Biotechnology, and Allied Health Sciences.",
  },
  {
    id: "cec",
    name: "CEC",
    full_form: "Civics, Economics, Commerce",
    description:
      "Foundation stream for legal studies, financial management, economics, business administration, and public services.",
  },
  {
    id: "mec",
    name: "MEC",
    full_form: "Mathematics, Economics, Commerce",
    description:
      "Powerful hybrid stream blending mathematical analytics with commerce, economics, actuary, and accounting.",
  },
  {
    id: "diploma",
    name: "Diploma",
    full_form: "Polytechnic Diploma",
    description:
      "3-year skill-focused technical diploma enabling direct entry into professional domains or 2nd-year lateral B.Tech engineering.",
  },
];

// Full Stream Options Data (All 5 Streams)
export const STREAM_OPTIONS_DATA: StreamOption[] = [
  // MPC Options
  {
    id: "eng",
    stream_id: "mpc",
    title: "Engineering",
    description:
      "4-year technical degree focusing on solving complex real-world problems through science, mathematics, and computing.",
  },
  // BiPC Options
  {
    id: "med",
    stream_id: "bipc",
    title: "Medicine & Allied Healthcare",
    description:
      "Clinical science and patient care programs focusing on diagnosis, therapy, medical surgery, and healthcare administration.",
  },
  {
    id: "pharma-bio",
    stream_id: "bipc",
    title: "Pharmacy & Biotechnology",
    description:
      "Applied biological and biochemical sciences focusing on drug research, formulation, genetics, and industrial bio-manufacturing.",
  },
  // CEC Options
  {
    id: "comm-fin",
    stream_id: "cec",
    title: "Commerce & Financial Management",
    description:
      "Business accounting, corporate auditing, tax compliance, and financial analysis.",
  },
  {
    id: "law-gov",
    stream_id: "cec",
    title: "Legal Studies & Public Governance",
    description:
      "Constitutional doctrine, corporate legal governance, advocacy, and public administration.",
  },
  // MEC Options
  {
    id: "actuary-data",
    stream_id: "mec",
    title: "Actuarial Science & Quantitative Analytics",
    description:
      "Mathematical modeling, risk analysis, econometrics, and financial forecasting for banking and insurance.",
  },
  {
    id: "bus-admin",
    stream_id: "mec",
    title: "Business Administration & Management",
    description:
      "Corporate operations, strategic leadership, marketing analytics, and business growth strategies.",
  },
  // Diploma Options
  {
    id: "poly-tech",
    stream_id: "diploma",
    title: "Technical Engineering Diploma",
    description:
      "3-year practical polytechnic training offering early job readiness or direct 2nd-year lateral entry into B.Tech degree programs.",
  },
];

// Full Branches Data (All 5 Streams)
export const BRANCHES_DATA: Branch[] = [
  // Engineering Branches (MPC)
  {
    id: "cse",
    option_id: "eng",
    title: "Computer Science & Engineering (CSE)",
    description:
      "Study of computation, programming, algorithm design, software architecture, and intelligent systems.",
  },
  // Medicine Branches (BiPC)
  {
    id: "mbbs",
    option_id: "med",
    title: "MBBS (Medicine & Surgery)",
    description:
      "Comprehensive 5.5-year clinical degree preparing doctors for general practice, surgery, and medical specialization.",
  },
  {
    id: "bds",
    option_id: "med",
    title: "BDS (Dental Surgery)",
    description:
      "Specialized surgical degree focusing on oral healthcare, dental surgery, and orthodontics.",
  },
  // Pharmacy Branches (BiPC)
  {
    id: "b-pharm",
    option_id: "pharma-bio",
    title: "B.Pharm (Bachelor of Pharmacy)",
    description:
      "Degree in pharmaceutical chemistry, pharmacology, drug discovery, and quality assurance.",
  },
  // Commerce Branches (CEC)
  {
    id: "bcom",
    option_id: "comm-fin",
    title: "B.Com (Bachelor of Commerce)",
    description:
      "Foundational degree in financial accounting, auditing, business economics, and commercial law.",
  },
  // Law Branches (CEC)
  {
    id: "ba-llb",
    option_id: "law-gov",
    title: "Integrated BA LL.B (Law)",
    description:
      "5-year integrated law degree combining humanities with legal jurisprudence and court advocacy.",
  },
  // Actuarial / Stats Branches (MEC)
  {
    id: "bsc-econ-math",
    option_id: "actuary-data",
    title: "B.Sc Economics & Mathematical Statistics",
    description:
      "Degree combining advanced economic theory, data modeling, probability, and financial statistics.",
  },
  // Management Branches (MEC)
  {
    id: "bba",
    option_id: "bus-admin",
    title: "BBA (Business Administration)",
    description:
      "Undergraduate business degree covering management operations, corporate finance, and marketing.",
  },
  // Diploma Branches (Diploma)
  {
    id: "dip-mech",
    option_id: "poly-tech",
    title: "Diploma in Mechanical Engineering",
    description:
      "Practical engineering diploma covering machine design, thermal systems, and manufacturing operations.",
  },
  {
    id: "dip-ece",
    option_id: "poly-tech",
    title: "Diploma in Electronics & Communication",
    description:
      "Hands-on diploma covering circuit design, embedded microcontrollers, and telecommunications equipment.",
  },
];

// Full Career Paths Data (All 5 Streams)
export const CAREER_PATHS_DATA: CareerPath[] = [
  // CSE Paths (MPC)
  {
    id: "web-dev",
    branch_id: "cse",
    title: "Web Development",
    description:
      "Building responsive client interfaces, server applications, databases, and modern web software.",
  },
  // MBBS Paths (BiPC)
  {
    id: "general-physician",
    branch_id: "mbbs",
    title: "General Physician & Resident Doctor",
    description:
      "Diagnosing clinical ailments, treating patients in hospital settings, and managing primary health care.",
  },
  // BDS Paths (BiPC)
  {
    id: "dental-surgeon",
    branch_id: "bds",
    title: "Dental Surgeon & Orthodontist",
    description:
      "Running dental clinic practices, performing oral surgeries, and providing corrective dental care.",
  },
  // B.Pharm Paths (BiPC)
  {
    id: "pharmacist",
    branch_id: "b-pharm",
    title: "Clinical & Industrial Pharmacist",
    description:
      "Drug formulation, pharmaceutical manufacturing supervision, and clinical trial coordination.",
  },
  // B.Com Paths (CEC)
  {
    id: "ca",
    branch_id: "bcom",
    title: "Chartered Accountant (CA)",
    description:
      "Corporate financial auditing, GST taxation compliance, advisory, and statutory reporting.",
  },
  // BA LL.B Paths (CEC)
  {
    id: "corporate-lawyer",
    branch_id: "ba-llb",
    title: "Corporate Lawyer & Legal Consultant",
    description:
      "Drafting business contracts, advising on mergers & acquisitions, and handling corporate compliance.",
  },
  // B.Sc Econ Paths (MEC)
  {
    id: "actuary",
    branch_id: "bsc-econ-math",
    title: "Actuarial Analyst & Risk Manager",
    description:
      "Using mathematical and statistical models to assess financial risks in insurance and investments.",
  },
  // BBA Paths (MEC)
  {
    id: "business-analyst",
    branch_id: "bba",
    title: "Business Analyst & Operations Specialist",
    description:
      "Analyzing business processes, evaluating market metrics, and driving operational efficiency.",
  },
  // Diploma Mech Paths (Diploma)
  {
    id: "junior-engineer",
    branch_id: "dip-mech",
    title: "Junior Mechanical Engineer",
    description:
      "Supervising factory manufacturing lines, CAD drafting, and equipment maintenance.",
  },
  // Diploma ECE Paths (Diploma)
  {
    id: "embedded-tech",
    branch_id: "dip-ece",
    title: "Embedded Systems Technician",
    description:
      "Assembling PCB circuits, testing microcontroller hardware, and supporting field electronics.",
  },
];

// Web Dev Roadmap Data (Seeded in Phase 1)
export const ROADMAP_NODES_DATA: RoadmapNode[] = [
  {
    id: "node-internet",
    career_path_id: "web-dev",
    title: "Internet Fundamentals",
    description:
      "How HTTP/HTTPS, DNS, IP addresses, domain names, and web hosting work under the hood.",
    node_type: "core",
    column: 1,
    row: 1,
  },
  {
    id: "node-html",
    career_path_id: "web-dev",
    title: "HTML5",
    description:
      "Semantic markup, forms, accessibility (a11y), SEO tags, and document structure.",
    node_type: "core",
    column: 1,
    row: 2,
  },
  {
    id: "node-css",
    career_path_id: "web-dev",
    title: "CSS3 & Layouts",
    description:
      "Responsive design, Flexbox, CSS Grid, custom properties, and modern UI styling.",
    node_type: "core",
    column: 1,
    row: 3,
  },
  {
    id: "node-tailwind",
    career_path_id: "web-dev",
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid component styling and design system integration.",
    node_type: "branch",
    column: 2,
    row: 3,
  },
  {
    id: "node-js",
    career_path_id: "web-dev",
    title: "Modern JavaScript (ES6+)",
    description:
      "Closures, DOM manipulation, Async/Await, Fetch API, ES Modules, and event loops.",
    node_type: "core",
    column: 1,
    row: 4,
  },
  {
    id: "node-git",
    career_path_id: "web-dev",
    title: "Version Control (Git)",
    description:
      "Commit workflows, branching strategies, pull requests, and code collaboration.",
    node_type: "core",
    column: 1,
    row: 5,
  },
  {
    id: "node-pkg",
    career_path_id: "web-dev",
    title: "Package Managers",
    description:
      "Managing external libraries, scripts, and dependencies using npm, yarn, or pnpm.",
    node_type: "core",
    column: 1,
    row: 6,
  },
  {
    id: "node-react",
    career_path_id: "web-dev",
    title: "React.js",
    description:
      "Component-based UI development, hooks, state management, and virtual DOM rendering.",
    node_type: "core",
    column: 1,
    row: 7,
  },
  {
    id: "node-testing",
    career_path_id: "web-dev",
    title: "Web Testing",
    description:
      "Unit testing, component testing, and end-to-end testing using Vitest and Playwright.",
    node_type: "branch",
    column: 2,
    row: 7,
  },
  {
    id: "node-nextjs",
    career_path_id: "web-dev",
    title: "Next.js Framework",
    description:
      "Fullstack React framework providing App Router, SSR/SSG rendering, and API routes.",
    node_type: "core",
    column: 1,
    row: 8,
  },
  {
    id: "node-security",
    career_path_id: "web-dev",
    title: "Web Security Basics",
    description:
      "Understanding CORS, Content Security Policy (CSP), OWASP vulnerabilities, and HTTPS.",
    node_type: "branch",
    column: 2,
    row: 8,
  },
];

export const ROADMAP_EDGES_DATA: RoadmapEdge[] = [
  { id: "edge-1", source_node_id: "node-internet", target_node_id: "node-html", style: "solid" },
  { id: "edge-2", source_node_id: "node-html", target_node_id: "node-css", style: "solid" },
  { id: "edge-3", source_node_id: "node-css", target_node_id: "node-tailwind", style: "dotted" },
  { id: "edge-4", source_node_id: "node-css", target_node_id: "node-js", style: "solid" },
  { id: "edge-5", source_node_id: "node-js", target_node_id: "node-git", style: "solid" },
  { id: "edge-6", source_node_id: "node-git", target_node_id: "node-pkg", style: "solid" },
  { id: "edge-7", source_node_id: "node-pkg", target_node_id: "node-react", style: "solid" },
  { id: "edge-8", source_node_id: "node-react", target_node_id: "node-testing", style: "dotted" },
  { id: "edge-9", source_node_id: "node-react", target_node_id: "node-nextjs", style: "solid" },
  { id: "edge-10", source_node_id: "node-nextjs", target_node_id: "node-security", style: "dotted" },
];

export async function fetchStreams(): Promise<Stream[]> {
  return STREAMS_DATA;
}

export async function fetchStreamOptions(streamId?: string): Promise<StreamOption[]> {
  if (!streamId) return STREAM_OPTIONS_DATA;
  return STREAM_OPTIONS_DATA.filter((opt) => opt.stream_id === streamId);
}

export async function fetchBranches(optionId?: string): Promise<Branch[]> {
  if (!optionId) return BRANCHES_DATA;
  return BRANCHES_DATA.filter((b) => b.option_id === optionId);
}

export async function fetchCareerPaths(branchId?: string): Promise<CareerPath[]> {
  if (!branchId) return CAREER_PATHS_DATA;
  return CAREER_PATHS_DATA.filter((cp) => cp.branch_id === branchId);
}

export async function fetchRoadmapGraph(careerPathId: string) {
  const nodes = ROADMAP_NODES_DATA.filter((n) => n.career_path_id === careerPathId);
  const nodeIds = new Set(nodes.map((n) => n.id));
  const edges = ROADMAP_EDGES_DATA.filter(
    (e) => nodeIds.has(e.source_node_id) && nodeIds.has(e.target_node_id)
  );
  return { nodes, edges };
}
