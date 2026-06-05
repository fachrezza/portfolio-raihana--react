import { Routes, Route } from "react-router-dom";

/* pages */
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <main className="relative overflow-hidden">

      {/* floating blur background */}
      <div
        className="
          fixed
          top-[-40px]
          left-[-30px]
          -rotate-45

          w-[450px]
          h-[650px]

          bg-blue-500/30
          blur-3xl
          rounded-full

          z-[-1]
        "
      />

      <div
        className="
          fixed
          bottom-[-30px]
          right-[-150px]
          -rotate-30

          w-[450px]
          h-[650px]

          bg-red-400/30
          blur-3xl
          rounded-full

          z-[-1]
        "
      />

      {/* routes */}
      <Routes>

        {/* homepage */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* projects page */}
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

      </Routes>

    </main>
  );
}