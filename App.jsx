const { useState } = React;

// ============ Header ============
function Header({ page, setPage }) {
  const items = ['Home', 'Events', 'Candidates', 'Get involved', 'About'];
  return (
    <header style={{
      background: 'var(--pc-bg)',
      borderBottom: '1px solid var(--pc-border)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 28px',
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); setPage('Home');}} style={{
          display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
        }}>
          <img src="/pontotoc-county-democrats/logo-mark.svg" width="44" height="44" alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: 4 }}>
            <span style={{ fontFamily: 'var(--pc-font-display)', fontSize: 20, fontWeight: 700, color: 'var(--pc-blue-700)', letterSpacing: '-0.01em' }}>Pontotoc County</span>
            <span style={{ fontFamily: 'var(--pc-font-display)', fontSize: 20, fontWeight: 600, fontStyle: 'italic', color: 'var(--pc-blue-700)' }}>Democrats</span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {items.map(item => (
            <a key={item} href="#" onClick={(e)=>{e.preventDefault(); setPage(item);}}
               style={{
                 fontSize: 14, fontWeight: 600,
                 padding: '8px 12px', borderRadius: 4,
                 color: page === item ? 'var(--pc-blue-700)' : 'var(--pc-ink-800)',
                 background: page === item ? 'var(--pc-bone-100)' : 'transparent',
                 textDecoration: 'none',
               }}>
              {item}
            </a>
          ))}
          <button className="pc-btn pc-btn-accent" style={{ marginLeft: 8, fontSize: 14, padding: '8px 14px' }}>Donate</button>
        </nav>
      </div>
    </header>
  );
}

// ============ Hero ============
function Hero() {
  return (
    <section style={{
      background: 'var(--pc-blue-700)',
      color: '#f4ecdc',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '88px 28px 100px',
        display: 'grid', gridTemplateColumns: '1.2fr .9fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <div style={{ color: 'var(--pc-wheat-500)', fontWeight: 700, letterSpacing: 6, fontSize: 14, marginBottom: 18 }}>★ ★ ★ ★ ★</div>
          <h1 style={{
            fontFamily: 'var(--pc-font-display)', fontSize: 68, lineHeight: 1.02,
            fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 38px', color: '#fff',
          }}>
            We build Pontotoc County <em style={{ color: 'var(--pc-wheat-500)', fontStyle: 'italic' }}>one neighbor at a time.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: '#e6dcc6', maxWidth: 540, margin: '0 0 28px' }}>
            Local Democrats organizing for fair schools, working wages, healthcare, and honest government — from Ada to Roff to Stonewall.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="pc-btn pc-btn-accent" style={{ fontSize: 16, padding: '14px 22px' }}>Join the party</button>
            <button className="pc-btn pc-btn-ghost" style={{ color: '#f4ecdc', border: '1px solid rgba(244,236,220,.3)', fontSize: 16, padding: '14px 22px' }}>Find your precinct</button>
          </div>
        </div>
        <div style={{
          aspectRatio: '4/5',
          borderRadius: 12,
          background: 'url(/pontotoc-county-democrats/photo-placeholder.svg) center/cover',
          border: '6px solid var(--pc-wheat-500)',
          transform: 'rotate(1.5deg)',
          boxShadow: '0 24px 60px rgba(0,0,0,.35)',
        }}/>
      </div>
      {/* horizon stripe at bottom */}
      <div style={{ height: 6, background: 'var(--pc-wheat-500)' }}/>
    </section>
  );
}

