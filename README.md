# Career Compass 🧭

> A demo career-guidance web application designed specifically for Indian 12th-grade students to explore higher education streams, degree options, engineering branches, and interactive skill roadmaps.

---

## 🌟 Overview

**Career Compass** simplifies post-12th decision-making for Indian students by providing a structured 4-step exploration flow:
1. **Stream Selection**: Explore Class 12 specialization streams (**MPC**, **BiPC**, **CEC**, **MEC**, **Diploma**).
2. **Options Discovery**: Discover degree programs, technical avenues, and career paths.
3. **Branch Specializations**: Narrow down specific academic branches such as CSE, MBBS, BDS, B.Com, BA LL.B, BBA, and Mechanical Diploma.
4. **Career Trajectories & Interactive Roadmaps**: View career paths and explore step-by-step milestone graphs inspired by *roadmap.sh*.

---

## 🎨 Design System & Aesthetics

Grounding the visual design in authentic **study/stationery materials** rather than generic AI/SaaS neon templates:

- **Charcoal Ink Background**: `#1B1E24`
- **Warm Off-White Typography**: `#E7E4DC`
- **Muted Slate-Blue Primary Accent**: `#4C6580`
- **Warm Brass/Mustard Accent**: `#B98D46` (Used sparingly for calls-to-action & emphasis)
- **Soft Sage State Badges**: `#7C8F72`

### Motion & Interactions
- **Cohesive Easing**: Standardized gentle curve (`ease-out`, 350ms) across all transitions.
- **Scroll-Triggered Reveals**: Staggered `whileInView` row entrances as students scroll down.
- **Mobile-Friendly Click-to-Expand**: Accordion explanation panels expand seamlessly on click/tap.
- **Soft Page Transitions**: Cross-fade and gentle slide transitions between exploration steps.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Hooks)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Database / ORM**: [PostgreSQL](https://www.postgresql.org/) via [Prisma ORM](https://www.prisma.io/) & [Supabase Client](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🗄️ Database Schema & Data Layer

The application schema is fully relational, defined in `prisma/schema.prisma` and `scripts/schema.sql`:

```mermaid
erDiagram
    STREAMS ||--o{ STREAM_OPTIONS : "has"
    STREAM_OPTIONS ||--o{ BRANCHES : "has"
    BRANCHES ||--o{ CAREER_PATHS : "has"
    CAREER_PATHS ||--o{ ROADMAP_NODES : "contains"
    ROADMAP_NODES ||--o{ ROADMAP_EDGES : "connects"

    STREAMS {
        string id PK
        string name
        string full_form
        string description
    }
    STREAM_OPTIONS {
        string id PK
        string stream_id FK
        string title
        string description
    }
    BRANCHES {
        string id PK
        string option_id FK
        string title
        string description
    }
    CAREER_PATHS {
        string id PK
        string branch_id FK
        string title
        string description
    }
    ROADMAP_NODES {
        string id PK
        string career_path_id FK
        string title
        string description
        string node_type
        int column
        int row
    }
    ROADMAP_EDGES {
        string id PK
        string source_node_id FK
        string target_node_id FK
        string style
    }
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed on your system
- Git

### 2. Installation & Setup

```bash
# Clone the repository
git clone https://github.com/kesav1478/Carrer-Compass.git
cd Carrer-Compass

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔌 API Endpoints

- `GET /api/streams` — List all Class 12 streams
- `GET /api/stream-options?stream_id={id}` — Retrieve stream-specific options
- `GET /api/branches?option_id={id}` — Retrieve academic branches
- `GET /api/career-paths?branch_id={id}` — Retrieve career trajectories
- `GET /api/roadmap/[pathId]` — Retrieve roadmap nodes and edges for the visual graph

---

## 🗃️ Supabase / PostgreSQL Database Seeding

To run seeds on Supabase or a local PostgreSQL instance:

1. Execute `scripts/schema.sql` in your Supabase SQL Editor.
2. Execute `scripts/seed.sql` to populate streams, options, branches, career paths, and roadmap graphs.

Or using Prisma:

```bash
npx prisma db push
npm run db:seed
```

---

## 🌐 Deployment

### Deploying to Vercel

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Optionally configure the `DATABASE_URL` environment variable for your Supabase PostgreSQL database.
4. Deploy the app.

---

## ✨ Key Features

- Stream-based career exploration for Indian students after Class 12
- Easy comparison between academic streams such as MPC, BiPC, CEC, MEC, and Diploma
- Guided discovery of degree options, academic branches, and career paths
- Interactive roadmap visualization inspired by milestone-based learning graphs
- Fully responsive, modern UI built for both desktop and mobile browsing
- Data-driven structure using Prisma and PostgreSQL for consistent content management

---

## 📁 Project Structure

```bash
Carrer-Compass/
├── prisma/
│   └── schema.prisma
├── scripts/
│   ├── schema.sql
│   └── seed.sql
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── roadmap/[pathId]/page.tsx
│   ├── components/
│   └── lib/
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

This structure keeps the app organized into route-level pages, reusable UI components, and a data layer for stream and roadmap content.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root if your local setup uses environment-based configuration:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/career_compass"
# Optional if using Supabase client features
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

> For a local development setup, make sure your PostgreSQL database is running before using Prisma commands or seeding the data.

---

## 🧭 User Journey

1. Select a Class 12 stream.
2. Explore relevant education and career options.
3. Choose an academic branch or specialization.
4. Review career paths and progression milestones.
5. Study the interactive roadmap to understand skills, subjects, and next steps.

This flow is designed to help students make more informed decisions without feeling overwhelmed by too many choices.

---

## 🤝 Contributing

Contributions are welcome if you want to improve the content, add more streams, expand the roadmap graph, or enhance the UI.

Typical contribution ideas:

- Add more Indian academic streams and degree programs
- Improve roadmap content and milestone descriptions
- Refine the user experience for mobile devices
- Add analytics, filters, or search support

---

## 📜 License

MIT License. Built to support career guidance for Indian students after Class 12.
