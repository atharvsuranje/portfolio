const educationData = [
  {
    degree: "B.E. in Computer Science",
    institution: "Savitribai Phule Pune University",
    duration: "2021 - 2025",
    details: "Focused on software engineering, data structures, and full-stack development. Participated in hackathons and developed multiple projects using React, Node.js, and Python.",
  },
  {
    degree: "HSC - Science",
    institution: "Kids Mentor Global School (Jr. College) Nagpur",
    duration: "2019 - 2021",
    details: "Completed with distinction. Core subjects included Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "SSC",
    institution: "Gurukul Public School",
    duration: "2018 - 2019",
    details: "Completed with distinction.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Education <span className="text-primary">Background</span>
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-primary">{edu.duration}</p>
              <p className="mt-2 text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
