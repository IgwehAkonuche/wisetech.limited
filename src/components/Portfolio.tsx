import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { 
    title: 'Beauty Webshop', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800',
    tags: ['Shopify', 'UI/UX']
  },
  { 
    title: 'Geophysical Mapping Pro', 
    category: 'Scientific Tool', 
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'WebGL']
  },
  { 
    title: 'Dropshipping HQ', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['WooCommerce', 'Growth']
  },
  { 
    title: 'Borehole Survey Dashboard', 
    category: 'Infrastructure', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Data Vis']
  },
  { 
    title: 'Luxury Real Estate', 
    category: 'Web Design', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Design']
  },
  { 
    title: 'Environmental Monitor', 
    category: 'Data Science', 
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    tags: ['API Integration']
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-extrabold mb-4">Selected <span className="text-white/40 italic">Works</span></h2>
            <p className="text-white/60 max-w-xl">Showcasing a range of successful projects, from visually stunning e-commerce stores to intuitive industrial applications.</p>
          </div>
          <button className="text-brand-magenta font-bold flex items-center gap-2 group">
            View All Projects <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 glass rounded-full">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-brand-magenta uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-brand-magenta transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
