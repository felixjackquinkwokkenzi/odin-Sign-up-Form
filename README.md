# Tokofelix — Sign-up Form

A modern, highly responsive, and interactive sign-up page created as part of [The Odin Project](https://www.theodinproject.com/) curriculum. This project demonstrates advanced CSS layout techniques, custom SVG integration, custom input validations, and semantic markup.

## 🚀 Live Demo

[Live Demo](https://felixjackquinkwokkenzi.github.io/odin-Sign-up-Form/)

## ✨ Features

- **Split-Screen Layout:** Responsive grid system containing a branding/illustration panel on the left and a form panel on the right.
- **Custom Floating Labels:** Elegant labels that float above input fields when active or filled, complete with smooth transition animations.
- **SVG Graphic Assets:** Pure inline SVG illustrations representing a virtual window, mobile screen mockup, interactive characters, and decorative plants.
- **Robust Client-side Validation:**
  - Standard HTML5 native validations (`required`, `type="email"`, `minlength`).
  - Regex pattern matching for names (alphabetic only, length 2-30) and phone numbers (8-15 digits with optional symbols).
  - Real-time password matching logic using custom JavaScript validation (`setCustomValidity`).
- **Interactive UI/UX States:** Focus outlines, custom error displays leveraging CSS `:user-invalid`, responsive design down to mobile viewport widths, and a smooth scroll success message notification.

## 📁 File Structure

```
odin-Sign-up-Form/
│
├── index.html     # Semantic structure and inline SVG illustrations
├── style.css      # Custom CSS variables, layout grid/flexbox, animations, and form design
└── script.js      # Real-time password mismatch validation and form submission handling
```

## 🛠️ Code Breakdown

### 1. HTML (`index.html`)

- Utilizes `<main>` as a grid container separating the visual brand panel (`.left-panel`) and the interactive form area (`.form-panel`).
- Uses inline SVGs in `.illustration` to maintain crisp visual aesthetics at any scaling factor.
- Form controls include custom patterns for precise validation constraints:
  - **First & Last Name:** `pattern="[A-Za-z\s'-]{2,30}"`
  - **Phone Number:** `pattern="[0-9\s\+\-]{8,15}"`
- Employs `novalidate` on the `<form>` to suppress browser-default validation tooltips, allowing custom styled CSS errors to show.

### 2. Styling (`style.css`)

- **Theme Definition:** Utilizes CSS Custom Properties (`:root`) for color palette definitions (rich dark navy bases and vibrant green accents), radii, and typography.
- **Floating Labels:** Uses CSS sibling selectors (`+ .signup-label`) combined with placeholder trickery to shift labels upwards:
  ```css
  .field input:focus + .signup-label,
  .field input:not(:placeholder-shown) + .signup-label {
    transform: translateY(-28px);
    background: var(--green-600);
    /* Floating style properties */
  }
  ```
- **Dynamic Validation States:** Leverages `:user-invalid` pseudo-class to toggle input border colors (`--border-invalid`) and display error text (`.field__error`) only after user interaction:
  ```css
  .field input:user-invalid ~ .field__error {
    display: block;
  }
  ```

### 3. Logic (`script.js`)

- Watches for `input` events on `#password` and `#confirmPassword` to check if they match.
- Employs standard HTML5 validation API (`setCustomValidity`) to toggle the field's validity, preventing submission if passwords differ:
  ```javascript
  if (mismatch) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
  ```
- Handles the `submit` event, scrolls smoothly to the custom success message container on valid submission, or reports invalid fields using `form.reportValidity()`.

## 🎨 Theme & Typography

- **Colors:**
  - Primary Green: `#22c55e` (Hover: `#16a34a`)
  - Background Navy: `#10141c` (Cards: `#171d29`)
- **Typography:**
  - Display Font: `Baloo 2`, `Manrope`
  - Body Font: `Manrope`

## ⚙️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/felixjackquinkwokkenzi/odin-Sign-up-Form.git
   ```
2. Open `index.html` in your web browser or use a live server extension in your text editor.
