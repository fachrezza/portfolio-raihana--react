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
          top-[-100px]
          left-[-100px]

          w-[350px]
          h-[350px]

          bg-blue-300/30
          blur-3xl
          rounded-full

          z-[-1]
        "
      />

      <div
        className="
          fixed
          bottom-[-100px]
          right-[-100px]

          w-[350px]
          h-[350px]

          bg-purple-300/30
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