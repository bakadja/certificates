import { render, screen } from "@testing-library/react";
import CertificateCard from "./CertificateCard";

const certificateFixture = {
  id: "frontend-path",
  title: "The Frontend Developer Path",
  issuer: "Scrimba",
  platform: "scrimba",
  issueDate: "2026-02-15",
  previewAspectRatio: 1.6232,
  image: "/assets/certificates/scrimba/frontend.png",
  durationHours: 81.6,
  summary: "Structured frontend learning path.",
  skills: ["React", "TypeScript"],
  credentialUrl: "https://example.com/cert"
};

describe("CertificateCard", () => {
  it("keeps badge and CTA as non-stretched inline items for Safari/WebKit", () => {
    render(<CertificateCard certificate={certificateFixture} />);

    const badge = screen.getByText(/Scrimba/i);
    const cta = screen.getByRole("link", { name: "View credential" });

    expect(badge).toHaveClass("card-inline-content");
    expect(cta).toHaveClass("card-inline-content");
  });

  it("sets a per-certificate image ratio on the preview container", () => {
    render(<CertificateCard certificate={certificateFixture} />);

    const imageWrap = document.querySelector(".card-image-wrap");

    expect(imageWrap).not.toBeNull();
    expect(imageWrap.style.getPropertyValue("--card-image-ratio")).toBe("1.6232");
  });
});
