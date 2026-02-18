import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  values: Array<boolean | string>;
}

interface ComparisonTableProps {
  badge?: string;
  title: string;
  subtitle?: string;
  columns: string[];
  features: ComparisonFeature[];
  highlight_column?: number;
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-400 mx-auto" />
    );
  }
  if (value === '-') return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
  return <span className="font-medium">{value}</span>;
}

export function ComparisonTable({ badge, title, subtitle, columns, features, highlight_column }: ComparisonTableProps) {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          className="overflow-x-auto rounded-xl border bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold font-heading text-muted-foreground">Feature</th>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center font-bold font-heading ${
                      highlight_column === i ? 'bg-primary/5 text-primary' : ''
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">{feature.name}</td>
                  {feature.values.map((val, j) => (
                    <td
                      key={j}
                      className={`p-4 text-center ${highlight_column === j ? 'bg-primary/5' : ''}`}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
