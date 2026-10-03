'use client';

import { Rocket } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

export default function FooterSurprise() {
  const controls = useAnimation();

  const launchRocket = async () => {
    await controls.start({
      y: -1000,
      opacity: 0,
      transition: { duration: 1.5, ease: 'easeIn' },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await controls.start({ y: 0, opacity: 0, transition: { duration: 0 } });
    await controls.start({ opacity: 1, transition: { duration: 0.5 } });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={launchRocket}
          className="flex items-center justify-center p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Launch to top"
        >
          <motion.div animate={controls}>
            <Rocket className="size-5 hover:animate-bounce" />
          </motion.div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">
        Blast off! 🚀
      </TooltipContent>
    </Tooltip>
  );
}
