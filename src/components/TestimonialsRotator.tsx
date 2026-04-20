import { motion } from "framer-motion";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <div className="py-12">
      <div className="text-center space-y-4">
        {current.avatar && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-md md:text-lg"
        >
          &ldquo;{current.quote}&rdquo;
        </motion.blockquote>
        <motion.p
          key={currentIndex + "-name"}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-600 font-mono uppercase"
        >
          {current.name}
        </motion.p>
        <motion.p
          key={currentIndex + "-position"}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
