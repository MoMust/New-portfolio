# Copilot Instructions for Portfolio Repository

## Build & Test Commands

```bash
# Start development server (http://localhost:3000)
npm start

# Production build
npm run build

# Run tests in watch mode
npm test -- --watch

# Run single test file
npm test -- ContactForm.jsx --watchAll=false

# Eject (one-way operation - not recommended)
npm run eject
```

**Note:** No linting is configured beyond the default ESLint in react-scripts. Lint errors are minimal and automatically handled during build.

## Architecture

This is a **single-page React portfolio** using **react-scroll for navigation** (not react-router). All sections are mounted together in App.js and users scroll to different sections.

```
src/
├── App.js              (main entry point, renders all sections)
├── Components/         (feature-based component structure)
│   ├── NavV2/         (current navigation - smooth scroll)
│   ├── Home/          (hero/intro section with skills grid)
│   ├── About/         (about section)
│   ├── MyProjects/    (project gallery with ImageModal)
│   └── Contact/       (contact form with EmailJS integration)
├── Css/               (global CSS files)
└── Images/            (static images)
```

### Key Flow

1. **App.js** → renders Nav + 4 main sections vertically
2. **NavV2/Nav.jsx** → uses `react-scroll` Link components with smooth scrolling to section IDs (home, about, myWork, contact)
3. **Each section** → self-contained component with co-located CSS

### Navigation System

- Uses `react-scroll` library, NOT client-side routing
- Navigation targets IDs in sections: `id="home"`, `id="about"`, `id="myWork"`, `id="contact"`
- NavV2 is the current nav component (Nav.js is legacy, commented out in App.js)
- Smooth scroll configured with duration/offset props in navItems array

## Key Conventions

### Component Structure

- **Naming:** Features get folders (Home/, About/, Contact/), components use PascalCase (ContactForm.jsx)
- **CSS Placement:** Each component has a co-located CSS file in the same folder (e.g., Home.jsx + Home.css)
- **Data Patterns:** Static data (like SKILLOBJECTS, navItems) defined inside components as const objects, passed as props to sub-components

### State Management

- Uses React's built-in `useState` hook for local form state (ContactForm, Input components)
- No Redux despite it being in dependencies—ignore it
- EmailJS integration for sending contact forms (service/template IDs configured in ContactForm.jsx)

### Styling

- **Bootstrap 5** via react-bootstrap for layout/components (Modal, Button, etc.)
- **Material-UI v5** for icons (@mui/icons-material, @mui/material)
- **Custom CSS** for portfolio-specific styling (stored in Css/ and co-located component files)
- Some emotion/styled-components in dependencies but not actively used

### Common Patterns

1. **Form Inputs:** Custom Input.jsx and TextInput.jsx components wrap controlled inputs with validation
2. **Modals:** React-bootstrap Modal for success/error messages (ContactForm example)
3. **Icon Display:** Pass icon component as prop (e.g., Skill component receives `icon={<DeveloperBoardIcon />}`)
4. **Map & Render:** Data arrays mapped to JSX in components (skills list, nav items)

### Known Inconsistencies

- `navItems` has typo: `lable` (not `label`)—preserve this if refactoring
- NavV2 is active, Nav.js is legacy but not deleted
- Contact form validation has confusing logic (formValid flag semantics are inverted in some cases)

## Development Tips

- Sections are loaded together; performance impacts affect entire page
- Component styling is isolated per-feature (safer for modifications)
- Test with `npm test` and target specific component files
- Smooth scroll offset/duration values can be tuned in NavV2 navItems config
