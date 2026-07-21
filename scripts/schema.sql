-- PostgreSQL / Supabase Migration Script for Career Guidance App

CREATE TABLE IF NOT EXISTS streams (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    full_form TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS stream_options (
    id TEXT PRIMARY KEY,
    stream_id TEXT NOT NULL REFERENCES streams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS branches (
    id TEXT PRIMARY KEY,
    option_id TEXT NOT NULL REFERENCES stream_options(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS career_paths (
    id TEXT PRIMARY KEY,
    branch_id TEXT NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS roadmap_nodes (
    id TEXT PRIMARY KEY,
    career_path_id TEXT NOT NULL REFERENCES career_paths(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    node_type TEXT NOT NULL CHECK (node_type IN ('core', 'branch')),
    column INTEGER NOT NULL,
    row INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS roadmap_edges (
    id TEXT PRIMARY KEY,
    source_node_id TEXT NOT NULL REFERENCES roadmap_nodes(id) ON DELETE CASCADE,
    target_node_id TEXT NOT NULL REFERENCES roadmap_nodes(id) ON DELETE CASCADE,
    style TEXT NOT NULL CHECK (style IN ('solid', 'dotted'))
);
