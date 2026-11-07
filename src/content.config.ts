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
    coautor: z.string().optional(),
    nota: z.string().optional(),
  }),
});

export const collections = { ensayos };
