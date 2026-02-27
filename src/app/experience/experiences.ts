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
    desc: "Marking my first software engineering internship, my time at BNY was such an incredible experience and I am forever grateful to all the amazing people I met. Prior to the start date, I made the exhaustive effort of driving from Gainesville to Jersey City--a whole 2 days worth of driving. Surprisingly it was relaxed, though once I got to the location the Florida attire I wore was not suitable for how cold and windy it was. I was fortunate to stay in the Stevens Insitute of Technology's dorms located in Hoboken, a beautiful town and conveniently placed near a subway station. There was a lot that happened over this summer, but I ended up choosing this picture of a goose with the World Trade Center to show since it was my favorite photo taken while there.",
    imageURL: "/pictures/bny.jpg"
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
    desc: "Out of all the core classes required for computer science students to take, I feel that COP3502C, Programming Fundamentals II, is one of the better courses offered. I took it with an incredible professor, Dr. Laura Cruz Castro (who also became my senior project advisor), and the projects for that class were some of the more rewarding projects I've accomplished for a course. The final project itself was a recreation of Minesweeper, which has always been one of my favorite games to play on a browser. I was fortunate to become a peer mentor for this course under a new professor a couple years after I took it, and I found every bit of the experience to be rewarding. Unfortunately, I don't have any particular images of my time as a peer mentor, but the photo I chose here is to commemorate the times I would eat Fat G's BBQ Food at the Reitz Union Food Court with my friend and fellow TA every Monday after my discussion.",
    imageURL: "/pictures/fatg.jpg"
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
    desc: "As a bit of background, I took a cryptology course with Dr. Cheryl Resch over the summer of 2024. During that time, she mentioned a security research program she was interested in getting UF involved with, and I naturally expressed interest in wanting to be part of it. Fast forward to Spring 2025, and I officially started the program alongside a few others from the same cryptology course. We were matched with the NSA and worked with the research problem they wanted worked on but could never dedicated the manpower towards it. It was my first real exposure to conducting legitimate research and, while I went through it with mixed feelings on what I liked and didn't like, I found it very rewarding. As a bonus, I was able to fly out to Washington DC and present a poster of our research to government officials and other participants of the program, which was an incredible experience. The picture here is of myself with the other teammate who joined the trip and Dr. Resch in front of the White House.",
    imageURL: "/pictures/insure.jpg"
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
    desc: "When I entered UF, I took part in the STEPUP Summer Bridge program for Summer B 2022. It was a good experience where I made strong connections lasting to this day, so it was a given that I would return the following summer to become a mentor for the program. Throughout the 6 weeks of the program, they were some of the more humbling moments of my time. I felt challenged every day working in situations I wasn't prepared for but had to thrive in regardless. There were many things I regretted once the program ended, but I took those lessons I learned and sought to improve on what I was lacking as a leader and guide. The picture I show here was taken during our closing ceremony and features all the computer science mentees and mentors, including me of course.",
    imageURL: "/pictures/stepup.jpg"
  }
]
