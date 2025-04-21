your-project/
├── index.html
├── main.css
├── tailwind.config.js
├── dist/
│   └── output.css (will be generated)

npm init -y
npm install -D tailwindcss
npx tailwindcss init

Create main.css
This file must have the Tailwind directives:

@tailwind base;
@tailwind components;
@tailwind utilities;


tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}


Run this in your terminal:

npx tailwindcss -i ./main.css -o ./dist/output.css --watch

Link output.css in HTML
Make sure your index.html has:

<link href="dist/output.css" rel="stylesheet">

Open index.html in your browser