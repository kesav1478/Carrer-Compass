-- Complete SQL Seed Script for Career Guidance App (All 5 Streams)

-- 1. STREAMS DATA
INSERT INTO streams (id, name, full_form, description) VALUES
('mpc', 'MPC', 'Mathematics, Physics, Chemistry', 'Premier stream focusing on physical sciences, analytical problem solving, and higher mathematics. Opens pathways to Engineering, Architecture, Pure Sciences, and Technology.'),
('bipc', 'BiPC', 'Biology, Physics, Chemistry', 'Core medical and biological sciences stream preparing students for Medicine, Dentistry, Pharmacy, Biotechnology, and Allied Health Sciences.'),
('cec', 'CEC', 'Civics, Economics, Commerce', 'Foundation stream for legal studies, financial management, economics, business administration, and public services.'),
('mec', 'MEC', 'Mathematics, Economics, Commerce', 'Powerful hybrid stream blending mathematical analytics with commerce, economics, actuary, and accounting.'),
('diploma', 'Diploma', 'Polytechnic Diploma', '3-year skill-focused technical diploma enabling direct entry into professional domains or 2nd-year lateral B.Tech engineering.')
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name,
    full_form = EXCLUDED.full_form,
    description = EXCLUDED.description;

-- 2. STREAM OPTIONS DATA
INSERT INTO stream_options (id, stream_id, title, description) VALUES
('eng', 'mpc', 'Engineering', '4-year technical degree focusing on solving complex real-world problems through science, mathematics, and computing.'),
('med', 'bipc', 'Medicine & Allied Healthcare', 'Clinical science and patient care programs focusing on diagnosis, therapy, medical surgery, and healthcare administration.'),
('pharma-bio', 'bipc', 'Pharmacy & Biotechnology', 'Applied biological and biochemical sciences focusing on drug research, formulation, genetics, and industrial bio-manufacturing.'),
('comm-fin', 'cec', 'Commerce & Financial Management', 'Business accounting, corporate auditing, tax compliance, and financial analysis.'),
('law-gov', 'cec', 'Legal Studies & Public Governance', 'Constitutional doctrine, corporate legal governance, advocacy, and public administration.'),
('actuary-data', 'mec', 'Actuarial Science & Quantitative Analytics', 'Mathematical modeling, risk analysis, econometrics, and financial forecasting for banking and insurance.'),
('bus-admin', 'mec', 'Business Administration & Management', 'Corporate operations, strategic leadership, marketing analytics, and business growth strategies.'),
('poly-tech', 'diploma', 'Technical Engineering Diploma', '3-year practical polytechnic training offering early job readiness or direct 2nd-year lateral entry into B.Tech degree programs.')
ON CONFLICT (id) DO UPDATE SET 
    stream_id = EXCLUDED.stream_id,
    title = EXCLUDED.title,
    description = EXCLUDED.description;

-- 3. BRANCHES DATA
INSERT INTO branches (id, option_id, title, description) VALUES
('cse', 'eng', 'Computer Science & Engineering (CSE)', 'Study of computation, programming, algorithm design, software architecture, and intelligent systems.'),
('mbbs', 'med', 'MBBS (Medicine & Surgery)', 'Comprehensive 5.5-year clinical degree preparing doctors for general practice, surgery, and medical specialization.'),
('bds', 'med', 'BDS (Dental Surgery)', 'Specialized surgical degree focusing on oral healthcare, dental surgery, and orthodontics.'),
('b-pharm', 'pharma-bio', 'B.Pharm (Bachelor of Pharmacy)', 'Degree in pharmaceutical chemistry, pharmacology, drug discovery, and quality assurance.'),
('bcom', 'comm-fin', 'B.Com (Bachelor of Commerce)', 'Foundational degree in financial accounting, auditing, business economics, and commercial law.'),
('ba-llb', 'law-gov', 'Integrated BA LL.B (Law)', '5-year integrated law degree combining humanities with legal jurisprudence and court advocacy.'),
('bsc-econ-math', 'actuary-data', 'B.Sc Economics & Mathematical Statistics', 'Degree combining advanced economic theory, data modeling, probability, and financial statistics.'),
('bba', 'bus-admin', 'BBA (Business Administration)', 'Undergraduate business degree covering management operations, corporate finance, and marketing.'),
('dip-mech', 'poly-tech', 'Diploma in Mechanical Engineering', 'Practical engineering diploma covering machine design, thermal systems, and manufacturing operations.'),
('dip-ece', 'poly-tech', 'Diploma in Electronics & Communication', 'Hands-on diploma covering circuit design, embedded microcontrollers, and telecommunications equipment.')
ON CONFLICT (id) DO UPDATE SET 
    option_id = EXCLUDED.option_id,
    title = EXCLUDED.title,
    description = EXCLUDED.description;

