export default function StatsBar({ certificates, skillCount }) {  

  const latest = certificates.reduce((latestValue, current) => {
    if (!latestValue) {
      return current;
    }
    return new Date(current.issueDate) > new Date(latestValue.issueDate)
      ? current
      : latestValue;
  }, null);

  return (
    <section className="stats-bar" aria-label="Certificate statistics">
      <div>
        <p className="stat-label">Certificates</p>
        <p className="stat-value">{certificates.length}</p>
      </div>
      <div>
        <p className="stat-label">CORE SKILLS</p>
        <p className="stat-value">{skillCount}</p>
      </div>
      <div>
        <p className="stat-label">Latest</p>
        <p className="stat-value">{latest?.title ?? "N/A"}</p>
      </div>
    </section>
  );
}
