import {
  filterCertificates,
  getAvailableSkills,
  sortByIssueDateDesc
} from "./certificates";

const fixtures = [
  {
    id: "a",
    title: "Advanced React",
    platform: "scrimba",
    issueDate: "2025-11-04",
    skills: ["React", "Performance"]
  },
  {
    id: "b",
    title: "JavaScript Algorithms",
    platform: "coursera",
    issueDate: "2024-03-10",
    skills: ["JavaScript", "Algorithms"]
  },
  {
    id: "c",
    title: "Frontend Career Path",
    platform: "scrimba",
    issueDate: "2025-01-20",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

describe("getAvailableSkills", () => {
  it("returns unique sorted skills", () => {
    expect(getAvailableSkills(fixtures)).toEqual([
      "Algorithms",
      "CSS",
      "HTML",
      "JavaScript",
      "Performance",
      "React"
    ]);
  });
});

describe("sortByIssueDateDesc", () => {
  it("sorts certificates from newest to oldest", () => {
    expect(sortByIssueDateDesc(fixtures).map((item) => item.id)).toEqual([
      "a",
      "c",
      "b"
    ]);
  });
});

describe("filterCertificates", () => {
  it("filters by platform", () => {
    const results = filterCertificates(fixtures, {
      platform: "coursera",
      query: "",
      selectedSkills: []
    });
    expect(results.map((item) => item.id)).toEqual(["b"]);
  });

  it("filters by free text query in title", () => {
    const results = filterCertificates(fixtures, {
      platform: "all",
      query: "career",
      selectedSkills: []
    });
    expect(results.map((item) => item.id)).toEqual(["c"]);
  });

  it("filters by selected skills requiring all skills to match", () => {
    const results = filterCertificates(fixtures, {
      platform: "all",
      query: "",
      selectedSkills: ["JavaScript", "CSS"]
    });
    expect(results.map((item) => item.id)).toEqual(["c"]);
  });
});
