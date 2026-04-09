# Sabka Sathi | Modern Software Agency Platform

**Sabka Sathi** is a premium, 3D-enhanced software agency landing page built for high conversion and brand authority. It features a custom WebGL liquid orb, real-time performance metrics, and a business-first interactive roadmap.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org)
- **3D Engine**: [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / pnpm / yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sabka-sathi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Formspree ID:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=xlgoknzw
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the site**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `/app`: Next.js App Router pages and global layouts.
- `/components`: Custom UI components organized by section.
  - `/ui`: Reusable atomic components (Button, Card, etc.).
- `/lib`: Utility functions and shared helpers.
- `/public`: Static assets (Logos, SVGs).

## 🎨 Key Features

- **Liquid Orbital Shader**: A custom Fresnel shader implemented in `LiquidOrb3D.tsx` to provide a premium glass-like 3D centerpiece.
- **Interactive Roadmap**: A logic-driven 10-step process section that adapts its grid based on screen size (Horizontal on Desktop, 2x5 Grid on Mobile).
- **Live Performance Panel**: Real-time status indicators in the Hero section to build trust via transparency.
- **Micro-interactions**: Subtle hover effects and scroll animations using Framer Motion.

## 📦 Production & Deployment

### Build

To create an optimized production build:
```bash
npm run build
```

### Deployment

The project is optimized for [Vercel](https://vercel.com) but can be hosted on any provider that supports Next.js. Ensure you set the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in your production dashboard.

---

Built with ❤️ by Sabka Sathi Team
