# Optimized Portfolio — Rahul Ghadage

This package contains an optimized, responsive, modernized single-page portfolio ready for GitHub Pages.
It keeps your original images hosted on your GitHub Pages site (so no image files are included here). If you prefer the images included locally,
download the images from your repo's `assets/img/` folder and place them in `assets/img/` inside this package.

Files:
- index.html        -> main page
- css/style.css     -> custom styles
- js/main.js        -> small interactive scripts
- README.md         -> this file

How to deploy:
1. Unzip the package.
2. (Optional) Place your `assets/img/` directory into the root of this project (so `assets/img/profile-img.jpg`, `portfolio-1.jpg` etc).
3. Commit the files to a GitHub repository and enable GitHub Pages from the repository settings (use the `main` branch and root path).
4. Or directly upload to your existing repo and push.

Notes & improvements added:
- Responsive layout using Bootstrap 5.
- Purple → pink accent preserved as a gradient.
- Subtle animations (fade-in, soft shadows).
- Cleaner content structure and improved copy; contact form is demo-only (no backend).
- Uses absolute image URLs pointing to your existing GitHub Pages images (so it works immediately if those images remain public).

If you want:
- I can include local image files in the ZIP (I kept them external to avoid copying personal photos without permission).
- Convert this to a React single-file, or add a deploy GH Action to auto-deploy on push.
