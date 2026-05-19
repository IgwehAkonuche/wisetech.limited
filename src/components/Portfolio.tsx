import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

import haeyesonHero from '../assets/images/haeyeson_hero_1779039495768.png';
import geotechHero from '../assets/images/geotech_hero_1779039513657.png';
import ventrixHero from '../assets/images/ventrix_hero_1779039529335.png';
import boreholeHero from '../assets/images/borehole_drilling_hero_1779039544259.png';
import geoAnalysis from '../assets/images/geophysical_analysis_work_1779100251528.jpg';
import fieldSurvey from '../assets/images/field_geophysical_survey_1779100269683.jpg';
import fieldInstrument from '../assets/images/geophysical_field_instrument_1779100285457.jpg';
import businessDigitization from '../assets/images/business_digitization_service_1779101961665.png';
import webTraining from '../assets/images/web_development_training_workshop_1779101978430.png';

const projects = [
  { 
    title: 'Haeyeson', 
    category: 'Industrial Tech', 
    url: 'https://haeyeson.com',
    image: haeyesonHero,
    description: 'Bespoke website design and development for a global leader in industrial technology, creating secure, connected, and efficient digital operational environments.',
    tags: ['Industrial IoT', 'Security']
  },
  { 
    title: 'Geotech Energy', 
    category: 'Energy Sector', 
    url: 'https://geotechenergyng.com',
    image: geotechHero,
    description: 'Professional corporate website designed and managed for a geophysical and engineering firm in the energy sector.',
    tags: ['Engineering', 'Corporate']
  },
  { 
    title: 'Ventrix Oilfield', 
    category: 'Industrial Services', 
    url: 'https://ventrixoilfield.com.ng',
    image: ventrixHero,
    description: 'Clean and functional website developed for an oilfield technical services and infrastructure provider.',
    tags: ['Oil & Gas', 'Infrastructure']
  },
  { 
    title: 'Borehole Water Drilling', 
    category: 'Subsurface Exploration', 
    url: '#',
    image: boreholeHero,
    description: 'Professional hydrogeological surveys and precision water drilling operations.',
    tags: ['Hydrogeology', 'Water Systems']
  },
  { 
    title: 'Advanced Log Interpretation', 
    category: 'Data Analysis', 
    url: '#',
    image: geoAnalysis,
    description: 'In-depth analysis of geophysical borehole data to identify subsurface formations and resource potential.',
    tags: ['Petrophysics', 'Log Analysis']
  },
  { 
    title: 'Resistivity Mapping', 
    category: 'Field Survey', 
    url: '#',
    image: fieldSurvey,
    description: 'Conducting site-specific electrical resistivity surveys for groundwater exploration and geological site characterization.',
    tags: ['Geoelectrical', 'Resource Mapping']
  },
  { 
    title: 'Magnetic Field Survey', 
    category: 'Subsurface Exploration', 
    url: '#',
    image: fieldInstrument,
    description: 'High-precision magnetic investigations for mineral exploration and structural geological mapping.',
    tags: ['Magnetometry', 'Geophysics']
  },
  { 
    title: 'Digitalize Business Processes', 
    category: 'Digital Transformation', 
    url: '#',
    image: businessDigitization,
    description: 'We transition traditional businesses into the digital era by modernizing legacy workflows with high-end, efficient, and scalable digital solutions.',
    tags: ['Business Tech', 'Digitalization']
  },
  { 
    title: 'Professional Website Training', 
    category: 'Corporate Training', 
    url: '#',
    image: webTraining,
    description: 'Empowering your team with hands-on web management and development skills. We offer tailored corporate training to help you master your digital assets.',
    tags: ['Web Literacy', 'Team Growth']
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">Selected Works</h2>
            <p className="text-brand-gray/30 max-w-xl text-xl font-light leading-relaxed">Showcasing a range of successful projects across digital and scientific disciplines.</p>
          </div>
          <button className="text-brand-cyan font-bold flex items-center gap-2 group border-b border-brand-cyan/20 pb-2 transition-all hover:gap-4 no-underline">
            Browse all case studies <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group block"
            >
              <a 
                href={project.url}
                target={project.url !== '#' ? "_blank" : undefined}
                rel={project.url !== '#' ? "noopener noreferrer" : undefined}
                className="cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-10 shadow-sm border border-brand-gray/[0.03] bg-brand-gray/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-gray/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg">
                      <ExternalLink className="w-5 h-5 text-brand-cyan" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex flex-col gap-3">
                <div className="space-y-3">
                  <p className="text-[12px] font-bold text-brand-cyan uppercase tracking-[0.3em]">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-display font-extrabold group-hover:text-brand-cyan transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray/80 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-3 pt-4">
                   {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gray/60 border border-brand-gray/10 px-3 py-1 rounded-full">
                         {tag}
                      </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
