# Personal Portfolio

A polished, modern personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Next.js App Router**: Clean, server-rendered React components.
- **Tailwind CSS**: Modern utility-first styling with a custom dark theme.
- **Framer Motion**: Smooth, performant scroll animations and hover effects.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop views.
- **Accessible**: Semantic HTML, visible focus states, and reduced-motion support.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing the Portfolio

This portfolio is designed to be easily updated without digging deep into the component code.

### 1. Update Content (Config)
Open `src/data/config.ts`. Here you can update:
- Your name, headline, and about section.
- Social media links (GitHub, LinkedIn, Instagram, Email).
- Your skills list (Frontend, Backend, Tools).
- Your projects.

### 2. Replace Images
Image placeholders are used by default. To replace them:
1. Add your professional headshot to the `public/` folder and name it `placeholder-profile.webp` (or change the filename in `src/components/sections/Hero.tsx`).
2. Add screenshots of your projects to the `public/` folder.
3. Update the `image` path for each project in `src/data/config.ts` (e.g., `image: "/my-project-screenshot.webp"`).

### 3. Add a New Project
1. Open `src/data/config.ts`.
2. Locate the `projects` array.
3. Add a new object following the existing structure:
   ```typescript
   {
     id: "new-project-id",
     title: "Project Title",
     description: "A short description of what you built and why.",
     image: "/new-project-image.webp",
     tech: ["React", "Tailwind CSS"],
     liveDemo: "https://example.com",
     github: "https://github.com/yourusername/repo",
   }
   ```
4. The new project will automatically appear in the Projects section.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Log in to Vercel and select "Add New Project".
3. Import your GitHub repository.
4. Click "Deploy". Vercel will automatically detect that it's a Next.js project and configure the build settings.
