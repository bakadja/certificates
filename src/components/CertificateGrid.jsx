import CertificateCard from "./CertificateCard";

export default function CertificateGrid({ certificates }) {
  if (certificates.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <h2>No certificates match these filters</h2>
        <p>Try removing a skill or search keyword to widen the results.</p>
      </section>
    );
  }

  return (
    <section className="certificate-grid">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </section>
  );
}
