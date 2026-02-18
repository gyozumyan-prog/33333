import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  category?: string;
  author?: string;
  href?: string;
}

interface BlogGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  posts: BlogPost[];
}

export function BlogGrid({ badge, title, subtitle, posts }: BlogGridProps) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-500">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    )}
                    {post.date && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-heading group-hover:text-primary transition-colors">
                    {post.href ? (
                      <a href={post.href}>{post.title}</a>
                    ) : post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                  {post.author && (
                    <p className="text-xs text-muted-foreground mt-4 font-medium">By {post.author}</p>
                  )}
                  {post.href && (
                    <a
                      href={post.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </a>
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
