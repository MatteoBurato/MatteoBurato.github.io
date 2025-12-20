# mburato.github.io

My personal academic portfolio website hosted on GitHub Pages.

## Local Development

To run the website locally, use Python's built-in HTTP server:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Project Structure

```
mburato.github.io/
├── index.html          # Main entry point - contains layout, navigation, and page sections
├── publications.html   # Published research papers (lazy-loaded content fragment)
├── dissertation.html   # Academic background and affiliations (lazy-loaded content fragment)
├── wip.html            # Work-in-progress research projects (lazy-loaded content fragment)
├── style.css           # Complete stylesheet with responsive design
├── script.js           # Navigation, content loading, and interactions
├── profile.jpg         # Profile picture
└── cv.pdf              # Downloadable CV
```

## Architecture

This is a **static single-page application (SPA)** with lazy-loaded content:

- **Pure HTML/CSS/JavaScript** - No build process or framework required
- **Client-side routing** - JavaScript handles page switching without page reloads
- **Lazy loading** - Content fragments (`publications.html`, `dissertation.html`, `wip.html`) are fetched on-demand via AJAX
- **GitHub Pages compatible** - Deploys automatically from the master branch

## Key Files

### index.html
The main HTML file containing:
- Page head with meta tags, Google Analytics, and external dependencies
- Navigation bar with 4 main sections: Home, Experience, Papers, CV
- Content sections that are shown/hidden based on navigation
- Footer with social links

### Content Fragments
These files are loaded dynamically when their respective sections are accessed:
- `publications.html` - Published research papers with expandable abstracts
- `dissertation.html` - Education, affiliations, and dissertation chapters
- `wip.html` - Ongoing research projects

### style.css
Organized stylesheet including:
- CSS custom properties for consistent theming
- Responsive breakpoints at 768px and 480px
- Card components with hover effects
- Foldable/expandable content animations

### script.js
JavaScript functionality:
- Page navigation and active state management
- Dynamic content loading with caching
- Sub-navigation for research section (Publications vs Work in Progress)
- Unfold/fold toggle for expandable content
- tsParticles background animation configuration

## External Dependencies (via CDN)

- **Font Awesome 6.2.0** - Icons
- **tsParticles 2.12.0** - Animated particle background
- **Google Fonts** - Montserrat and Lato typefaces

## Content

- **Bio/About**: `#home` section in `index.html`
- **Publications**: `publications.html`
- **Work in Progress**: `wip.html`
- **Experience/Affiliations**: `dissertation.html`
- **CV**: `cv.pdf`
