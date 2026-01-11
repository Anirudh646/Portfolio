import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
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
    title: "Product Manager Dashboard",
    description: 
      "A modern product management dashboard that allows users to add, edit, delete, and manage products with category tagging, search, and responsive UI.",
      techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui"
    ],
    features: [
      "Add, edit, and delete products",
      "Search and filter products",
      "Category-based product management",
      "Responsive card and list views",
      "Clean and modern UI"
    ],
    liveUrl: "https://product-showcase-studio-peach.vercel.app",
    githubUrl: "https://github.com/Anirudh646/product-showcase-studio",
  },
  {
    title: "LearnBot – AI Learning Platform",
    description:
      "An interactive learning platform designed for kids, featuring math, language, and story-based modules with progress tracking, levels, and gamified rewards.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel"
    ],
    features: [
      "Interactive dashboard with progress tracking",
      "Math tutor module with gamified learning",
      "Language tutor for words and spelling",
      "Story mode for fun and engaging reading",
      "Points, levels, and badges system",
      "Responsive and kid-friendly UI"
    ],
    liveUrl: "https://learn-bot-six.vercel.app",
    githubUrl: "https://github.com/Anirudh646/LearnBot",
  },
  {
    title: "Curated E-Commerce Platform",
    description:
      "LUXE Store is a modern e-commerce web application showcasing a curated collection of premium products with a clean UI, smooth shopping experience, and scalable frontend architecture.",
    techStack: ["React.js", "TypeScript","Tailwind CSS","Supabase","Vite","Vercel"],
    features: ["Product Listing & Detail Pages","Add to Cart & Cart Management","User Authentication","Responsive Modern UI","Promotional Banners & Offers","Optimized Frontend Performance"],
    liveUrl: "https://github.com/Anirudh646/curated-e-commerce-solutions",
    githubUrl: "https://curated-e-commerce-solutions.vercel.app/",
  },
  {
    title: "TaskFlow – Task Management Dashboard",
    description:
      "TaskFlow is a modern task management web application that enables users to securely manage tasks with real-time updates, priority tracking, and Kanban-style workflows.",
    techStack: [
      "React.js","TypeScript","Tailwind CSS","Supabase","Vite","Vercel"
    ],
    features: [
      "Secure Email & Password Authentication",
      "Create, Edit, Delete & Update Tasks",
      "Kanban and List View Toggle",
      "Task Status Tracking (Pending, In Progress, Completed)",
      "Priority & Status Filters",
      "Clean Dark-Themed Responsive UI"
    ],
    liveUrl: "https://primetrade-task-nu.vercel.app",
    githubUrl: "https://github.com/Anirudh646/primetrade-task",
  },
  {
    title: "Electrical Power Bank",
    description:
      "Built an electrical power bank using lithium-ion chargeable batteries, demonstrating hardware and electrical engineering skills.",
    techStack: ["Hardware", "Electronics", "Lithium-ion Batteries"],
    features: ["Portable Charging", "Rechargeable", "Custom Build", "Practical Application"],
    liveUrl: "",
    githubUrl: "",
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
