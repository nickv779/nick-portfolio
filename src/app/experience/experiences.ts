type Experience = {
  title: string,
  company: string,
  dates: string,
  location: string,
  tldr: string[],
  desc: string,
  imageURL: string
};

export const Experiences : Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Bank of New York Mellon",
    dates: "June 2025 -- August 2025",
    location: "Jersey City, NJ",
    tldr: [
      "Integrated a custom expandable table into an AG-Grid Angular table that rendered nested item data retrieved from MongoDB backend, reducing data analysis times by 60\% and improving user experience.",
      "Reverse-engineered a Java Spring boot API with 30 endpoints and 65 schemas to author an OpenAPI 3.0 (Swagger) specification, deepening understanding of API design, REST principles, SDLC, and documentation standards.",
      "Contributed to an agentic AI initiative supporting architecture governance by exploring applications of NLP and AI agents, aiming to increase productivity across 5000+ action items and reduce time to market via automated resolutions."
    ],
    desc: "Informal description here.",
    imageURL: "/headshot.jpg"
  },
]
