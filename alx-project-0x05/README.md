# ALX Project 0x05 – Global State with Context API

> A continuation of `alx-project-0x04`, this project implements **React Context API** to manage a global counter state shared across multiple components such as `Header` and `CounterApp`.

---

## 📌 Objective

Enable shared state (a counter) between unrelated components using `useContext` instead of prop drilling.

### Example Behavior

- Clicking the counter button in `/counter-app` updates the count.
- The updated count is also reflected live in the `Header` component.

---

## 🧠 What We Used

- ✅ React `useContext` + `useState`
- ✅ TypeScript support
- ✅ Project routing via Next.js (or React Router if you're using CRA)
- ✅ File-based Context API structure for easy scalability

---

## 🗂️ Project Structure

alx-project-0x05/
├── context/
│ └── CountContext.tsx # Context API logic
├── components/
│ ├── Header.tsx # Consumes the counter context
│ └── CounterApp.tsx # Updates the counter
├── pages/
│ ├── index.tsx
│ └── counter-app.tsx # Routed CounterApp component
├── ...


---

## 🔧 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Joshuakibwage/alx-project-0x05.git
cd alx-project-0x05

    Install dependencies

npm install
# or
yarn

    Run the development server

npm run dev
# or
yarn dev

    Visit:

        / – Homepage with Header

        /counter-app – Counter with interactive updates