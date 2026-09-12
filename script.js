// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- hero terminal typing sequence ----
const body = document.getElementById('terminalBody');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const script = [
  { type: 'prompt', text: 'whoami' },
  { type: 'out',    text: 'Raghav Kushwaha' },
  { type: 'prompt', text: 'cat role.txt' },
  { type: 'out',    text: 'Cybersecurity enthusiast · BCA student · aspiring security Incident Response' }
];

function renderStatic() {
  body.innerHTML = script.map(line => {
    if (line.type === 'prompt') {
      return `<p class="term-line"><span class="term-prompt">guest@portfolio:~$</span> ${line.text}</p>`;
    }
    return `<p class="term-line term-out">${line.text}</p>`;
  }).join('') + `<p class="term-line"><span class="term-prompt">guest@portfolio:~$</span> <span class="cursor"></span></p>`;
}

if (reduceMotion) {
  renderStatic();
} else {
  let li = 0, ci = 0;
  const typeSpeed = 22;
  const linePause = 260;

  function typeNext() {
    if (li >= script.length) {
      body.insertAdjacentHTML('beforeend',
        `<p class="term-line"><span class="term-prompt">guest@portfolio:~$</span> <span class="cursor"></span></p>`);
      return;
    }
    const line = script[li];

    if (ci === 0) {
      const prefix = line.type === 'prompt' ? `<span class="term-prompt">guest@portfolio:~$</span> ` : '';
      const cls = line.type === 'out' ? 'term-line term-out' : 'term-line';
      body.insertAdjacentHTML('beforeend', `<p class="${cls}" data-live="1">${prefix}</p>`);
    }

    const current = body.querySelector('[data-live="1"]');
    if (ci < line.text.length) {
      current.append(line.text[ci]);
      ci++;
      setTimeout(typeNext, typeSpeed);
    } else {
      current.removeAttribute('data-live');
      li++; ci = 0;
      setTimeout(typeNext, linePause);
    }
  }
  typeNext();
}
