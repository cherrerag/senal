import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ensayos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ensayos" }),
  schema: z.object({
    titulo: z.string(),
    numero: z.string(),
    orden: z.number(),
    pregunta: z.string(),
    fecha: z.coerce.date(),
    serie: z.string(),
    autor: z.string(),
    encargo: z.string().optional(),
    nota: z.string().optional(),
  }),
});

// Obras de la Biblioteca publicadas desde el Agente de conocimiento (motor/portal.py).
const satelital = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/satelital" }),
  schema: z.object({ titulo: z.string(), parte: z.string(), parte_titulo: z.string(), orden: z.number() }),
});

export const collections = { ensayos, satelital };
