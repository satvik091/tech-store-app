# TechStore - Modern E-Commerce Application

A professional e-commerce web application built with React, TypeScript, and Tailwind CSS, showcasing modern front-end development skills and best practices.

## 🚀 Features

### Core E-Commerce Functionality
- **Product Listing Page** with advanced filtering, sorting, and search
- **Product Detail Pages** with image galleries and comprehensive product information
- **Shopping Cart** with localStorage persistence
- **Responsive Design** optimized for all devices
- **Performance Optimized** with lazy loading and efficient state management

### Advanced Features
- **Real-time Search** with instant filtering
- **Multi-criteria Filtering** (category, price range, brand, stock status)
- **Advanced Sorting** (price, rating, popularity, newest)
- **Image Gallery** with zoom functionality and navigation
- **Wishlist** functionality with local storage
- **SEO Optimized** with proper meta tags and semantic HTML
- **Accessibility** features following WCAG guidelines

### Technical Highlights
- **Modern React** with hooks and functional components
- **TypeScript** for type safety and better development experience  
- **Custom Design System** with semantic color tokens and consistent styling
- **Performance Optimization** with lazy loading and efficient re-renders
- **Local Storage** integration for cart and user preferences
- **Cross-browser Compatibility** tested across major browsers

## 🛠 Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Design System** - Consistent theming with semantic tokens
- **Shadcn/ui Components** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons

### State Management & Routing
- **React Router DOM** - Client-side routing
- **Custom Hooks** - Reusable state logic (useCart, etc.)
- **LocalStorage Integration** - Persistent cart and preferences

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Lovable** - AI-assisted development platform

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── ProductCard.tsx # Product display component
│   ├── SearchBar.tsx   # Search functionality
│   ├── FilterSidebar.tsx # Advanced filtering
│   └── ImageGallery.tsx # Product image gallery
├── pages/              # Page components
│   ├── ProductListingPage.tsx # Main shopping page
│   ├── ProductDetailPage.tsx  # Individual product page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
│   ├── useCart.ts      # Shopping cart logic
│   └── use-mobile.tsx  # Mobile detection
├── types/              # TypeScript definitions
│   └── product.ts      # Product and cart interfaces
├── data/               # Mock data and constants
│   └── products.ts     # Product catalog
└── lib/                # Utility functions
    └── utils.ts        # Common utilities
```

## 🎨 Design System

The application features a comprehensive design system with:

- **Semantic Color Tokens** - Consistent theming across light/dark modes
- **Typography Scale** - Harmonious font sizes and weights
- **Spacing System** - Consistent margins and padding
- **Component Variants** - Reusable component styles
- **Animation Library** - Smooth transitions and micro-interactions

### Color Palette
- **Primary** - Professional blue (`hsl(220, 70%, 50%)`)
- **Accent** - Vibrant purple (`hsl(280, 70%, 55%)`)
- **Surface** - Clean backgrounds with subtle elevation
- **Semantic Colors** - Success, warning, and error states

## 📱 Responsive Design

- **Mobile-First Approach** - Optimized for mobile devices
- **Breakpoint System** - Consistent responsive behavior
- **Touch-Friendly** - Appropriate touch targets and gestures
- **Performance** - Optimized images and lazy loading

## ⚡ Performance Features

### Optimization Techniques
- **Lazy Loading** - Images load only when needed
- **Code Splitting** - Optimized bundle sizes
- **Memoization** - Efficient re-rendering with useMemo/useCallback
- **LocalStorage** - Client-side persistence reduces server requests

### Performance Metrics
- **Fast Loading** - Optimized asset delivery
- **Smooth Interactions** - 60fps animations and transitions
- **Efficient State Management** - Minimal unnecessary re-renders
- **SEO Friendly** - Server-side rendering ready structure

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd techstore

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🧪 Testing the Application

### Key Features to Test
1. **Search Functionality** - Try searching for "wireless", "camera", etc.
2. **Filtering** - Use category, price, and brand filters
3. **Sorting** - Test different sorting options
4. **Product Details** - Click on products to view details
5. **Shopping Cart** - Add/remove items, persist across sessions
6. **Responsive Design** - Test on different screen sizes
7. **Image Gallery** - Navigate through product images
8. **404 Handling** - Visit non-existent URLs

### Sample Test Data
The application includes 6 sample products across different categories:
- Electronics (headphones, smartwatch, keyboard)
- Photography (camera lens)
- Furniture (office chair)
- Accessories (wireless charger)

## 🚀 Deployment

The application is deployment-ready for:
- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **GitHub Pages** - Free static hosting
- **Any Static Host** - Standard HTML/CSS/JS output

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the production-ready application.

## 📊 Browser Support

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅
- **Mobile Browsers** ✅

## 🎯 Learning Objectives Demonstrated

This project showcases key front-end developer skills:

### Technical Skills
- **React Development** - Modern patterns and best practices
- **TypeScript** - Type safety and developer experience
- **State Management** - Custom hooks and local storage
- **Performance** - Optimization techniques and lazy loading
- **Responsive Design** - Mobile-first development
- **Accessibility** - WCAG guidelines and semantic HTML

### Professional Skills
- **Code Organization** - Clean architecture and component design
- **Design Systems** - Consistent styling and theming
- **User Experience** - Intuitive navigation and interactions
- **SEO** - Proper meta tags and semantic structure
- **Testing Mindset** - Edge cases and error handling

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a portfolio project demonstrating e-commerce development skills. Feel free to fork and modify for your own learning purposes.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
