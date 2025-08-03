# 🧠 State Management Patterns in React – ALX ProDev Frontend

This monorepo contains different implementations of state management in a Next.js application, following ALX ProDev Frontend standards. Each sub-project showcases a unique pattern:

- ✅ `useState` Hook
- 🌐 Context API (`useContext`)
- 🧰 Redux Toolkit

---

## 📂 Project Overview

<details>
<summary>🧾 Directory Structure</summary>

alx-project-0x04-setup/
├── alx-project-0x04/ # State management using useState
├── alx-project-0x05/ # Global state management with Context API
├── alx-project-0x06/ # Redux Toolkit setup and integration


</details>

---

## 🧱 Technologies Used

<details>
<summary>⚙️ Stack</summary>

- React 18+
- Next.js 15+
- TypeScript
- Tailwind CSS
- Redux Toolkit (in `0x06`)
</details>

---

## 📦 Individual Project Summaries

<details>
<summary>🧮 <code>alx-project-0x04</code> – useState Hook</summary>

Uses the `useState` hook to manage a local counter state.

### 🔧 Key Features
- Functional counter app with increment/decrement buttons
- State is localized per component

📄 File: `/pages/counter-app.tsx`

</details>

---

<details>
<summary>🧭 <code>alx-project-0x05</code> – useContext API</summary>

Implements global state using React's built-in Context API.

### 🔧 Key Features
- Centralized `CountContext` for shared state
- Counter value is synced across different components (`Header`, `CounterApp`)

📄 Key File: `/context/CountContext.tsx`

</details>

---

<details>
<summary>🧰 <code>alx-project-0x06</code> – Redux Toolkit</summary>

Adds Redux for global state management with best practices.

### 🔧 Key Features
- `store/` and `slices/` setup
- Global `Provider` wrapped in `_app.tsx`
- `useSelector` and `useDispatch` integrated

📄 Key Files:
- `/store/store.ts`
- `/store/slices/counterSlice.ts`

</details>

---

## 🚀 How to Run Any Project

```bash
# Clone this repository
git clone https://github.com/Joshuakibwage/alx-project-0x04-setup.git

# Navigate into a project
cd alx-project-0x05  # or 0x04, or 0x06

# Install dependencies
npm install

# Run the app
npm run dev

🧑‍🎓 Author

Joshua Kibwage
Frontend Developer · ALX ProDev

🪪 License

This project is for educational purposes under the ALX ProDev program.
Feel free to fork and build upon it.