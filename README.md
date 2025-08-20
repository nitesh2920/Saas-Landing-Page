# SaaS Landing Page

This repository contains the source code for a modern, animated, and fully responsive SaaS landing page. It is built with Next.js, TypeScript, and styled with Tailwind CSS, featuring heavy use of Framer Motion for fluid animations and a dynamic user experience.

## Features

This project demonstrates a variety of modern web development techniques and features a component-based architecture.

*   **Interactive Hero Section**: Engages users with a text blur-in effect on load and draggable/animated decorative images.
*   **Dynamic Bento Grid**: A complex and interactive `BentoCard` layout showcasing features with:
*   **3D Product Showcase**: The product image animates with a 3D rotation effect as the user scrolls, controlled by `useScroll` and `useTransform` from Framer Motion.
*   **Animated FAQ Accordion**: A clean and user-friendly accordion for frequently asked questions, with smooth open/close animations.
*   **Scroll-Triggered Animations**: Elements throughout the page animate into view, creating an engaging and dynamic scrolling experience.
*   **Responsive Design**: A mobile-first approach ensures a seamless experience across all devices, including a dedicated animated mobile navigation menu.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) 15 (with App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v20 or later) and a package manager (npm, yarn, pnpm, or bun) installed on your machine.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/nitesh2920/Saas-Landing-Page.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Saas-Landing-Page
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live application. The page will auto-update as you edit the files.

## Project Structure

The project follows the standard Next.js App Router structure.

*   `app/page.tsx`: The main entry point for the landing page, assembling all the components.
*   `app/layout.tsx`: The root layout for the application.
*   `app/globals.css`: Global styles and Tailwind CSS imports.
*   `app/components/`: Contains all the reusable React components, each responsible for a specific section of the landing page.
*   `public/`: Stores static assets like images and icons.
*   `next.config.ts`: Configuration file for Next.js, including image remote patterns and custom Webpack settings for SVGs.
