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
  grid.innerHTML = TOOLS.map((t, i) => {
    const cls = t.active ? "tool-card active reveal" : "tool-card locked reveal";
    const tag = t.active ? '<span class="tag">Live</span>' : '<span class="tag soon">Coming Soon</span>';
    const cta = t.active
      ? `<span class="tc-cta">Open tool
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
         </span>`
      : `<span class="tc-cta" style="color:var(--ink-3)">Not available yet</span>`;
    const inner = `<div class="tc-top"><div class="tc-icon">${t.icon}</div>${tag}</div>
                    <div class="tc-name">${t.name}</div>
                    <div class="tc-desc">${t.desc}</div>${cta}`;
    const delay = `style="animation-delay:${.12 + i * .08}s"`;
    return t.active
      ? `<a class="${cls}" ${delay} href="${t.href}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="${cls}" ${delay}>${inner}</div>`;
  }).join("");

  // cursor-follow spotlight glow on active cards
  grid.querySelectorAll(".tool-card.active").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", (e.clientX - r.left) + "px");
      card.style.setProperty("--y", (e.clientY - r.top) + "px");
    });
  });

  countUp(TOOLS.filter(t => t.active).length);
}

function countUp(target){
  const el = document.getElementById("toolCount");
  if(!el) return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    el.textContent = target; return;
  }
  let cur = 0;
  const step = () => {
    cur += 1;
    el.textContent = cur;
    if(cur < target) requestAnimationFrame(() => setTimeout(step, 140));
  };
  setTimeout(step, 500);
}

document.addEventListener("DOMContentLoaded", renderTools);
