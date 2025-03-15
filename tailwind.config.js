/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          ibm: ['"IBM Plex Mono"', 'serif'], // Add IBM Plex Mono as a family
        },
        fontWeight: {
          regular: '400',
          medium: '500',
          bold: '700',
        },
      content: [
         // Scan all files in the src directory
      ],
    },
    plugins: [],
  }
  }