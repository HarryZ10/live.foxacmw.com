Most of the important files for the site are in the '/src' directory.

The files are split into the '/src/js' and '/src/sass' directories. For the primary sections and components of the page, there is a .jsx file and corresponding .scss file in the '/src/js' and '/src/sass' directories, respectively. The '/src/js/projects.json' file contains most of the image paths and text to avoid clutter, and the '/src/sass/global.scss' file contains global styles and classes, such as variables for the color palette and some styles that are used more than once.

---

(One-time) Steps to run:
- `npm install
`
Steps to run after install
- npm run dev

After staging changes, make sure you build the project
- npm run build

Stage changes again and commit, then push

---
Confirm it is working locally by running
- npm run dev
