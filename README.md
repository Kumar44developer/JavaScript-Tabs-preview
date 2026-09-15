# 🧩 JavaScript Tabs Preview

An interactive, responsive tab component built with vanilla HTML, CSS, and JavaScript. The interface lets users switch between frontend framework profiles (React, Vue, Angular) with synchronized theme color transitions, dynamic icon rendering, and pulsing neon animations.

---

## Features

- **Instant Tab Switching**: Seamless transitions between tab views without reloading the page.
- **Dynamic Theme Synchronization**: Automatically syncs body background color and display accent colors to each framework's brand color (React Cyan, Vue Green, Angular Red).
- **Dynamic Icon Rendering**: Updates central display icons in real time using Font Awesome.
- **Neon Glow Animation**: Features a continuous pulsing box-shadow animation around the preview card.
- **Zero Framework Dependencies**: Pure HTML5, CSS3, and modern JavaScript (ES6+).
- **Responsive Layout**: Centered card layout with smooth CSS transitions and hover states.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic structure for card, navigation links, and display container |
| CSS3 | Grid centering, transitions, active tab styling, and neon glow keyframes |
| JavaScript (ES6) | Event listeners, DOM manipulation, and dynamic color state updates |
| Font Awesome 6 | Brand icons for React, Vue.js, and Angular |

---

## Project Structure

```
JavaScript-Tabs-preview/
├── index.html      
├── style.css        
├── index.js       
└── README.md        
```

---

## How It Works

1. **Tab Selection**: Clicking any navigation tab (`.react`, `.vue`, `.angular`) triggers an event listener.
2. **State & Color Update (`setColors`)**: The handler receives the active tab element, target background color, Font Awesome icon class, and accent color.
3. **DOM Manipulation**:
   - Updates `document.body.style.backgroundColor` with a smooth 1-second transition.
   - Injects the corresponding brand icon into `.big-icon`.
   - Clears prior active classes and applies the dedicated active class to the clicked tab.

---

## Getting Started

No build tools, package managers, or local server setups are needed.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/JavaScript-Tabs-preview.git
```

### 2. Launch the application

Open `index.html` directly in any web browser, or serve it using an extension like VS Code Live Server.

---

## Tab & Theme Reference

| Framework | Tab Selector | Brand Color | Icon Class |
| --- | --- | --- | --- |
| **React** | `.react` | `#00d8ff` | `fab fa-react` |
| **Vue.js** | `.vue` | `#42b883` | `fab fa-vuejs` |
| **Angular** | `.angular` | `#b52e31` | `fab fa-angular` |

---

## Customization

- **Add New Tabs**: Add an anchor tag inside `<nav>` in `index.html`, define its brand color and active class in `style.css`, and register an event listener in `index.js`.
- **Adjust Transition Speed**: Modify `transition: all 1s;` on the `body` selector in `style.css` to speed up or slow down color shifts.
- **Tweak Neon Glow**: Modify the `@keyframes neon-glow-animation` properties in `style.css` to alter shadow spread or color.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
