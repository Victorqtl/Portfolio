# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `pnpm run build` - Build production version
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

### Package Management
- Uses `pnpm` as the primary package manager (pnpm-lock.yaml present)
- `npm` commands still work but prefer `pnpm` when available

## Architecture

### Framework & Setup
- **Next.js 15.4.5** with App Router architecture
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** components (configured in components.json)

### Key Technologies
- **Theming**: next-themes with system/light/dark mode support
- **Icons**: Lucide React
- **Fonts**: Poppins and Lora via next/font/google
- **Styling**: Tailwind with class-variance-authority for component styling

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
  - `ui/` - shadcn/ui components
  - `theme-provider.tsx` - Theme context wrapper
  - `sidebar.tsx` - Main sidebar component
- `src/lib/` - Utility functions (includes cn utility for clsx/tailwind-merge)
- `src/assets/` - Static assets

### Key Features
- Custom theme toggle component with animated switch UI
- French language support (lang='fr' in layout)
- System preference detection for themes
- Path aliases configured (@/* maps to ./src/*)

### Component Patterns
- Uses 'use client' directive for client-side components
- Follows shadcn/ui component patterns with forwardRef and variants
- Theme-aware styling with conditional classes based on resolved theme
- Accessibility features (role, tabIndex, ARIA attributes)

### Development Notes
- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Uses CSS variables for theming consistency
- Custom fonts loaded with fallbacks and CSS variables