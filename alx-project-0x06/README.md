# ALX Project 0x06 – Global State with Redux Toolkit 🚀

> Building on `alx-project-0x05`, this project introduces **Redux Toolkit** for global state management across unrelated components like `Header` and `CounterApp`. It demonstrates how to create a central store and synchronize UI state between routes using `useSelector` and `useDispatch`.

---

## 📌 Objective

Use Redux (via Redux Toolkit) to share state between isolated components such as:

- `/counter-app` → interactive counter
- `Header` → displays live count even when not on `/counter-app`

---

## 🔧 Technologies Used

- **React** (Next.js 15)
- **Redux Toolkit** + **React Redux**
- **TypeScript**
- **Tailwind CSS** for UI
- **Turbopack** for build performance

---

## 🗂️ Project Structure

alx-project-0x06/
├── context/ (from previous project, optional if replaced by Redux)
├── store/
│ └── store.ts # Redux store configuration
├── components/
│ ├── layouts/
│ │ └── Header.tsx # Displays current count from Redux state
│ └── common/
│ └── Button.tsx # Reusable button component
├── pages/
│ ├── index.tsx
│ └── counter-app.tsx # Counter logic using Redux
└── ...


---

## ⚙️ Setup Instructions

1. **Duplicate the previous project**

```zsh
cp -r alx-project-0x05 alx-project-0x06
cd alx-project-0x06

    Install Redux packages

npm install redux react-redux @reduxjs/toolkit
npm install --save-dev @types/react-redux

    Run the dev server

npm run dev
# or
yarn dev

---

#✅ What You Learn
Concept	Benefit
useSelector	Read values from the global state
useDispatch	Trigger actions to update state
Redux Toolkit slice	Define reducers + actions in one file
Provider pattern	Makes global state available to the entire app
Tailwind integration	Build elegant UIs quickly
🧪 Bonus Ideas

    Add a Reset button to set count to 0.

    Persist the counter using localStorage.

    Add dark mode toggle with Redux state.

👨‍💻 Author

Joshua Kibwage – @joshua-kibwage
Part of the ALX ProDev Frontend Engineering Program
🏁 License

This project is for educational use under the ALX SE curriculum.


---

Happy coding, Joshua!