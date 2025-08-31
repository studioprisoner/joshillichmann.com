# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 portfolio website built with the App Router architecture. The site showcases Josh Illichmann's product design work and professional background.

### Key Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom Tailwind styling
- **Animations**: Framer Motion for page transitions and interactions
- **Typography**: Inter font from next/font
- **Analytics**: Vercel Analytics
- **Development**: Turbopack for fast development builds

### Project Structure

- `app/` - Next.js app router pages and layouts
  - `page.tsx` - Main portfolio page with profile, projects carousel, testimonials
  - `layout.tsx` - Root layout with metadata and analytics
  - `globals.css` - Global styles and CSS variables
- `components/ui/` - Reusable UI components following shadcn/ui patterns
  - `button.tsx` - Button component with variants using class-variance-authority
  - `carousel.tsx` - Project showcase carousel using embla-carousel-react
- `lib/utils.ts` - Utility functions (likely includes cn utility for className merging)
- `public/` - Static assets including project mockups, icons, and images

### Design System

The site uses a custom design system built on Tailwind CSS:
- CSS custom properties for theming (defined in globals.css)
- Consistent spacing and typography using Tailwind utilities
- Monospace font for labels and headings
- Custom color palette with semantic naming

### Content Architecture

The main page contains several key sections:
1. **Profile Section** - Introduction with availability status and contact info
2. **Work History** - Previous and current roles with company icons
3. **Projects Carousel** - Showcases portfolio work with descriptions
4. **Testimonials** - Auto-rotating client feedback with progress indicators
5. **Bio Section** - Detailed background and external links
6. **Footer** - Copyright and minimal branding

### Component Patterns

- Uses client-side components (`"use client"`) for interactive elements
- Framer Motion for staggered animations and transitions
- Image optimization with Next.js Image component
- Responsive design with mobile-first approach
- Semantic HTML structure with proper accessibility considerations

### Styling Conventions

- Tailwind utility classes for styling
- Responsive breakpoints: sm, md, lg
- Custom color system using CSS custom properties
- Font variations: Inter (body), monospace (headings/labels)
- Consistent spacing scale using Tailwind's spacing system