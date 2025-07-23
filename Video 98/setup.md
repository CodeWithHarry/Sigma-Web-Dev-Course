## How to setup Tailwind CSS

> **Note:** These instructions have been updated for Tailwind CSS v4 (2024). If you are following the original course (which used v3), see the legacy instructions below. This update was made because I was following the course and hit issues due to outdated steps, so I am submitting this fix to help future learners!

---

### 🟢 **Tailwind CSS v4 (Recommended, 2024)**

**Step 1:** Install Tailwind CSS CLI, PostCSS, and Autoprefixer:

```
npm install -D tailwindcss@latest tailwindcss/cli postcss autoprefixer
```

**Step 2:** Create an `input.css` file in your project root (not in `src/`):

```
@import "tailwindcss";
```

**Step 3:** Add this build script to your `package.json`:

```
"build": "npx tailwindcss -i ./input.css -o ./output.css --watch"
```

**Step 4:** Run the build script:

```
npm run build
```

**Step 5:** Link the generated `output.css` in your HTML (in the root, not in `src/`):

```html
<link rel="stylesheet" href="output.css">
```

---

### 🟡 **Legacy Tailwind CSS v3 Setup (as in the original course)**

Step 1: Run the following commands

``` 
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```

Step 3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

---

**If you are starting fresh, use the v4 method above for a simpler and more up-to-date experience!**