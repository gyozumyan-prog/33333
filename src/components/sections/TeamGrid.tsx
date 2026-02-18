import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  socials?: Array<{ platform: string; url: string }>;
}

interface TeamGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export function TeamGrid({ badge, title, subtitle, members }: TeamGridProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge && <span className="text-sm font-semibold text-primary uppercase tracking-widest">{badge}</span>}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500">
                {member.image && (
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold font-heading">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                  {member.bio && <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>}
                  {member.socials && member.socials.length > 0 && (
                    <div className="flex justify-center gap-3 mt-4">
                      {member.socials.map((s, j) => (
                        <a
                          key={j}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition text-xs font-bold"
                        >
                          {s.platform[0].toUpperCase()}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