// ============ Stat row ============
function StatRow() {
  const stats = [
    ['12', 'Precincts'],
    ['38,284', 'Registered voters'],
    ['2nd Thu', 'Monthly meeting'],
    ['1916', 'Party in Ada since'],
  ];
  return (
    <section style={{ background: 'var(--pc-bone-100)', borderBottom: '1px solid var(--pc-border)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto', padding: '32px 28px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28,
      }}>
        {stats.map(([n, l]) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: 'var(--pc-font-display)', fontSize: 38, fontWeight: 700, color: 'var(--pc-blue-700)', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 13, color: 'var(--pc-ink-400)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ Events ============
function EventCard({ event, rsvpd, onRsvp }) {
  return (
    <article style={{
      background: 'var(--pc-bg-elevated)',
      border: '1px solid var(--pc-border)',
      borderRadius: 8,
      padding: 24,
      display: 'flex', flexDirection: 'column', gap: 10,
      boxShadow: 'var(--pc-shadow-1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 8,
          background: 'var(--pc-blue-700)', color: 'var(--pc-wheat-500)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--pc-font-display)',
        }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>{event.mon}</div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1, color: '#fff' }}>{event.day}</div>
        </div>
        <div>
          <div className="pc-eyebrow">{event.tag}</div>
          <h3 style={{ fontFamily: 'var(--pc-font-display)', fontSize: 22, margin: '4px 0 0', color: 'var(--pc-ink-900)', fontWeight: 600 }}>{event.title}</h3>
        </div>
      </div>
      <div style={{ fontSize: 14, color: 'var(--pc-ink-400)' }}>{event.when} · {event.where}</div>
      <p style={{ margin: '4px 0 12px', fontSize: 14, color: 'var(--pc-ink-800)' }}>{event.desc}</p>
      <button
        className={rsvpd ? 'pc-btn pc-btn-secondary' : 'pc-btn pc-btn-primary'}
        onClick={onRsvp}
        style={{ fontSize: 14, padding: '8px 14px', alignSelf: 'flex-start' }}>
        {rsvpd ? '✓ You\'re RSVP\'d' : 'RSVP'}
      </button>
    </article>
  );
}

function EventsSection() {
  const [rsvps, setRsvps] = useState({});
  const events = [
    { id: 'oct', mon: 'OCT', day: '08', tag: '★ Monthly meeting', title: 'October Monthly Meeting', when: 'Thu Oct 8, 7:00pm', where: 'Agri-Plex Hall B', desc: 'State Rep. Cyndi Munson joins us. Coffee at 6:30, business at 7.' },
    { id: 'oct18', mon: 'OCT', day: '18', tag: 'Voter registration', title: 'Voter registration at ECU', when: 'Sat Oct 18, 10am–2pm', where: 'East Central University quad', desc: 'Helping students register and update addresses. Volunteers wanted.' },
    { id: 'nov', mon: 'NOV', day: '01', tag: 'Get-out-the-vote', title: 'Saturday canvass — Ada North', when: 'Sat Nov 1, 9am', where: 'Pontotoc HQ, 401 E Main', desc: 'Doors, lit, and lemonade. We walk in pairs, finish by 12.' },
  ];
  return (
    <section style={{ padding: '88px 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <div className="pc-eyebrow">Upcoming</div>
            <h2 style={{ fontFamily: 'var(--pc-font-display)', fontSize: 46, lineHeight: 1.05, fontWeight: 700, margin: '6px 0 0', color: 'var(--pc-ink-900)', letterSpacing: '-0.01em' }}>Come find us this month.</h2>
          </div>
          <a href="#" style={{ fontWeight: 600 }}>See full calendar →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {events.map(ev => (
            <EventCard
              key={ev.id}
              event={ev}
              rsvpd={!!rsvps[ev.id]}
              onRsvp={() => setRsvps(r => ({ ...r, [ev.id]: !r[ev.id] }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Candidate spotlight ============
function CandidateSpotlight() {
  return (
    <section style={{ background: 'var(--pc-bone-100)', borderTop: '1px solid var(--pc-border)', borderBottom: '1px solid var(--pc-border)', padding: '88px 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 64, alignItems: 'center' }}>
        <div style={{
          aspectRatio: '4/5',
          borderRadius: 8,
          background: 'url(/photo-placeholder.svg) center/cover',
          border: '1px solid var(--pc-border)',
          boxShadow: 'var(--pc-shadow-3)',
        }}/>
        <div>
          <div className="pc-eyebrow">★ Candidate spotlight</div>
          <h2 style={{ fontFamily: 'var(--pc-font-display)', fontSize: 52, lineHeight: 1.05, fontWeight: 700, margin: '10px 0 14px', color: 'var(--pc-ink-900)', letterSpacing: '-0.015em' }}>
            Margaret Holloway for County Commissioner, District 2
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--pc-ink-800)', margin: '0 0 22px', maxWidth: 560 }}>
            A retired ECU professor and lifelong Pontotoc resident, Margaret is running on roads, water, and rural healthcare. She's knocked on 4,200 doors so far.
          </p>
          <blockquote style={{
            margin: '0 0 24px', padding: '14px 20px',
            borderLeft: '3px solid var(--pc-clay-500)',
            fontFamily: 'var(--pc-font-display)', fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.3, color: 'var(--pc-blue-700)',
          }}>
            "If I'm asking for your vote, I'm asking for it on your front porch."
          </blockquote>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="pc-btn pc-btn-primary">Read her platform</button>
            <button className="pc-btn pc-btn-secondary">Donate to Margaret</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ Get involved (form) ============
function GetInvolved() {
  const [form, setForm] = useState({ name: '', email: '', precinct: 'Precinct 1 — Ada North', ways: { volunteer: true, donate: false, register: false, host: false } });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = (k) => setForm(f => ({ ...f, ways: { ...f.ways, [k]: !f.ways[k] } }));

  return (
    <section style={{ padding: '96px 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
        <div>
          <div className="pc-eyebrow">Get involved</div>
          <h2 style={{ fontFamily: 'var(--pc-font-display)', fontSize: 46, lineHeight: 1.05, fontWeight: 700, margin: '8px 0 16px', color: 'var(--pc-ink-900)', letterSpacing: '-0.01em' }}>
            We need ten neighbors. Are you one of them?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--pc-ink-800)', maxWidth: 480 }}>
            Tell us how you'd like to pitch in. We'll follow up by Thursday — no robocalls, no spam, just a real person from the county committee.
          </p>
          <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--pc-border)', fontSize: 14, color: 'var(--pc-ink-400)' }}>
            <strong style={{ color: 'var(--pc-ink-900)', fontWeight: 600 }}>Or stop by HQ:</strong><br/>
            401 E Main Street, Ada OK 74820<br/>
            Open Tue–Fri, 10–4 · (580) 555‑0140
          </div>
        </div>

        {submitted ? (
          <div className="pc-card" style={{ padding: 32, background: 'var(--pc-sage-100)', border: '1px solid var(--pc-sage-300)' }}>
            <div style={{ color: 'var(--pc-success)', fontSize: 28 }}>✓</div>
            <h3 style={{ fontFamily: 'var(--pc-font-display)', fontSize: 28, margin: '8px 0 8px', color: 'var(--pc-ink-900)' }}>Thank you, {form.name || 'neighbor'}.</h3>
            <p style={{ margin: 0, color: 'var(--pc-ink-800)' }}>We'll be in touch this week. Welcome to the county committee.</p>
            <button className="pc-btn pc-btn-secondary" style={{ marginTop: 18 }} onClick={() => setSubmitted(false)}>Send another</button>
          </div>
        ) : (
          <form className="pc-card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Full name</span>
              <input className="pc-input" value={form.name} onChange={e => update('name', e.target.value)} required />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Email</span>
              <input type="email" className="pc-input" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" required />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Precinct</span>
              <select className="pc-input" value={form.precinct} onChange={e => update('precinct', e.target.value)}>
                <option>Precinct 1 — Ada North</option>
                <option>Precinct 2 — Ada South</option>
                <option>Precinct 3 — Stonewall</option>
                <option>Precinct 4 — Roff</option>
                <option>Not sure — help me find it</option>
              </select>
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>I'd like to help by…</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  ['volunteer', 'Volunteering for events'],
                  ['donate', 'Donating monthly'],
                  ['register', 'Registering voters'],
                  ['host', 'Hosting a porch meet-up'],
                ].map(([k, label]) => (
                  <label key={k} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 12px',
                    border: '1px solid ' + (form.ways[k] ? 'var(--pc-blue-500)' : 'var(--pc-border-strong)'),
                    background: form.ways[k] ? 'var(--pc-blue-50)' : 'var(--pc-bg-elevated)',
                    borderRadius: 4, cursor: 'pointer',
                    fontSize: 14, color: 'var(--pc-ink-900)',
                  }}>
                    <input type="checkbox" checked={form.ways[k]} onChange={() => toggle(k)} style={{ accentColor: 'var(--pc-blue-500)' }}/>
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="pc-btn pc-btn-primary" style={{ marginTop: 6, padding: '12px 18px' }}>Send to the committee</button>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--pc-fg-muted)' }}>By submitting, you agree to be contacted by the Pontotoc County Democratic Committee.</p>
          </form>
        )}
      </div>
    </section>
  );
}

// ============ Footer ============
function Footer() {
  return (
    <footer style={{ background: 'var(--pc-blue-700)', color: '#e6dcc6' }}>
      <div style={{ height: 6, background: 'var(--pc-wheat-500)' }}/>
      <div style={{
        maxWidth: 1180, margin: '0 auto', padding: '56px 28px 36px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <img src="/pontotoc-county-democrats/logo-mark.svg" width="44" height="44" alt="" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: 4 }}>
              <span style={{ fontFamily: 'var(--pc-font-display)', fontSize: 18, fontWeight: 700, color: '#fff' }}>Pontotoc County</span>
              <span style={{ fontFamily: 'var(--pc-font-display)', fontSize: 18, fontWeight: 600, fontStyle: 'italic', color: '#fff' }}>Democrats</span>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, maxWidth: 320 }}>
            The county committee of the Oklahoma Democratic Party. Volunteer‑run since 1916.
          </p>
        </div>
        <FooterCol title="Visit" items={['401 E Main Street', 'Ada, Oklahoma 74820', 'Tue–Fri 10–4']} />
        <FooterCol title="Call & write" items={['(580) 555‑0140', 'hello@pontotocdems.org']} />
        <FooterCol title="Meet" items={['2nd Thursday, 7pm', 'Agri-Plex Hall B', 'Coffee at 6:30']} />
      </div>
      <div style={{ borderTop: '1px solid rgba(244,236,220,.15)', padding: '18px 28px', textAlign: 'center', fontSize: 12, color: 'rgba(230,220,198,.7)' }}>
        Paid for by the Pontotoc County Democratic Committee. Not authorized by any candidate or candidate's committee.
      </div>
    </footer>
  );
}
function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, color: 'var(--pc-wheat-500)', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#e6dcc6' }}>
        {items.map(i => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

// ============ App ============
function App() {
  const [page, setPage] = useState('Home');
  return (
    <div className="pc" style={{ minHeight: '100vh' }}>
      <Header page={page} setPage={setPage} />
      <main>
        <Hero />
        <StatRow />
        <EventsSection />
        <CandidateSpotlight />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { App });
