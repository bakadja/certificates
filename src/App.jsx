import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import CertificateGrid from "./components/CertificateGrid";
import StatsBar from "./components/StatsBar";
import { certificates, coreSkills } from "./data/certificates";
import {
  filterCertificates,
  getAvailableSkills,
  sortByIssueDateDesc
} from "./lib/certificates";

const allCertificates = sortByIssueDateDesc(certificates);

function toggleSkillValue(selectedSkills, skill) {
  return selectedSkills.includes(skill)
    ? selectedSkills.filter((item) => item !== skill)
    : [...selectedSkills, skill];
}

export default function App() {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("all");
  const [selectedSkills, setSelectedSkills] = useState([]);

  // const availableSkills = useMemo(
  //   () => getAvailableSkills(allCertificates),
  //   []
  // );
  const availableSkills = useMemo(
    () => coreSkills,
    []
  );

  const visibleCertificates = useMemo(
    () =>
      filterCertificates(allCertificates, {
        platform,
        query,
        selectedSkills
      }),
    [platform, query, selectedSkills]
  );

  function resetFilters() {
    setQuery("");
    setPlatform("all");
    setSelectedSkills([]);
  }

  return (
    <div className="page-shell">
      <div className="background-glow" />
      <header className="hero">
        <p className="eyebrow">Zertifikate & Weiterbildungen</p>
        <h1>Scrimba + Coursera Zertifikate</h1>
        <p className="hero-copy">
          Strukturierte Übersicht meiner Weiterbildungen zur schnellen und klaren Einordnung meiner fachlichen Kompetenzen.
        </p>
      </header>

      <StatsBar certificates={allCertificates} skillCount={coreSkills.length}/>

      <FilterBar
        query={query}
        platform={platform}
        skills={availableSkills}
        selectedSkills={selectedSkills}
        onQueryChange={setQuery}
        onPlatformChange={setPlatform}
        onSkillToggle={(skill) =>
          setSelectedSkills((prev) => toggleSkillValue(prev, skill))
        }
        onReset={resetFilters}
      />

      <p className="results-count" aria-live="polite">
        {visibleCertificates.length} result
        {visibleCertificates.length === 1 ? "" : "s"}
      </p>

      <CertificateGrid certificates={visibleCertificates} />
    </div>
  );
}
