import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  ArrowDown,
} from 'lucide-react';
import './styles.css';

const images = {
  hero: 'https://framerusercontent.com/images/TU7BpZTzNA2q3ayegKLZ1F985g4.png?width=1800',
  halo: 'https://framerusercontent.com/images/vqDUiti0AUogX1iFZPQaVeuiks.png?width=1000',
  ember: 'https://framerusercontent.com/images/aA1k6uTWzUAS7PdwhmauSyS2wk.png?width=1000',
  tide: 'https://framerusercontent.com/images/SW1wU0ewx6JC9s22PitT0EQzb18.png?width=1000',
  iris: 'https://framerusercontent.com/images/ruDokhljnPDImAAxKqKBfl4bZI.png?width=1000',
  flower: 'https://framerusercontent.com/images/BTZBQca24mCCPCCLKtpjsy9gM.png?width=1000',
  material: 'https://framerusercontent.com/images/2bPxLwXX1pc7q4VPYs8CIC0cYE.png?width=1000',
  woman: 'https://framerusercontent.com/images/kM33NON21DUDnJfRtOykw68ljc.png?width=1000',
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
    >
      {children}
    </motion.div>
  );
}

function InstagramIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  const [selected, setSelected] = useState('Iris');

  const notes = {
    Iris: {
      latin: 'Iris pallida',
      desc: 'Powdery, earthen, quietly regal. Harvested after years of root maturation, with a soft violet depth.',
      position: 'Heart',
      origin: 'Tuscan hills, Italy',
      method: 'Orris butter extraction',
    },
    'Atlas Cedar': {
      latin: 'Cedrus atlantica',
      desc: 'Dry, clean wood with a calm, quietly grounding warmth.',
      position: 'Base',
      origin: 'Atlas Mountains',
      method: 'Steam distillation',
    },
    'Cloud Water': {
      latin: 'Aqua accord',
      desc: 'An airy, mineral freshness that feels like the world after rain.',
      position: 'Top',
      origin: 'Lumen atelier',
      method: 'Modern accord',
    },
    'White Tea': {
      latin: 'Camellia sinensis',
      desc: 'Soft, transparent and gently green, with a clean delicate finish.',
      position: 'Heart',
      origin: 'East Asia',
      method: 'Tea absolute',
    },
    Bergamot: {
      latin: 'Citrus bergamia',
      desc: 'Bright citrus peel with a subtle floral bitterness.',
      position: 'Top',
      origin: 'Calabria, Italy',
      method: 'Cold pressing',
    },
    Saffron: {
      latin: 'Crocus sativus',
      desc: 'A warm, golden spice with an elegant leathery edge.',
      position: 'Heart',
      origin: 'Mediterranean',
      method: 'Careful hand harvesting',
    },
  };

  const products = [
    ['Halo', 'A weightless drift of iris, cloud-water, and white cedar.', 'halo', 'Iris · Cedar'],
    ['Ember', 'Soft amber, smoked vanilla, and a thread of saffron.', 'ember', 'Amber · Saffron'],
    ['Tide', 'Sea-salt mist, blue cypress and bergamot.', 'tide', 'Citrus · Marine'],
  ];

  const faqs = [
    ['What arrives each month?', 'A carefully selected 8ml refillable fragrance, a note from the perfumer, and a little context about its ingredients.'],
    ['Can I skip or cancel a month?', 'Of course. Your fragrance wardrobe should move at your pace. Manage or pause your membership whenever you need.'],
    ['What if a fragrance is not for me?', 'Share your feedback and we will use it to refine your scent profile for future rotations.'],
  ];

  const noteNames = Object.keys(notes);

  const noteImage = {
    Iris: images.iris,
    Saffron: images.material,
    Bergamot: images.flower,
    'Atlas Cedar': images.tide,
    'Cloud Water': images.halo,
    'White Tea': images.flower,
  };

  return (
    <>
      <div className="announcement">
        A new fragrance, every month <span>✳</span> Thoughtfully chosen, never rushed
      </div>

      <header className="nav">
        <a className="wordmark" href="#top">
          recueil<span>®</span>
        </a>

        <nav className={menu ? 'navlinks open' : 'navlinks'}>
          <a href="#library" onClick={() => setMenu(false)}>The library</a>
          <a href="#approach" onClick={() => setMenu(false)}>Our approach</a>
          <a href="#stories" onClick={() => setMenu(false)}>Stories</a>
          <a href="#how" onClick={() => setMenu(false)}>How it works</a>
        </nav>

        <a className="navcta" href="#join">
          Find your scent <ArrowUpRight size={15} />
        </a>

        <button
          className="menubtn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> THE LUMEN ATELIER PRESENTS</p>
            <h1>Find your<br /><em>scent.</em></h1>
            <p className="hero-sub">One bottle at a time.</p>
            <p className="bodycopy">
              A monthly fragrance club from the Lumen atelier. A hand-picked 8ml bottle,
              drawn from a library of rare parfums, chosen for the season — and for you.
            </p>

            <div className="hero-actions">
              <a className="pill dark" href="#join">
                Start your subscription <ArrowUpRight size={16} />
              </a>
              <a className="textlink" href="#how">
                How it works <ArrowDown size={14} />
              </a>
            </div>

            <div className="hero-foot">
              <span>01 / A SLOWER KIND OF LUXURY</span>
              <span>SCROLL TO DISCOVER ↓</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={images.hero} alt="Iridescent perfume bottle surrounded by fragrance-inspired florals" />
              <div className="image-label">EAU DE PARFUM <span>·</span> 08 ML</div>
            </div>
            <div className="round-stamp">SCENT<br />AS A<br /><i>ritual</i> <span>✳</span></div>
            <div className="side-caption">A STUDY IN<br />SENSORY MEMORY</div>
          </div>
        </section>

        <section className="metrics">
          <div className="metric-intro">A small library,<br /><i>rotated by hand.</i></div>
          {[['60+', 'Parfums in our library'], ['4 hrs', 'Spent on each batch'], ['100%', 'Considered ingredients'], ['12', 'Partner growers']].map(([n, l]) => (
            <div className="metric" key={n}>
              <strong>{n}</strong><span>{l}</span>
            </div>
          ))}
        </section>

        <section className="library section-pad" id="library">
          <Reveal className="section-head">
            <p className="eyebrow">01 — THE ROTATION</p>
            <div className="split-title">
              <h2>From this month’s<br /><em>library.</em></h2>
              <p>A 60-bottle library, refreshed each season. Meet three fragrances currently in rotation — each with its own point of view.</p>
            </div>
          </Reveal>

          <div className="product-grid">
            {products.map(([name, desc, key, tags], i) => (
              <Reveal className="product" key={name}>
                <div className="product-image">
                  <img src={images[key]} alt={`${name} fragrance bottle`} loading="lazy" />
                  <span className="product-index">0{i + 1} / 03</span>
                  <button
                    className="circle-arrow"
                    aria-label={`Explore ${name}`}
                    onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ArrowUpRight />
                  </button>
                </div>
                <div className="product-meta">
                  <div><h3>{name}</h3><p>{desc}</p></div>
                  <span>{tags}</span>
                </div>
                <div className="rotation">IN ROTATION · MAY <span>✳</span></div>
              </Reveal>
            ))}
          </div>

          <div className="center-link">
            <a className="textlink" href="#join">Explore the full library <ArrowRight size={15} /></a>
          </div>
        </section>

        <section className="manifesto" id="approach">
          <div className="manifesto-image">
            <img src={images.woman} alt="Portrait in a soft, atmospheric fragrance campaign" loading="lazy" />
            <span className="vertical-note">THE ART OF NOTICING · EST. 2024</span>
          </div>

          <div className="manifesto-copy">
            <p className="eyebrow">02 — SMALL DETAILS, CONSIDERED</p>
            <h2>A perfumer’s shortlist,<br /><em>not an algorithm.</em></h2>
            <p className="bodycopy">
              Three perfumers curate every rotation. We pay attention to the materials,
              the makers and the moments a scent brings back. The result is personal by design —
              never another bottle chosen by a trend.
            </p>

            {[
              ['01', 'Hand-picked', 'Every monthly edit comes with a reason, a story and a point of view.'],
              ['02', 'A living library', 'Over 60 parfums in seasonal rotation, with new discoveries each year.'],
              ['03', 'Identity over intensity', 'Thoughtful compositions made to sit close, not fill a room.'],
            ].map(([number, title, description]) => (
              <div className="principle" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <Plus size={17} />
              </div>
            ))}

            <a className="pill outline" href="#how">Our approach <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="palette section-pad">
          <Reveal className="palette-head">
            <p className="eyebrow">03 — THE PALETTE</p>
            <h2>Built from a library<br />of <em>rare materials.</em></h2>
            <p>Six notes. A thousand ways to remember. Explore the raw materials that shape our fragrances.</p>
          </Reveal>

          <div className="palette-layout">
            <div className="note-list">
              {noteNames.map((name, i) => (
                <button
                  className={selected === name ? 'note active' : 'note'}
                  key={name}
                  onClick={() => setSelected(name)}
                >
                  <span>0{i + 1}</span>{name}<ArrowUpRight size={15} />
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="note-detail"
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.28 }}
              >
                <div className="note-image">
                  <img src={noteImage[selected]} alt={`${selected} ingredient mood`} loading="lazy" />
                </div>
                <div className="note-description">
                  <p className="eyebrow">THE INGREDIENT · 0{noteNames.indexOf(selected) + 1}</p>
                  <h3>{selected}</h3>
                  <i>{notes[selected].latin}</i>
                  <p>{notes[selected].desc}</p>
                  <dl>
                    <div><dt>Position</dt><dd>{notes[selected].position}</dd></div>
                    <div><dt>Origin</dt><dd>{notes[selected].origin}</dd></div>
                    <div><dt>Method</dt><dd>{notes[selected].method}</dd></div>
                  </dl>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="quote-section" id="stories">
          <div className="quote-mark">“</div>
          <p className="eyebrow">04 — NOTES FROM THOSE SUBSCRIBED</p>
          <blockquote>“By the fourth bottle, I’d stopped looking for a signature scent. <em>I’d found one.</em>”</blockquote>
          <div className="quote-person">
            <img src={images.woman} alt="Member portrait" loading="lazy" />
            <div><strong>Naoko M.</strong><span>MEMBER SINCE 2024 · STOCKHOLM</span></div>
          </div>
          <div className="quote-stats">
            {[['3–5', 'Months to find your scent'], ['8ml', 'Small by intention'], ['60+', 'Fragrances to discover']].map(([number, label]) => (
              <div key={number}><strong>{number}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className="how section-pad" id="how">
          <Reveal className="section-head">
            <p className="eyebrow">05 — HOW IT WORKS</p>
            <div className="split-title">
              <h2>Three steps.<br /><em>One bottle, every month.</em></h2>
              <p>Build a fragrance wardrobe slowly and deliberately. No shelf full of regret — just one carefully chosen scent at a time.</p>
            </div>
          </Reveal>

          <div className="steps">
            {[
              ['I', 'Take the scent profile', 'A short questionnaire about the moods, materials and memories you respond to.'],
              ['II', 'Receive your monthly bottle', 'An 8ml refillable bottle, selected from our library with a note from the perfumer.'],
              ['III', 'Keep, swap, or upgrade', 'Love it? Make it your own. Want something different? We refine your profile for next month.'],
            ].map(([number, title, description]) => (
              <Reveal className="step" key={number}>
                <span className="step-num">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight size={19} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="faq section-pad">
          <div><p className="eyebrow">A FEW GOOD QUESTIONS</p><h2>Good to <em>know.</em></h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => (
              <div className="faq-item" key={question}>
                <button
                  aria-expanded={faq === i}
                  onClick={() => setFaq(faq === i ? -1 : i)}
                >
                  <span>{question}</span>{faq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <AnimatePresence initial={false}>
                  {faq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="join" id="join">
          <div className="join-image">
            <img src={images.halo} alt="A luminous glass perfume bottle" loading="lazy" />
          </div>
          <div className="join-copy">
            <p className="eyebrow">YOUR NEXT CHAPTER, IN SCENT</p>
            <h2>A little more<br /><em>you, every month.</em></h2>
            <p>Begin with a scent profile. We’ll take it from there — one thoughtful bottle at a time.</p>
            <a
              href="mailto:hello@lumenatelier.example?subject=Start%20my%20fragrance%20subscription"
              className="pill light"
            >
              Start your subscription <ArrowUpRight size={16} />
            </a>
            <span className="join-note">NO PRESSURE. JUST GOOD PERFUME.</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a className="wordmark" href="#top">recueil<span>®</span></a>
          <p>Make room for<br /><em>what moves you.</em></p>
          <a className="circle-arrow" href="#top" aria-label="Back to top"><ArrowUpRight /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 RECUEIL / LUMEN ATELIER</span>
          <span>MADE SLOWLY, WITH INTENTION</span>
          <a href="#top"><InstagramIcon size={15} /> INSTAGRAM</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);