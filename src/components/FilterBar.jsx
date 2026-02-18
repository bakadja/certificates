function normalizePlatformLabel(value) {
  if (value === "all") {
    return "All Platforms";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function FilterBar({
  query,
  platform,
  skills,
  selectedSkills,
  onQueryChange,
  onPlatformChange,
  onSkillToggle,
  onReset
}) {
  return (
    <section className="filter-bar" aria-label="Certificate filters">
      <div className="filter-row">
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="search"
          placeholder="Search by certificate title"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>

      <div className="filter-row">
        <label htmlFor="platform-select">Platform</label>
        <select
          id="platform-select"
          value={platform}
          onChange={(event) => onPlatformChange(event.target.value)}
        >
          <option value="all">All platforms</option>
          <option value="scrimba">Scrimba</option>
          <option value="coursera">Coursera</option>
        </select>
      </div>

      <div className="filter-row">
        <span className="filter-label">Skills</span>
        <div className="skills-wrap">
          {skills.map((skill) => {
            const active = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                className={`skill-chip ${active ? "active" : ""}`}
                onClick={() => onSkillToggle(skill)}
                aria-pressed={active}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      <button type="button" className="reset-button" onClick={onReset}>
        Reset Filters ({normalizePlatformLabel(platform)})
      </button>
    </section>
  );
}
