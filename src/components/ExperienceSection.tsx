import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Briefcase, Trophy, Download } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    type: "Internship",
    title: "Web Development Intern",
    organization: "APEX PLANET Pvt. Ltd.",
    duration: "June 2025 – July 2025",
    description:
      "Completed a Web Development internship focusing on responsive design, UI improvements, and front-end tasks using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "C", "Web Development", "Hardware", "Networking", "Python", "DSA"],
  },
  {
    icon: Trophy,
    type: "Hackathon",
    title: "48-Hour Hackathon Participant",
    organization: "Deviathon 2025, BlockseBlock",
    duration: "2025",
    description:
      "Participated in a 48-hour Hackathon developing innovative solutions under time constraints. Received Certificate of Participation.",
    skills: ["Team Work", "Problem Solving", "Innovation"],
  },
  {
    icon: BookOpen,
    type: "Education",
    title: "Diploma in Computer Science Engineering",
    organization: "GLA University",
    duration: "Pursuing",
    description:
      "Currently pursuing diploma with focus on web development, programming, and computer science fundamentals.",
    skills: ["Web Development", "Python", "DSA", "Networking"],
  },
  {
    icon: Award,
    type: "Certifications",
    title: "Multiple Industry Certifications",
    organization: "Cisco, Forage, ExcelR",
    duration: "2023 - 2025",
    description:
      "Completed certifications in AI, Python, Cyber Security, Data Analytics, Networking, and HTML/CSS from renowned platforms.",
    skills: ["AI", "Python", "Cyber Security", "Data Analytics"],
  },
];

const certifications = [
  {
    name: "Artificial Intelligence – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1NwQ4DwYQWscKfuUstqfK3KHruk4LGRI5/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Python Essentials 1  – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1SVeyV33p1fnEPVMVBujUfWHbL7qUB2aM/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Python Essentials 2 – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1DXhFv7llmGmErWFaLWuKxF-ceajl--FG/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Cyber Security Management – ANZ Forage",
    pdfUrl: "https://drive.google.com/file/d/1eu7F2MdHlRLaVfBao-0RlqvYIoeKEosC/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "GenAI Powered Data Analytics – TATA Forage",
    pdfUrl: "https://drive.google.com/file/d/11qPEwab8T0LCiHM3j7DXOvtCxootePz0/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Cyber Security – Deloitte Australia Forage",
    pdfUrl: "https://drive.google.com/file/d/1lXdbNmj9HBpW5ghFwZD61yw7BrWule19/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Data Analytics – Deloitte Australia Forage",
    pdfUrl: "https://drive.google.com/file/d/19X-ASwDgAgOCFzP699U5ckhigHvKx77D/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Basic Networking – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1PgaJD7YT6WxDBxRRjGN0X2y5S6bYPXx6/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Computer Hardware Basics – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/18z8jQ0qNsQ5aHqa_B4hU1mmphdW4Pac8/view?usp=drive_link#", // Replace with actual PDF URL
  },
  {
    name: "HTML & CSS Essentials – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1gs7Bo4W62bG1m2iOPWqJoDNkgI4mtXoi/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Artificial Intelligence – GLA University",
    pdfUrl: "https://drive.google.com/file/d/127X0CVM7rhCeQx2nWZpFSN0aoLOfcoPR/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Artificial Intelligence – ExcelR",
    pdfUrl: "https://drive.google.com/file/d/1O-1kvi-JoEy_m8hGNY5_30AGT8a0nMel/view?usp=drive_link", // Replace with actual PDF URL
  },
  {
    name: "Artificial Intelligence – Cisco Networking Academy",
    pdfUrl: "https://drive.google.com/file/d/1NwQ4DwYQWscKfuUstqfK3KHruk4LGRI5/view?usp=drive_link", // Replace with actual PDF URL
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey includes internships, hackathons, education, and
            certifications.
          </p>
        </motion.div>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <Card
                    className={`hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <exp.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary mb-2">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground flex-1">{cert.name}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
