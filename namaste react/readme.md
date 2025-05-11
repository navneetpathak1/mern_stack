## 🌟 For Developers
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

---

## 📦 Popular Bundlers for React

- **Webpack**  
  A highly configurable and powerful bundler.  
  🔹 Extensive plugin system  
  🔹 Steeper learning curve but extremely flexible.

- **Parcel**  
  Known for its *zero-config* setup and simplicity.  
  🔹 Great for small-to-medium projects  
  🔹 Quick to start without heavy setup.

- **Vite**  
  A blazing-fast modern bundler.  
  🔹 Uses native ES modules during development  
  🔹 Ultra-fast dev server and build times.

---

## 📥 Install Parcel (as a dev dependency)

```bash
npm init
npm install -D parcel
npm install react
npm install react-dom
```
## How to run
```bash
npx parcel index.html
```
---

## 🌟 Caret (`^`) vs Tilde (`~`) in `package.json`

| Symbol | Meaning |
|:------:|:--------|
| `^` | Allows updates that do not change the first non-zero version (e.g., `^1.2.3` → accepts `1.x.x` but not `2.x.x`) |
| `~` | Allows patch-level updates only (e.g., `~1.2.3` → accepts `1.2.x`, but not `1.3.x`) |

> **Tip:**  
> Use `^` for most dependencies to stay updated with minor releases.  
> Use `~` when you need tighter control over updates.

---


### HMR

```bash
Hot Module Reloading
```


### File Watcher Algorithm 
```bash
written in c++
```
It’s an algorithm that monitors files or folders for any changes like:

    - Created

    - Modified

    - Deleted

When a change happens → it triggers an action (like rebuild, reload, etc.).
(That's how Parcel, Vite, etc. detect when you save a file.)


## if you want to remove your console log =>
babel-plugin-transform-remove-console
run

```bash
npm install babel-plugin-transform-remove-console --save-dev
```
---
make .babelrc file
```bash
{
  "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
}
```
---
---

babel convert 
```bash 
https://babeljs.io/
```
```bash
const heading4 = (
  <h1 key="n"> Hello world : </h1>
)
```
==>
```bash
  const heading4 = React.createElement("h1", { key: "n" }, "Hello world");
```
