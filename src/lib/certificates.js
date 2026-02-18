export function sortByIssueDateDesc(certificates) {
  return [...certificates].sort(
    (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
  );
}

export function getAvailableSkills(certificates) {
  return [...new Set(certificates.flatMap((certificate) => certificate.skills))].sort(
    (a, b) => a.localeCompare(b)
  );
}

export function filterCertificates(
  certificates,
  { platform = "all", query = "", selectedSkills = [] }
) {
  const normalizedQuery = query.trim().toLowerCase();

  return certificates.filter((certificate) => {
    const platformMatch =
      platform === "all" ? true : certificate.platform.toLowerCase() === platform;
    const queryMatch = normalizedQuery
      ? certificate.title.toLowerCase().includes(normalizedQuery)
      : true;
    const skillsMatch = selectedSkills.every((skill) =>
      certificate.skills.includes(skill)
    );

    return platformMatch && queryMatch && skillsMatch;
  });
}
