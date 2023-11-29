/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#ffc639",
        secondary: "#393e46",
        dark: "#222831",
        pindah: "#4F46E5",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        //dimasukan kedalam folder anime[id] jadi disana classnamenya pondok hehe
        ".data-box": {
          "@apply w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2":
            "",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
