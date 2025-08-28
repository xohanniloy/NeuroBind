# Overview

This is a full-stack web application for Neuro Binding, a Bangladesh-based neuro marketing focused web design and content agency. The application is being migrated from a React/Express.js stack to Next.js with TypeScript, while maintaining the exact same design and functionality. The project features separate pages for different sections (Home, About, Services, Portfolio, Contact) with dynamic animations and interactive elements throughout. The project emphasizes neuro marketing principles through its design and user experience.

## Migration Status (Next.js)
- ✓ Next.js framework installed and configured
- ✓ App router structure created (/app directory)
- ✓ TypeScript configuration updated
- ✓ Tailwind CSS globals and neural theme styles migrated
- ✓ SEO metadata implemented for all pages
- ✓ Page components created (Home, About, Services, Portfolio, Contact)
- ✓ Component architecture preserved (layout, sections, ui)
- ✓ All components copied from client/src to app directory
- ✓ Navigation and Footer components updated for Next.js
- ✓ Next.js API routes created to replace Express endpoints
- ✓ Enhanced interactive team section with dynamic features
- ⏳ Import path resolution and component integration in progress
- ⏳ Workflow configuration update to use Next.js dev server

# User Preferences

Preferred communication style: Simple, everyday language.
Site architecture: Multi-page application with separate routes for each section (Home, About, Services, Portfolio, Contact).
Animation preferences: Dynamic animations and interactive elements throughout all sections with smooth transitions and hover effects.
Home page: Include short summary of all pages content for easy navigation and overview.
Home page preference: Show all page sections directly on home page (section by section) rather than summary cards.
Home page: Include short summary of all pages content for easy navigation and overview.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom neural-themed design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for request/response validation
- **Development Setup**: In-memory storage fallback for development, configurable for production database
- **API Design**: RESTful endpoints with proper error handling and logging

## Data Storage
- **Primary Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **ORM**: Drizzle ORM with type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Fallback**: In-memory storage implementation for local development

## Authentication & Authorization
- Currently implements basic user schema structure but no active authentication system
- Contact form submissions are publicly accessible
- Admin endpoints exist for viewing contact submissions (currently unprotected)

## Design System
- **Typography**: Montserrat for headings, Inter for body text
- **Color Scheme**: Neural-themed with purple gradients, electric blue, and neon green accents
- **Components**: Comprehensive shadcn/ui component library with custom neural animations
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Animations**: Custom CSS animations for neural network effects, particle systems, and interactive elements

# External Dependencies

## Core Frameworks
- **React**: Frontend framework with TypeScript support
- **Express.js**: Backend web framework
- **Vite**: Frontend build tool and development server

## Database & ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Primitive components for accessibility and customization
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

## Form & Validation
- **React Hook Form**: Form handling with performance optimization
- **@hookform/resolvers**: Validation resolvers
- **Zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod

## Development Tools
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

## Additional Libraries
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing library
- **Class Variance Authority**: Utility for component variants
- **CLSX & Tailwind Merge**: Conditional CSS class utilities
- **Date-fns**: Date manipulation library
- **Embla Carousel**: Carousel component for testimonials section