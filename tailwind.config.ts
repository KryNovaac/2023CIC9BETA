import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Consolidated paths
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");
  const cssVariables: Record<string, string> = {};

  // Flatten colors into CSS variables
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === "string") {
      cssVariables[`--${key}`] = value;
    } else if (typeof value === "object" && value !== null) {
      Object.entries(value).forEach(([shade, shadeValue]) => {
        if (typeof shadeValue === "string") {
          cssVariables[`--${key}-${shade}`] = shadeValue;
        }
      });
    }
  });

  // Add CSS variables to :root
  addBase({
    ":root": cssVariables,
  });
}

export default config;
