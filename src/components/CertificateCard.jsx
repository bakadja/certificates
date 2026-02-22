import { useMemo, useState } from "react";

function formatDate(value) {
  return new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

function titlePlatform(platform) {
  return platform.charAt(0).toUpperCase() + platform.slice(1);
}

export default function CertificateCard({ certificate }) {
  const [imageError, setImageError] = useState(false);
  const issuedDate = useMemo(() => formatDate(certificate.issueDate), [certificate]);
  const imageAspectRatio = certificate.previewAspectRatio ?? 16 / 9;

  return (
    <article className="certificate-card">
      <div className="card-image-wrap" style={{ "--card-image-ratio": `${imageAspectRatio}` }}>
        {imageError ? (
          <div className="image-fallback">Preview unavailable</div>
        ) : (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate preview`}
            className="card-image"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
      </div>

      <div className="card-content">
        <p className={`platform-badge platform-${certificate.platform} card-inline-content`}>
         {certificate.issuer} {certificate.issuer && "|"} {titlePlatform(certificate.platform)}
        </p>
        <h3>{certificate.title}</h3>
        <p className="issued-date">Abgeschlossen: {issuedDate}</p>
        <p className="issued-date">{certificate.durationHours} Stunden {certificate.gradePercent && "| Abschlussnote:"} {certificate.gradePercent} {certificate.gradePercent && "%"}</p>
        <p className="card-summary">{certificate.summary}</p>
        <ul className="skills-list">
          {certificate.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="credential-link card-inline-content"
        >
          View credential
        </a>
      </div>
    </article>
  );
}
