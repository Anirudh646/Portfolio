import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Next-Gen University Portal",
    description:
      "A modern university portal providing enhanced student-faculty interaction through role-based dashboards, announcements, and doubt management system.",
    techStack: ["React.js", "Python", "Django/Flask"],
    features: ["Role-based Dashboards", "Announcements", "Doubt Management", "Modern UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Admission Counselor Website",
    description:
      "A responsive platform that helps students with admission queries and eligibility guidance for various courses and universities.",
    techStack: ["Node.js", "Firebase", "HTML", "CSS"],
    features: ["Admission Guidance", "Eligibility Check", "Responsive Design", "Real-time Data"],
    liveUrl: "https://ai-addmission2.vercel.app",
    githubUrl: "https://github.com/Anirudh646/ai-addmission2",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website with product listings, shopping cart, and user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Product Catalog", "Shopping Cart", "Responsive UI", "User Friendly"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anirudh646/curated-e-commerce-solutions",
  },
  {
    title: "Electrical Power Bank",
    description:
      "Built an electrical power bank using lithium-ion chargeable batteries, demonstrating hardware and electrical engineering skills.",
    techStack: ["Hardware", "Electronics", "Lithium-ion Batteries"],
    features: ["Portable Charging", "Rechargeable", "Custom Build", "Practical Application"],
    
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Features:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button asChild size="sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
