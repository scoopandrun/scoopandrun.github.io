const themes = [
  {
    name: "green-white",
    background: "#43a047",
    color: "#fafafa",
  },
  {
    name: "grey-white",
    background: "#485564",
    color: "#fafafa",
  },
  {
    name: "indigo-white",
    background: "#303f9f",
    color: "#fafafa",
  },
  {
    name: "red-white",
    background: "#af3d4e",
    color: "#fafafa",
  },
  {
    name: "white-blue",
    background: "#fafafa",
    color: "#0277bd",
  },
  {
    name: "white-grey",
    background: "#ededed",
    color: "#4b5658",
  },
  {
    name: "white-indigo",
    background: "#e8eaf6",
    color: "#303f9f",
  },
  {
    name: "white-red",
    background: "#ededed",
    color: "#af3d4e",
  },
  {
    name: "yellow-black",
    background: "#ffeb3b",
    color: "#1e1e1e",
  },
];

const defaultThemeName = "white-grey";

function getRandomTheme() {
  return themes[Math.floor(Math.random() * themes.length)];
}

/**
 * @param {themes[number]} theme
 */
function applyTheme(theme) {
  document.documentElement.style.setProperty("--background", theme.background);
  document.documentElement.style.setProperty("--color", theme.color);
  localStorage.setItem("theme", theme.name);
}

document.addEventListener("DOMContentLoaded", () => {
  let themeName = localStorage.getItem("theme") || defaultThemeName;
  let theme = themes.find((theme) => theme.name === themeName);
  applyTheme(theme);
});
