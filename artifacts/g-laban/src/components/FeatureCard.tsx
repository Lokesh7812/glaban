import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      className="group relative bg-card border border-card-border rounded-[24px] p-7 hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[hsl(224,72%,38%)] text-primary-foreground grid place-items-center shadow-md mb-5 group-hover:scale-105 transition-transform">
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </div>
        <h3 className="font-serif text-xl md:text-[22px] text-primary font-semibold leading-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
