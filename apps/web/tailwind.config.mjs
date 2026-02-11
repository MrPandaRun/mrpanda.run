/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        paper: "var(--color-paper)",
        ink: "var(--color-ink)",
        accent: "var(--color-accent)",
        mint: "var(--color-mint)",
        coral: "var(--color-coral)",
        line: "var(--color-line)"
      },
      fontFamily: {
        body: "var(--font-body)",
        display: "var(--font-display)",
        mono: "var(--font-mono)"
      },
      boxShadow: {
        card: "0 20px 45px -28px rgba(7, 14, 31, 0.35)",
        glow: "0 0 0 1px rgba(17, 54, 96, 0.2), 0 15px 30px -22px rgba(0, 114, 145, 0.45)"
      },
      keyframes: {
        rise: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        pulseLine: {
          "0%, 100%": {
            transform: "scaleX(1)",
            opacity: "0.45"
          },
          "50%": {
            transform: "scaleX(1.08)",
            opacity: "0.9"
          }
        }
      },
      animation: {
        rise: "rise 560ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        pulseLine: "pulseLine 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
