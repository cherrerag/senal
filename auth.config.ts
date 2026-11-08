import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

// Acceso inicial (D-11): cualquier cuenta de Google con correo verificado.
// Si AUTH_ALLOWED_EMAILS tiene correos (separados por coma), solo esos entran. La lista vive en Vercel, nunca en el código.
const permitidos = (import.meta.env.AUTH_ALLOWED_EMAILS ?? "")
  .split(",")
  .map((s: string) => s.trim().toLowerCase())
  .filter(Boolean);

export default defineConfig({
  providers: [
    Google({
      clientId: import.meta.env.AUTH_GOOGLE_ID,
      clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: { signIn: "/entrar", error: "/entrar" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 30 },
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider !== "google" || !profile?.email || profile.email_verified !== true) return false;
      return permitidos.length === 0 || permitidos.includes(profile.email.toLowerCase());
    },
  },
});
