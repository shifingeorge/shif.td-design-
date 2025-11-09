import { ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMedium, FaWhatsapp, FaFigma } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function TypingAnimation({
  text,
  startDelay = 0,
  className,
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.05, delay: startDelay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: startDelay + index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

function App() {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  const projects = [
    {
      title: 'Restorepoint',
      image: '/restore-point/cover.png',
      imageObjectPosition: '30% center', // move image slightly to the right
      liveUrl: 'https://www.restorepoint.co.in/',
      caseStudies: {
        notion: 'https://cedar-ninja-e62.notion.site/Restore-point-2a4dd300afb380f68986eec2debc61af?source=copy_link',
        //medium: 'https://medium.com/@you/restorepoint',
      },
    },
    {
      title: 'Luna Bloom',
      image: '/luna-bloom/cover.png', // public/Luna Bloom/cover.jpg
      liveUrl: 'https://lunabloom.in/',
      caseStudies: {
        notion: 'https://notion.so/your-notion-link',
        //medium: 'https://medium.com/@you/luna-bloom',
      },
    },
    {
      title: 'NT Digital (under construction)',
      image: '/ntdigital/cover.png',
      liveUrl: 'https://www.ntdigital.in/',
      caseStudies: {
        //notion: 'https://notion.so/your-notion-link',
        //medium: 'https://medium.com/@you/nt-digital',
      },
    },
    {
      title: 'Dresso',
      image: '/dresso/cover.jpg',
      imageObjectPosition: '10% center', // move image slightly to the right
      liveUrl: 'https://www.figma.com/community/file/1511432111707648819/dresso-e-commerce',
      caseStudies: {
        //notion: 'https://notion.so/your-notion-link',
        medium: 'https://medium.com/@shif.td/dresso-ai-powered-fashion-companion-7cc2dca86a54',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-xl font-bold bricolage">shiftd.design</h1>
        </div>
      </nav>

      {/* Increased gap under the header */}
      <main className="max-w-7xl mx-auto px-8 pt-56 md:pt-96 pb-20">
        <section className="flex items-start justify-between mb-32">
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TypingAnimation text="They call it design. I call it organized obsession." />
            </motion.h2>

            <div className="text-3xl space-y-1">
              {/* Line-by-line typing with staggered delays, Nunito Sans */}
              <TypingAnimation text="I'm Shifin" startDelay={1.9} className="nunito" />
              <TypingAnimation text="part designer, part vibe coder," startDelay={2.6} className="nunito" />
              <TypingAnimation text="full-time problem untangler" startDelay={3.4} className="nunito" />
            </div>
          </div>
        </section>

        <section ref={projectsRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-12">Selected work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Cover image from /public */}
                  <div className="relative bg-gray-200 rounded-2xl aspect-[4/3] mb-4 overflow-hidden group-hover:bg-gray-300 transition-colors">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: project.imageObjectPosition || 'center' }}
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  {/* Title links to live/design preview */}
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:underline"
                      aria-label={`Open live preview of ${project.title}`}
                    >
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Case study links (Notion / Medium) */}
                  {(project.caseStudies?.notion || project.caseStudies?.medium) && (
                    <p className="text-sm text-gray-600 mt-1">
                      Case study : 
                      {project.caseStudies?.notion && (
                        <a
                          href={project.caseStudies.notion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 hover:underline inline-flex items-center gap-1"
                        >
                          Notion <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.caseStudies?.notion && project.caseStudies?.medium && (
                        <span className="mx-1">•</span>
                      )}
                      {project.caseStudies?.medium && (
                        <a
                          href={project.caseStudies.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          Medium <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-black text-white pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-8 text-center">
           <p className="text-lg mb-4">Thanks for scrolling</p>

           {/* Icons row — replace placeholders/URLs as needed */}
           <div className="flex items-center justify-center gap-6 mb-6">
             <a
               href="mailto:shifiyy03.design@gmail.com"
               aria-label="Email"
               className="text-white hover:opacity-80"
             >
               <SiGmail className="w-6 h-6" />
             </a>

             <a
               href="https://wa.me/+917994613019"
               aria-label="WhatsApp"
               className="text-white hover:opacity-80"
               target="_blank"
               rel="noopener noreferrer"
             >
               <FaWhatsapp className="w-6 h-6" />
             </a>

             <a
               href="https://www.figma.com/@shifiyy"
               aria-label="Figma"
               className="text-white hover:opacity-80"
               target="_blank"
               rel="noopener noreferrer"
             >
               <FaFigma className="w-6 h-6" />
             </a>

             <a
               href="https://medium.com/@shif.td"
               aria-label="Medium"
               className="text-white hover:opacity-80"
               target="_blank"
               rel="noopener noreferrer"
             >
               <FaMedium className="w-6 h-6" />
             </a>
           </div>

           {/* footer brand sits flush to footer bottom */}
           <div className="hidden sm:block mt-6 text-[8rem] md:text-[12rem] sm:text-[6rem] leading-none">
             <h2 className="font-bold bricolage">
               shiftd.design
             </h2>
           </div>
         </div>
       </footer>
    </div>
  );
}

export default App;