-- 4. CAREER PATHS DATA
INSERT INTO career_paths (id, branch_id, title, description) VALUES
('web-dev', 'cse', 'Web Development', 'Building responsive client interfaces, server applications, databases, and modern web software.'),
('general-physician', 'mbbs', 'General Physician & Resident Doctor', 'Diagnosing clinical ailments, treating patients in hospital settings, and managing primary health care.'),
('dental-surgeon', 'bds', 'Dental Surgeon & Orthodontist', 'Running dental clinic practices, performing oral surgeries, and providing corrective dental care.'),
('pharmacist', 'b-pharm', 'Clinical & Industrial Pharmacist', 'Drug formulation, pharmaceutical manufacturing supervision, and clinical trial coordination.'),
('ca', 'bcom', 'Chartered Accountant (CA)', 'Corporate financial auditing, GST taxation compliance, advisory, and statutory reporting.'),
('corporate-lawyer', 'ba-llb', 'Corporate Lawyer & Legal Consultant', 'Drafting business contracts, advising on mergers & acquisitions, and handling corporate compliance.'),
('actuary', 'bsc-econ-math', 'Actuarial Analyst & Risk Manager', 'Using mathematical and statistical models to assess financial risks in insurance and investments.'),
('business-analyst', 'bba', 'Business Analyst & Operations Specialist', 'Analyzing business processes, evaluating market metrics, and driving operational efficiency.'),
('junior-engineer', 'dip-mech', 'Junior Mechanical Engineer', 'Supervising factory manufacturing lines, CAD drafting, and equipment maintenance.'),
('embedded-tech', 'dip-ece', 'Embedded Systems Technician', 'Assembling PCB circuits, testing microcontroller hardware, and supporting field electronics.')
ON CONFLICT (id) DO UPDATE SET 
    branch_id = EXCLUDED.branch_id,
    title = EXCLUDED.title,
    description = EXCLUDED.description;

-- 5. ROADMAP NODES (Web Development)
INSERT INTO roadmap_nodes (id, career_path_id, title, description, node_type, column, row) VALUES
('node-internet', 'web-dev', 'Internet Fundamentals', 'How HTTP/HTTPS, DNS, IP addresses, domain names, and web hosting work under the hood.', 'core', 1, 1),
('node-html', 'web-dev', 'HTML5', 'Semantic markup, forms, accessibility (a11y), SEO tags, and document structure.', 'core', 1, 2),
('node-css', 'web-dev', 'CSS3 & Layouts', 'Responsive design, Flexbox, CSS Grid, custom properties, and modern UI styling.', 'core', 1, 3),
('node-tailwind', 'web-dev', 'Tailwind CSS', 'Utility-first CSS framework for rapid component styling and design system integration.', 'branch', 2, 3),
('node-js', 'web-dev', 'Modern JavaScript (ES6+)', 'Closures, DOM manipulation, Async/Await, Fetch API, ES Modules, and event loops.', 'core', 1, 4),
('node-git', 'web-dev', 'Version Control (Git)', 'Commit workflows, branching strategies, pull requests, and code collaboration.', 'core', 1, 5),
('node-pkg', 'web-dev', 'Package Managers', 'Managing external libraries, scripts, and dependencies using npm, yarn, or pnpm.', 'core', 1, 6),
('node-react', 'web-dev', 'React.js', 'Component-based UI development, hooks, state management, and virtual DOM rendering.', 'core', 1, 7),
('node-testing', 'web-dev', 'Web Testing', 'Unit testing, component testing, and end-to-end testing using Vitest and Playwright.', 'branch', 2, 7),
('node-nextjs', 'web-dev', 'Next.js Framework', 'Fullstack React framework providing App Router, SSR/SSG rendering, and API routes.', 'core', 1, 8),
('node-security', 'web-dev', 'Web Security Basics', 'Understanding CORS, Content Security Policy (CSP), OWASP vulnerabilities, and HTTPS.', 'branch', 2, 8)
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    node_type = EXCLUDED.node_type,
    "column" = EXCLUDED."column",
    "row" = EXCLUDED."row";

-- 6. ROADMAP EDGES
INSERT INTO roadmap_edges (id, source_node_id, target_node_id, style) VALUES
('edge-1', 'node-internet', 'node-html', 'solid'),
('edge-2', 'node-html', 'node-css', 'solid'),
('edge-3', 'node-css', 'node-tailwind', 'dotted'),
('edge-4', 'node-css', 'node-js', 'solid'),
('edge-5', 'node-js', 'node-git', 'solid'),
('edge-6', 'node-git', 'node-pkg', 'solid'),
('edge-7', 'node-pkg', 'node-react', 'solid'),
('edge-8', 'node-react', 'node-testing', 'dotted'),
('edge-9', 'node-react', 'node-nextjs', 'solid'),
('edge-10', 'node-nextjs', 'node-security', 'dotted')
ON CONFLICT (id) DO UPDATE SET 
    source_node_id = EXCLUDED.source_node_id,
    target_node_id = EXCLUDED.target_node_id,
    style = EXCLUDED.style;
