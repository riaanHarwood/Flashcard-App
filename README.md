# Flashcard App

A modern, interactive flashcard web application built with Next.js and React. This project demonstrates frontend development skills with a focus on user experience, animations, and responsive design.

<img width="1433" height="675" alt="Screenshot 2026-04-17 at 10 36 49 PM" src="https://github.com/user-attachments/assets/89a7483e-20ad-4cd9-a78b-c6b1cf8280bf" />

<br>

🚀 Project Overview

This is a Next.js 16 React application built with TypeScript and Tailwind CSS that creates an interactive flashcard learning system. The app allows users to cycle through flashcards, flip them to reveal answers, and toggle between light/dark themes.

<br>

## Features

- **Interactive Flashcards**: Click to flip between question and answer sides
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Navigation Controls**: Previous/Next buttons to browse through cards
- **Progress Indicator**: Shows current card position and total count
- **Dark Mode**: Toggle between light and dark themes
- **Reset Functionality**: Return to the first card at any time
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Hover Interactions**: Settings menu appears on hover for better UX

## Technologies Used

### Frontend Framework
- **Next.js 16** - React framework for production
- **React 19** - UI library with modern features

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Development Tools
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **PostCSS** - CSS processing

### Languages
- **TypeScript/JavaScript** - Primary programming language
- **CSS** - Styling with Tailwind utilities

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riaanHarwood/Flashcard-App.git
cd Flashcard-App
```

2. Navigate to the flashcard directory:
```bash
cd flashcard
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
flashcard/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── flashcard/
│   │   ├── Flashcard.tsx        # Individual flashcard component
│   │   ├── FlashcardContainer.tsx # Container with controls
│   │   └── FlashcardControls.tsx  # Navigation controls
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Card.tsx              # Card wrapper component
│       └── Navbar.tsx            # Navigation bar with settings
├── data/
│   └── flashcards.ts         # Flashcard data
├── hooks/
│   └── useFlashcards.ts      # Custom hook for flashcard logic
├── lib/
│   └── utils.ts              # Utility functions
└── types/
    └── flashcard.ts          # TypeScript type definitions
```

## Usage

1. **Viewing Cards**: Cards display questions by default
2. **Flipping Cards**: Click anywhere on a card to reveal the answer
3. **Navigation**: Use the arrow buttons to move between cards
4. **Progress**: Check the progress indicator at the bottom
5. **Settings**: Hover over the gear icon (⚙️) in the top-right to access:
   - Dark mode toggle (to be updated)
   - Reset to first card

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)  
