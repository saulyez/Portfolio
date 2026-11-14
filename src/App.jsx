/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ENTRIES, TABS, TECH, KIND_COLOR, LINKS, SKILLS_A, SKILLS_B, AVATAR, AVATAR_PALETTE, tagStyle,
} from './data';
import './App.css';

function Avatar({ blink }) {
  const cells = useMemo(() => {
    const out = [];
    for (const row of AVATAR) {
      for (const ch of row.padEnd(16, '.').slice(0, 16)) {
        out.push(ch === 'E' && blink ? AVATAR_PALETTE.S : AVATAR_PALETTE[ch] ?? 'transparent');
      }
    }
    return out;
  }, [blink]);
  return (
    <div className="avatar" role="img" aria-label="Pixel avatar of Saul">
      {cells.map((c, i) => <span key={i} style={{ background: c }} />)}
    </div>
  );
}

function Marquee({ items, reverse, label }) {
  const doubled = [...items, ...items];
  return (
    <div className="mq" aria-label={label}>
      <div className={`mq-track${reverse ? ' rev' : ''}`}>
        {doubled.map(([name, kind], i) => (
          <span className="chip" key={i} aria-hidden={i >= items.length}>
            <span className="chip-dot" style={{ background: TECH[name] }} />
            {name}
            <span className="chip-kind">{kind}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const external = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});

export default function App() {
  const [tab, setTab] = useState(0);
  const [sel, setSel] = useState('001');
  const [frame, setFrame] = useState(1);
  const listRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 450);
    return () => clearInterval(id);
  }, []);

  const list = ENTRIES.filter((e) => !TABS[tab].cat || e.cat === TABS[tab].cat);
  const idx = Math.max(0, list.findIndex((e) => e.no === sel));
  const cur = list[idx];

  useEffect(() => {
    const ul = listRef.current;
    const row = ul?.querySelector('[aria-current="true"]')?.parentElement;
    if (!ul || !row) return;
    const top = row.offsetTop - ul.offsetTop;
    if (top < ul.scrollTop) ul.scrollTop = top;
    else if (top + row.offsetHeight > ul.scrollTop + ul.clientHeight) ul.scrollTop = top + row.offsetHeight - ul.clientHeight;
  }, [sel, tab]);

  const goTab = (n) => {
    const t = (n + TABS.length) % TABS.length;
    setTab(t);
    setSel(ENTRIES.find((e) => !TABS[t].cat || e.cat === TABS[t].cat).no);
  };
  const move = (d) => setSel(list[(idx + d + list.length) % list.length].no);

  return (
    <div className="page" id="top">
      <header className="intro">
        <div>
          <p className="eyebrow">SOFTWARE DEVELOPER · AI &amp; CS</p>
          <h1>SAUL YE ZHENG</h1>
        </div>
        <p className="lede">Every project, job and school, logged in one device. Use the buttons to browse.</p>
      </header>

      <main className="device">
        <div className="device-top">
          <div className="brand">
            <span className="led" aria-hidden="true" />
            <span className="brand-name">DEV·DEX</span>
            <span className="brand-model">MODEL SYZ-26</span>
          </div>
          <div className="grille" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => <span key={i} />)}
          </div>
        </div>

        <div className="device-body">
          <section className="detail" aria-label="Entry detail" aria-live="polite">
            <div className="detail-dots" aria-hidden="true"><span /><span /></div>
            <div className="screen">
              <div className="screen-head">
                <div className="sprite-box">
                  <Avatar blink={frame % 10 === 0} />
                  <span className="scan" aria-hidden="true" />
                </div>
                <div className="entry-head">
                  <span className="entry-no">No. {cur.no}</span>
                  <h2>{cur.name}</h2>
                  <span className="entry-kind">{cur.kind}</span>
                  <span className="tags">
                    {cur.tags.map((t) => <span className="tag" key={t} style={tagStyle(t)}>{t.toUpperCase()}</span>)}
                  </span>
                </div>
              </div>
              <dl className="meta">
                {cur.meta.map(([k, v]) => (
                  <div key={k} className="meta-row"><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <p className="entry-text">{cur.text}<span className="blink"> ▮</span></p>
            </div>
            <div className="detail-foot" aria-hidden="true">
              <span className="red-btn" />
              <span className="vent"><span /><span /><span /></span>
            </div>
          </section>

          <section className="side" aria-label="Entry list and controls">
            <div className="tabs" role="tablist">
              {TABS.map((t, i) => (
                <button key={t.label} type="button" role="tab" aria-selected={i === tab}
                  className={`key tab${i === tab ? ' active' : ''}`} onClick={() => goTab(i)}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="list-screen">
              <div className="list-head"><span>{TABS[tab].label}</span><span>{idx + 1} / {list.length}</span></div>
              <ul ref={listRef}>
                {list.map((e, i) => (
                  <li key={e.no}>
                    <button type="button" className={`row${i === idx ? ' on' : ''}`}
                      aria-current={i === idx} onClick={() => setSel(e.no)}>
                      <span className="cursor">{i === idx ? '▶' : ''}</span>
                      <span className="row-no">{e.no}</span>
                      <span className="row-name">{e.name}</span>
                      <span className="row-dot" style={{ background: KIND_COLOR[e.cat] }} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="controls">
              <div className="dpad">
                <span />
                <button type="button" className="key up" onClick={() => move(-1)} aria-label="Previous entry">▲</button>
                <span />
                <button type="button" className="key left" onClick={() => goTab(tab - 1)} aria-label="Previous category">◀</button>
                <span className="center" />
                <button type="button" className="key right" onClick={() => goTab(tab + 1)} aria-label="Next category">▶</button>
                <span />
                <button type="button" className="key down" onClick={() => move(1)} aria-label="Next entry">▼</button>
                <span />
              </div>
              <div className="ab">
                <div className="ab-col">
                  <button type="button" className="key round b" onClick={() => { setTab(0); setSel('001'); }}
                    aria-label="B: back to first entry">B</button>
                  <span>BACK</span>
                </div>
                <div className="ab-col raised">
                  <a className="key round a" href={cur.href} {...external(cur.href)} aria-label="A: open this entry">A</a>
                  <span>OPEN</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="scanner" aria-label="Skills">
          <div className="scanner-head">
            <span>SKILL SCANNER · {SKILLS_A.length + SKILLS_B.length} LOGGED</span>
            <span className="blink">● LIVE</span>
          </div>
          <Marquee items={SKILLS_A} label="Languages and frameworks" />
          <Marquee items={SKILLS_B} reverse label="Tools and platforms" />
        </section>

        <nav className="cable" aria-label="Contact">
          <span className="cable-label">LINK CABLE ▸</span>
          <a className="key pill" href={LINKS.email}>EMAIL</a>
          <a className="key pill" href={LINKS.github} target="_blank" rel="noreferrer">GITHUB</a>
          <a className="key pill" href={LINKS.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
        </nav>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} SAUL YE ZHENG</span>
        <span>SAN JOSÉ → BIRMINGHAM</span>
      </footer>
    </div>
  );
}
