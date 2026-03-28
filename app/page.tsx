const modules = [
  {
    name: "Announcements Board",
    description:
      "Share service updates, weekly notices, upcoming events, and special programs in one place.",
    nextStep: "Build create, edit, publish, and archive flows.",
  },
  {
    name: "Prayer Request App",
    description:
      "Collect prayer requests from members and track their review status inside the admin panel.",
    nextStep: "Add a public submission form and an admin review queue.",
  },
  {
    name: "Attendance Tracker",
    description:
      "Record service attendance by date and meeting type, then review trends over time.",
    nextStep: "Set up service types, entry forms, and summary reports.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Church Admin Starter</p>
        <h1>One simple platform for the three tools you chose.</h1>
        <p className="hero-copy">
          This starter is designed to stay maintainable: one app, one database,
          and clear modules for announcements, prayer requests, and attendance.
        </p>
      </section>

      <section className="module-grid" aria-label="Core modules">
        {modules.map((module) => (
          <article key={module.name} className="module-card">
            <h2>{module.name}</h2>
            <p>{module.description}</p>
            <span>{module.nextStep}</span>
          </article>
        ))}
      </section>

      <section className="roadmap-card">
        <h2>Suggested build order</h2>
        <ol>
          <li>Connect Prisma to SQL Server and create the first migration.</li>
          <li>Build the announcements admin screens first.</li>
          <li>Add prayer request submission and review flow next.</li>
          <li>Finish with attendance forms and summary views.</li>
        </ol>
      </section>
    </main>
  );
}
