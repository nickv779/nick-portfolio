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
  {
    title: "COP3503C Peer Mentor",
    company: "University of Florida",
    dates: "January 2025 -- May 2025",
    location: "Gainesville, FL",
    tldr: [
      "Guided 500+ students on C++ programming fundamentals with a team of 30+ peer mentors to facilitate the successful and satisfactory completion of the course.",
      "Led a lab of 30+ students to reiterate through taught material for stronger comprehension and introduce and provide assistance for upcoming lab assignments and projects.",
      "Handled 50+ grading disputes, working to assist students with their claims while adhering to strict course policies."
    ],
    desc: "Informal description here.",
    imageURL: "/headshot.jpg"
  },
  {
    title: "INSuRE+E Cybersecurity Researcher",
    company: "University of Florida",
    dates: "January 2025 -- May 2025",
    location: "Gainesville, FL",
    tldr: [
      "Collaborated with 3 others on researching the applications of large language models (LLMs) to formal methods verification of cryptographic algorithms for the NSA as part of the INSuRE+E program.",
      "Conducted literature reviews on designing datasets for LLMs to apply towards understanding and generating Cryptol code to lower the language's skill barrier.",
      "Mapped 20+ samples of Cryptol code to pseudocode representations accounting for abstractions in Cryptol snippets into a CSV file and reformatted into JSON via Python."
    ],
    desc: "Informal description here.",
    imageURL: "/headshot.jpg"
  },
  {
    title: "STAR Mentor",
    company: "University of Florida",
    dates: "May 2023 -- December 2023",
    location: "Gainesville, FL",
    tldr: [
      "Coordinated with 6 mentors to prepare 26 incoming engineering freshmen for their first year as engineering students through the STEPUP program.",
      "Assisted the Calculus 1 class as a teaching assistant by managing grades, assembling weekly homework and quizzes, and holding office hours for 13 students to reinforce their understanding of topics covered.",
      "Organized 10+ social activities and assisted with 6 professional speaker events and corporate tours to promote building connections and networking with industry professionals."
    ],
    desc: "Informal description here.",
    imageURL: "/headshot.jpg"
  }
]
