// Edit this file to update the project page. Keep links null until they are ready.
window.EASE_CONTENT = {
  name: "EASE",
  title: "Experience-Adaptive VLA Skill Execution via Action Caching for Robot-Use Agents",
  authors: [],
  affiliations: [],
  status: "Project materials coming soon",
  abstract: "Robot-use agents increasingly combine geometric motion primitives with vision-language-action (VLA) policies to solve manipulation tasks. However, selecting an appropriate VLA skill does not ensure that its execution matches the behavior required by the current state, and textual experience remains constrained by the frozen policy’s learned language–action mapping. We present EASE, an experience-adaptive execution interface that steers frozen VLA skills through resumable action caching. EASE stores intermediate action chunks from policy predictions and selects them as starting points for few-step generation conditioned on current observations and instructions. A context-aligned retriever combines local visual correspondence with contextual representations from the VLA backbone, jointly trained using action-similarity supervision. An execution-grounded selector then incorporates accumulated interaction evidence, forming local-effect proposals and successful-trajectory references and arbitrating between them using successful precedents of the current choice. This separates reusable action references from the experience governing their selection, enabling behavior selection to adapt while the VLA backbone remains frozen. EASE provides a mechanism for improving learned-skill execution alongside the task programs that orchestrate heterogeneous robot skills.",
  links: { paper: null, code: null, demo: null },
  // Optional: add a local video path, e.g. "assets/demo.mp4".
  video: null,
  // Optional: paste the final BibTeX entry here. Leave empty until available.
  bibtex: ""
};
