import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// Sanity ჯერ კონფიგურებული არ არის — dummy client
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : createClient({ projectId: "placeholder", dataset, apiVersion: "2024-01-01", useCdn: true });

export const sanityConfigured = !!projectId;
