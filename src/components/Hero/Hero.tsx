import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

function RotatingNames({
  names,
  appearDelay = 0,
  interval = 2000,
  className,
}: {
  names: string[];
  appearDelay?: number;
  interval?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let iv: number | undefined;
    const t = setTimeout(() => {
      iv = window.setInterval(() => setIdx((i) => (i + 1) % names.length), interval);
    }, Math.max(0, appearDelay * 1000));
    return () => {
      clearTimeout(t);
      if (iv) clearInterval(iv);
    };
  }, [names.length, interval, appearDelay]);

  

  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: appearDelay }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className={className}
        >
          {names[idx]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}

export default function Hero() {

// timing helpers (keep in sync with TypingAnimation char delay = 0.03s)
  const baseDelay = 3.4;
  const charDelay = 0.03;
  const preText = 'full-time problem\u00A0';
  const lastWord = 'untangler';
  const lastStart = baseDelay + preText.length * charDelay;
  const underlineDelay = lastStart + lastWord.length * charDelay + 0.1;

  return (
    <section className="mb-32">
      {/* use same container as header to guarantee perfect left alignment */}
      <div className="flex items-start justify-between">
        <div className="flex-1 text-cream">    
          <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <TypingAnimation text="They call it design. I call it organized obsession." />
          </motion.h2>

          <div className="text-3xl space-y-1">
            <div className="inline-flex items-baseline gap-2 nunito">
              <TypingAnimation text={"I'm "} startDelay={1.9} className="nunito inline-block" />
              <RotatingNames names={['Shifin,', 'shiftd,', 'shifiyy,']} appearDelay={2.22} interval={2000} className="nunito inline-block font-semibold" />
            </div>

            <TypingAnimation text="part designer, part vibe coder," startDelay={2.6} className="nunito" />

            <div className="inline-flex items-baseline nunito">
              <TypingAnimation text={preText} startDelay={baseDelay} className="nunito inline-block" />
              <span className="relative inline-block">
                <TypingAnimation text={lastWord} startDelay={lastStart} className="nunito inline-block font-semibold" />
                <motion.svg
                  className="absolute left-0 right-0 -bottom-4 h-6 w-full"
                  viewBox="0 0 160 24"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M4 12 C28 2, 92 2, 156 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: underlineDelay, duration: 0.9, ease: 'easeInOut' }}
                  />
                </motion.svg>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
