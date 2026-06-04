import { motion } from "framer-motion";
import projects from "../data/projects";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        py-32
        px-5
        relative
      "
    >

      {/* blur bg */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* title */}
        <div className="flex items-center justify-between mb-14">

          <div>

            <p className="text-blue-500 font-medium mb-3">
              Selected Works
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

        </div>

        {/* PORTFOLIO GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
          "
        >
          {projects.slice(0, 4).map((project, index) => (
            <motion.button
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                flex-col
                items-center
                text-center
                group
              "
            >
              {/* IOS FOLDER */}
              <div
                className="
                  relative
                  w-full
                  aspect-square

                  flex
                  items-center
                  justify-center
                "
              >
                {/* FOLDER BACK */}
                <div
                  className="
                    absolute
                    top-4
                    z-[1]

                    w-[92%]
                    h-[78%]

                    rounded-[28px]

                    bg-gradient-to-b
                    from-[#87ceeb]
                    to-[#34b4e7]

                    shadow-[0_20px_40px_rgba(77,141,255,0.28)]

                    transition-all
                    duration-500

                    group-hover:scale-105
                  "
                />

                {/* FOLDER TOP */}
                <div
                  className="
                    absolute
                    top-0
                    left-[12%]
                    z-0

                    w-[42%]
                    h-[18%]

                    rounded-t-[18px]
                    rounded-b-[10px]

                    bg-[#4c9bfc]
                  "
                />
              </div>

              {/* TITLE */}
              <div className="mt-3">
                <h3
                  className="
                    text-[15px]
                    md:text-base
                    font-semibold
                    text-gray-800
                    leading-snug
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                    mt-1
                  "
                >
                  {project.category}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* see all */}
        <div className="flex justify-center mt-16">

          <Link
            to="/projects"
            className="
                inline-flex
                mt-1
                bg-[#5B8DEF]
                text-white
                px-7
                py-4
                rounded-full
                transition-all
                duration-300

                hover:scale-105
                hover:bg-[#4A7DE8]
            "
            >
            See All Projects
            </Link>

        </div>

      </div>

    </section>
  );
}