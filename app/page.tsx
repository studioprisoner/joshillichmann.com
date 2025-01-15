"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';


const projects = [
  {
    title: "Gigz - iOS app for jounaling live music",
    description: "A personal live music diary. Whether you're a casual concert-goer or a dedicated live music enthusiast, Gigz helps you preserve and celebrate your live music experiences.",
    image: "/gigz-mock-1.png",
  },
  {
    title: "Penfolds - eCommerce UX Research and Design",
    description: "Dedication towards improving the key functionalities of Penfolds.com's e-commerce platform, resolving user interface hitches for the global routing, mini-cart, and transaction steps, thus achieving its dual objectives: evolving a more navigable browsing interface and streamlining the purchase process to amplify conversion rates.",
    image: "/penfolds-mock-1.png",
  },
  {
    title: "MChart - Visualising a healthcare landscape",
    description: "Geospatial mapping capabilities revolutionise data visualisation for health and social care planners and professionals.",
    image: "/mchart-mock-1.png",
  },
];

const testimonials = [
  {
    quote: "Josh showcased impressive technical skills in creating a user-friendly interface. Their ability to create graphic interpretations of our navigation tool's layers was commendable.",
    name: "Professor Luis Salvador-Carulla",
    position: "Deputy Director",
    company: "Health Research Institute",
    avatar: ""  // optional
  },
  {
    quote: "This is a much cleaner and user-friendly experience through these key areas of the site. The navigation, mini cart, and checkout improvements are fantastic, especially for mobile users. Honestly brilliant work",
    name: "Grace Burke",
    position: "Global Website Experience Manager",
    company: "Penfolds - Treasury Wine Estates",
    avatar: ""  // optional
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 overflow-x-hidden">
      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 py-12"
      >
        <Image
          src="/josh.png"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />

        <div className="space-y-1">
          <h1 className="text-xl font-medium font-mono">Josh Illichmann</h1>
          <p className="text-gray-600">
            I&apos;m a Product Designer from Melbourne, Australia and a graduate of <Link href="https://swinburne.design/">Swinburne University Design</Link> program.
          </p>
        </div>

        {/* Contact Info */}
        
          <div className="space-y-2 text-sm">
            <p>Send an email → <Link href="mailto:josh@studioprisoner.com">josh@studioprisoner.com</Link></p>
            <p>Connect with me on LinkedIn → <Link href="https://www.linkedin.com/in/joshuai/">@joshuai</Link></p>
          </div>

          {/* Availability Badge */}
          <div>
            <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-mono">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Work History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Previous Work */}
          <div className="space-y-2">
            <h2 className="font-medium uppercase font-mono">Previously</h2>
            <div className="space-y-1 text-gray-600">
              <p>
                Consultant at Sportsbet{' '}
                <Image 
                  src="/sb-icon.png" 
                  alt="Sportsbet" 
                  width={22} 
                  height={22} 
                  className="inline-block align-middle" 
                />
                {' '}transforming ways of working and Zero Trust cyber frameworks.
              </p>
            </div>
          </div>
            {/* Current Work */}
            <div className="space-y-2">
              <h2 className="font-medium uppercase font-mono">Currently</h2>
              <div className="space-y-1 text-gray-600">
                <p>
                  Building things with Figma{' '}
                  <Image 
                    src="/figma-icon.png" 
                    alt="Figma" 
                    width={20} 
                    height={20} 
                    className="inline-block align-middle" 
                  />
                  {' '} and Cursor{' '}
                  <Image 
                    src="/cursor-icon.png" 
                    alt="Cursor" 
                    width={20} 
                    height={20} 
                    className="inline-block align-middle" 
                  />
                  {' '} 
                </p>
                <p>Founder of <Link href="https://gigz.app">Gigz</Link>{' '}
                  <Image 
                    src="/gigz-icon.png" 
                    alt="Gigz" 
                    width={20} 
                    height={20} 
                    className="inline-block align-middle" 
                  />
                  {' '} </p>
              </div>
            </div>

          </div>
          
          <div>
          
        </div>

      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -((projects.length - 1) * (1000 + 16))
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 800, bounceDamping: 20 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[600px] lg:w-[800px] bg-gray-100 rounded-xl overflow-hidden mr-4 first:ml-0"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-[250px] md:h-[400px] lg:h-[500px] select-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
              <div className="p-4 md:p-6 space-y-2 select-none">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonial */}
      <div className="py-12">
        <div className="text-center space-y-4">
          {testimonials[currentIndex].avatar && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
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
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </motion.blockquote>
          <motion.p
            key={currentIndex + "-name"}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-600 font-mono uppercase"
          >
            {testimonials[currentIndex].name}
          </motion.p>
          <motion.p
            key={currentIndex + "-position"}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-gray-500"
          >
            {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
          </motion.p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
          {/* Label Column */}
          <div className="col-span-1">
            <h2 className="text-sm font-mono">BIO</h2>
          </div>
          
          {/* Bio Text Columns */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <p className="text-gray-600 leading-relaxed text-base">
            For the past 8 years, I&apos;ve served as a consultant specialising in change management, project management, and business analysis across diverse sectors including telecommunications, FMG, gaming, and government. My expertise centers on digital transformations, focusing on enhancing business performance, strengthening cyber security, and advancing digital analytics initiatives.
            </p>
            <p className="text-sm text-gray-600">I love to travel, go to concerts, cook amazing food, explore new places and more.</p>
          </div>
          
          <div className="col-span-1 md:col-span-5 space-y-4">
            <h2 className="text-sm font-mono">ELSEWHERE</h2>
            <p className="text-sm flex items-center gap-2">
              <Image 
                src="/seek-icon.png" 
                alt="Seek" 
                width={20} 
                height={20} 
                className="inline-block" 
              />
              <Link href="https://www.seek.com.au/profile/joshua-illichmann-Tv6X5SP5wR">Josh Illichmann</Link>
            </p>
            <p className="text-sm flex items-center gap-2">
              <Image 
                src="/threads-icon.png" 
                alt="Threads" 
                width={20} 
                height={20} 
                className="inline-block" 
              />
              <Link href="https://threads.net/@studioprisoner">@studioprisoner</Link>
            </p>
            <p className="text-sm flex items-center gap-2">
              <Image 
                src="/instagram-icon.png" 
                alt="Instagram" 
                width={20} 
                height={20} 
                className="inline-block" 
              />
              <Link href="https://instagram.com/studioprisoner">@studioprisoner</Link>
            </p>
            <p className="text-sm flex items-center gap-2">
              <Image 
                src="/lastfm-icon.png" 
                alt="Last.fm" 
                width={20} 
                height={20} 
                className="inline-block" 
              />
              <Link href="https://lastfm.com/user/studioprisoner">/studioprisoner</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-sm text-gray-500 space-y-4 font-mono">
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
