import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface Props {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi?.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <motion.div
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Carousel
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        setApi={setCarouselApi}
      >
        <CarouselContent className="items-stretch">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="basis-11/12 sm:basis-4/5 lg:basis-3/4"
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="h-[250px] md:h-[400px] lg:h-[500px] select-none">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="p-4 md:p-6 space-y-2 select-none flex-1 flex flex-col">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-gray-800 hover:text-gray-600 transition-colors inline-flex items-center gap-1 mt-2"
                    >
                      VIEW PROJECT →
                    </a>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-12" />
        <CarouselNext className="-right-4 md:-right-12" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-200"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
