const slides = [
  {
    label: "Announcements",
    title: "Broadcast weekly updates with confidence and clarity.",
    text: "Highlight major programs, service time changes, and ministry reminders in a space that feels polished and current.",
    metric: "24 notices this month",
    tone: "gradient-sunrise",
  },
  {
    label: "Prayer Requests",
    title: "Receive prayer needs in a calm, private, caring flow.",
    text: "Give members a trusted place to share requests while leaders keep track of what needs follow-up.",
    metric: "8 pending reviews",
    tone: "gradient-bloom",
  },
  {
    label: "Attendance",
    title: "Track service turnout in seconds, not in paperwork.",
    text: "Keep attendance simple for now, then expand later into richer reports and barcode check-in when you are ready.",
    metric: "265 at last service",
    tone: "gradient-aqua",
  },
];

const services = [
  {
    id: "announcements",
    name: "Announcements Board",
    intro: "Fast church-wide communication",
    description:
      "A clean publishing area for weekly notices, special service banners, worker updates, and event reminders.",
    points: ["Weekly notices", "Special programs", "Worker updates"],
  },
  {
    id: "prayer-requests",
    name: "Prayer Request App",
    intro: "Private, respectful intake",
    description:
      "A more thoughtful way to receive requests, review them privately, and help leaders respond with care.",
    points: ["Secure submissions", "Review queue", "Follow-up friendly"],
  },
  {
    id: "attendance",
    name: "Attendance Tracker",
    intro: "Simple counts, clear records",
    description:
      "Record turnout by date and meeting type with a lightweight flow that is easy for workers to keep using.",
    points: ["Service counts", "Meeting history", "Ready for growth"],
  },
];

const stats = [
  { value: "3", label: "Core services" },
  { value: "1", label: "Unified dashboard" },
  { value: "100%", label: "Built to grow gradually" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="top-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          <div>
            <strong>Macedonia Pavilion Parish</strong>
            <p>The place of the eagles</p>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#announcements">Announcements</a>
          <a href="#prayer-requests">Prayer Requests</a>
          <a href="#attendance">Attendance</a>
          <a href="#showcase">Showcase</a>
        </nav>
      </header>

      <section className="hero-shell">
        <div id="top" className="hero-copy-panel">
          <div className="hero-badge-row">
            <p className="eyebrow">Macedonia Pavilion Parish</p>
            <span className="hero-badge">Digital Church Hub</span>
          </div>

          <h1>Where your church updates feel clear, current, and alive.</h1>
          <p className="hero-copy">
            A sleek space for announcements, prayer requests, and attendance
            built around your weekly ministry flow.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-link">
              Explore the services
            </a>
            <a href="#showcase" className="ghost-link">
              Watch the showcase
            </a>
          </div>

          <div className="hero-note">
            One app. One church workflow. One easy place to stay informed.
          </div>

          <div className="stat-grid" aria-label="Platform highlights">
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div
          id="showcase"
          className="showcase-panel"
          aria-label="Sliding feature showcase"
        >
          <div className="showcase-orb orb-one" />
          <div className="showcase-orb orb-two" />
          <div className="showcase-orb orb-three" />

          <div className="showcase-heading">
            <p>Live module preview</p>
            <span>Auto-rotating showcase</span>
          </div>

          <div className="slide-stage">
            {slides.map((slide, index) => (
              <article
                key={slide.label}
                className={`showcase-slide ${slide.tone}`}
                style={{ animationDelay: `${index * 6}s` }}
              >
                <div className="slide-topline">
                  <p>{slide.label}</p>
                  <span>{slide.metric}</span>
                </div>
                <h2>{slide.title}</h2>
                <p className="slide-text">{slide.text}</p>
                <div className="slide-footer">
                  <span className="slide-pill">Modern church workflow</span>
                  <span className="slide-dot" />
                </div>
              </article>
            ))}
          </div>

          <div className="ticker-bar">
            <span>Announcements</span>
            <span>Prayer Requests</span>
            <span>Attendance</span>
            <span>Admin Dashboard</span>
            <span>Easy Growth Path</span>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Three elegant tools arranged inside one vibrant experience.</h2>
          </div>
          <p className="section-copy">
            Each service is easy to locate, easy to expand, and designed to fit
            real church administration.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article
              key={service.name}
              id={service.id}
              className={`service-card service-card-${index + 1}`}
            >
              <p className="service-intro">{service.intro}</p>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <article className="editorial-card">
          <p className="eyebrow">Design Direction</p>
          <h2>More polished on the surface, still practical underneath.</h2>
          <p>
            This refresh keeps the homepage modern and visible while preserving
            a structure that is easy to maintain as you keep building features.
          </p>
        </article>

        <article className="roadmap-card">
          <p className="eyebrow">Next Build Steps</p>
          <h2>What comes after this refresh</h2>
          <ol>
            <li>Build the announcements interface first.</li>
            <li>Add prayer request submission and review.</li>
            <li>Create the simple attendance entry flow.</li>
            <li>Refine with images, icons, and live data next.</li>
          </ol>
        </article>
      </section>
    </main>
  );
}
