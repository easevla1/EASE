"use strict";
(() => {
  const content = window.EASE_CONTENT;
  if (!content) return;
  const setText = (id, value) => { document.getElementById(id).textContent = value; };
  setText("project-name", content.name);
  setText("title", content.title);
  setText("status", content.status);
  setText("abstract-text", content.abstract);
  document.title = `${content.name} | ${content.title}`;
  for (const field of ["authors", "affiliations"]) {
    if (content[field]?.length) {
      setText(field, content[field].join(" · "));
      document.getElementById(field).hidden = false;
    }
  }
  const safeURL = value => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:", "file:"].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const resources = document.getElementById("resources");
  resources.replaceChildren();
  for (const [key, label] of [["paper", "Paper"], ["code", "Code"], ["demo", "Demo"]]) {
    const href = safeURL(content.links?.[key]);
    const element = document.createElement(href ? "a" : "span");
    element.className = `resource ${href ? "available" : "unavailable"}`;
    element.append(document.createTextNode(label));
    const note = document.createElement("span");
    note.textContent = href ? "↗" : "Coming soon";
    if (href) { element.href = href; element.target = "_blank"; element.rel = "noopener noreferrer"; }
    element.append(note);
    resources.append(element);
  }
  if (safeURL(content.video)) {
    document.getElementById("demo-video").src = safeURL(content.video);
    document.getElementById("video-section").hidden = false;
  }
  if (content.bibtex?.trim()) {
    setText("bibtex", content.bibtex);
    document.getElementById("citation-section").hidden = false;
  }
})();
