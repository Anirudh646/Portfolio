import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding efficient solutions to complex problems",
  },
  {
    icon: Target,
    title: "Quick Learner",
    description: "Rapidly adapting to new technologies",
  },
  {
    icon: Zap,
    title: "Dedicated",
    description: "Committed to delivering quality work",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              I'm a motivated Computer Science Engineering student at GLA University
              with strong foundations in web development, networking, and hardware systems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I'm experienced in HTML, CSS, JavaScript, React, and Python, with a passion
              for building responsive, user-friendly interfaces. I'm a quick learner with
              hands-on experience gained through internships, virtual job simulations,
              and real-world projects.
            </p>
            <p className="text-lg text-muted-foreground">
              My goal is to become a skilled full-stack developer and contribute to
              impactful projects that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
