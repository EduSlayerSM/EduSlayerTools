/* ============================================================
   TOOL LIST — naya tool add karna ho to yahin ek entry badhao,
   band karna ho to active:false kar do (card grey ho jayega).
   ============================================================ */
const TOOLS = [
  {
    icon: "🪪",
    name: "School ID Card Studio",
    desc: "Bulk school ID cards — import student data from a CSV, match photos, export as PDF or PNG.",
    href: "school-id.html",
    active: true
  },
  {
    icon: "🖼️",
    name: "Photo Box Studio",
    desc: "Fit or resize photos to passport size or any fixed size, in bulk, in one click.",
    href: "photo-box.html",
    active: true
  },
  {
    icon: "＋",
    name: "New Tool",
    desc: "Coming soon — once it's ready, this card goes live automatically.",
    href: "",
    active: false
  },
  {
    icon: "＋",
    name: "New Tool",
    desc: "This slot is reserved for whatever I build next. More tools keep getting added here.",
    href: "",
    active: false
  }
];

function renderTools(){
  const grid = document.getElementById("toolGrid");
  grid.innerHTML = TOOLS.map(t => {
    const cls = t.active ? "tool-card active" : "tool-card locked";
    const tag = t.active ? '<span class="tag">Live</span>' : '<span class="tag soon">Coming Soon</span>';
    const cta = t.active
      ? `<span class="tc-cta">Open tool
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
         </span>`
      : `<span class="tc-cta" style="color:var(--ink-3)">Not available yet</span>`;
    const tag_wrap = `<div class="tc-top"><div class="tc-icon">${t.icon}</div>${tag}</div>`;
    const inner = `${tag_wrap}<div class="tc-name">${t.name}</div><div class="tc-desc">${t.desc}</div>${cta}`;
    return t.active
      ? `<a class="${cls}" href="${t.href}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="${cls}">${inner}</div>`;
  }).join("");

  const liveCount = TOOLS.filter(t => t.active).length;
  const statEl = document.getElementById("toolCount");
  if(statEl) statEl.textContent = liveCount;
}

document.addEventListener("DOMContentLoaded", renderTools);
