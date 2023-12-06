/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        footerBackground: "#6300DF",
        white: "#FFFFFF",
        enthuPink: "#FF1472",
        textGrey: "#717171",
        enthuText: "#333333",
        inviteBackground: "rgba(255, 188, 0, 0.2)",
        enthuPurple: "#6300DF",
        enthuGreen: "#27AE60",
        inviteFriend: "#FCFCFC",
        notStartButton: "#FFEBB3",
        enthuLight: "rgba(255, 188, 0, 0.3)",
        sideBarSeprator: "#C4C4C4",
        sideBarText: "#6B7280",
        userName: "#111928",
        ratingColor: "#FFBF00",
        sidebarBackground: "#fff1f7",
        weekButton: "#C4C4C4",
      },
      height: {
        custom: "582px", // You can use any size value here
      },
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
