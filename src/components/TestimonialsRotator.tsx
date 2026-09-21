import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsRotator({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Server-rendered markup must be visible without JS: framer-motion bakes
  // `initial` into the SSR output, so an un-hydrated island would stay at
  // opacity 0 forever. Only animate once we know we're running in the browser.
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length, reduceMotion]);

  const current = testimonials[currentIndex];

  return (
    <div className="py-12">
      <div className="text-center space-y-4">
        {current.avatar && (
          <motion.div
            key={currentIndex}
            initial={mounted && !reduceMotion ? { opacity: 0, x: 100 } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          >
            <img
              src={current.avatar}
              alt={current.name}
              width={48}
              height={48}
              className="rounded-full mx-auto"
            />
          </motion.div>
        )}
        <motion.blockquote
          key={currentIndex + "-quote"}
          initial={mounted && !reduceMotion ? { opacity: 0, x: 100 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          className="text-md md:text-lg"
        >
          &ldquo;{current.quote}&rdquo;
        </motion.blockquote>
        <motion.p
          key={currentIndex + "-name"}
          initial={mounted && !reduceMotion ? { opacity: 0, x: 100 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-600 font-mono uppercase"
        >
          {current.name}
        </motion.p>
        <motion.p
          key={currentIndex + "-position"}
          initial={mounted && !reduceMotion ? { opacity: 0, x: 100 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
          className="text-xs text-gray-500"
        >
          {current.position} • {current.company}
        </motion.p>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-200"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
