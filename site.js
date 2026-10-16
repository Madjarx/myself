// Theme toggle, copy buttons, and "last updated".

// Apply the saved theme before the page renders, so it doesn't flash white.
var root = document.documentElement;
if (localStorage.getItem("theme") === "dark") root.className = "dark";

document.addEventListener("DOMContentLoaded", function () {
  // <button id="theme"> switches between light and dark.
  var theme = document.getElementById("theme");
  function label() {
    theme.textContent = root.className === "dark" ? "Light" : "Dark";
  }
  label();
  theme.onclick = function () {
    root.className = root.className === "dark" ? "" : "dark";
    localStorage.setItem("theme", root.className);
    label();
  };

  // <button data-copy="text"> copies the text to the clipboard.
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.onclick = function () {
      navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "Copied";
      setTimeout(function () { button.textContent = "Copy"; }, 1500);
    };
  });

  // <span id="updated"> shows how long ago the site was last published.
  // GitHub Pages sends the deploy time as the page's Last-Modified date.
  var updated = document.getElementById("updated");
  if (updated) {
    var date = new Date(document.lastModified);
    updated.textContent = ago(date);
    updated.title = date.toDateString();
  }
});

function ago(date) {
  var seconds = (Date.now() - date) / 1000;
  var units = [["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]];
  for (var i = 0; i < units.length; i++) {
    var n = Math.floor(seconds / units[i][1]);
    if (n >= 1) return n + " " + units[i][0] + (n > 1 ? "s" : "") + " ago";
  }
  return "just now";
}
