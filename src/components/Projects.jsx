import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Play,
  ArrowRight,
} from "lucide-react";

import projects from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const categories = [
    "All",
    "Graphic Design",
    "Videography",
    "Photography",
    "Brand Identity",
    "Managed Account",
    
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes(activeCategory)
          : project.category === activeCategory
        );

  return (
    <section
      className="
        min-h-screen
        py-32
        px-5
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-blue-200/30
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-10
          w-72
          h-72
          bg-purple-200/30
          blur-3xl
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20"
        >
          <p className="text-blue-500 font-medium mb-4">
            Portfolio Collection
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            All Projects
          </h1>

          <p
            className="
              text-gray-600
              text-lg
              mt-6
              max-w-2xl
              leading-8
            "
          >
            Selected creative works, digital campaigns,
            visual branding, and modern experiences
            crafted with storytelling and strategy.
          </p>
        </motion.div>

        {/* FILTER */}
        <div
          className="
            flex
            flex-wrap
            gap-4
            mb-14
          "
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                px-5
                py-3
                rounded-full
                border
                transition-all
                duration-300

                ${
                  activeCategory === category
                    ? "bg-[#5B8DEF] text-white border-[#5B8DEF]"
                    : "bg-white/60 border-white/40 hover:bg-[#EEF4FF]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        
        
        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            xl:grid-cols-5
            gap-8
          "
        >
          {filteredProjects.map((project, index) => (
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
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                setSelectedProject(project)
              }
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


      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/30
              backdrop-blur-xl
              z-50
              flex
              items-center
              justify-center
              p-5
            "
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                w-full
                max-w-7xl
                max-h-[90vh]
                overflow-hidden
                rounded-[32px]
                border
                border-white/30
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(0,0,0,0.18)]
              "
            >
              {/* TOPBAR */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  border-b
                  border-white/30
                  bg-white/40
                "
              >
                <button
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="
                    w-3.5
                    h-3.5
                    rounded-full
                    bg-red-500
                  "
                />

                <div
                  className="
                    w-3.5
                    h-3.5
                    rounded-full
                    bg-yellow-400
                  "
                />

                <div
                  className="
                    w-3.5
                    h-3.5
                    rounded-full
                    bg-green-500
                  "
                />

                <p
                  className="
                    ml-4
                    text-sm
                    text-gray-500
                    font-medium
                  "
                >
                  {selectedProject.title}
                </p>
              </div>

              {/* BODY */}
              <div
                className="
                  p-8
                  overflow-y-auto
                  max-h-[80vh]
                "
              >
                {/* ====================================== */}
                {/* VIDEOGRAPHY PROJECTS STYLE */}
                {/* ====================================== */}

                {selectedProject.category ===
                  "Videography" &&
                selectedProject.title ===
                  "Videography Projects" ? (
                  <div>
                    {/* HEADER */}
                    <div className="mb-14">
                      <p className="text-[#5B8DEF] font-medium mb-3">
                        Featured Videos
                      </p>

                      <h2
                        className="
                          text-5xl
                          md:text-7xl
                          font-bold
                          text-[#3556D8]
                          leading-tight
                        "
                      >
                        {selectedProject.title}
                      </h2>

                      <div
                        className="
                          w-24
                          h-[2px]
                          bg-gray-300
                          my-6
                        "
                      />

                      <p
                        className="
                          text-gray-600
                          text-lg
                          leading-8
                          max-w-3xl
                        "
                      >
                        {selectedProject.description}
                      </p>
                    </div>
                    {/* VIDEO GRID */}
                    <div
                      className="
                        grid
                        md:grid-cols-2
                        gap-12
                      "
                    >
                      {selectedProject.gallery?.map(
                        (item, i) => (
                          <div key={i}>
                            {/* LABEL */}
                            <div
                              className="
                                inline-flex
                                px-7
                                py-3
                                rounded-full
                                border
                                border-gray-300
                                bg-white
                                text-[#3556D8]
                                text-lg
                                font-medium
                                mb-5
                                shadow-sm
                              "
                            >
                              {item.title}
                            </div>

                            {/* CARD */}
                            <div
                              className="
                                relative
                                overflow-hidden
                                rounded-[40px]
                                border-[4px]
                                border-black
                                shadow-2xl
                                bg-black
                                group
                              "
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="
                                  w-full
                                  h-[320px]
                                  object-cover
                                  rounded-[32px]
                                  transition-all
                                  duration-500
                                  group-hover:scale-105
                                "
                              />

                              <div
                                className="
                                  absolute
                                  inset-0
                                  flex
                                  items-center
                                  justify-center
                                "
                              >
                                <div
                                  className="
                                    w-24
                                    h-24
                                    rounded-full
                                    bg-white/90
                                    flex
                                    items-center
                                    justify-center
                                    shadow-xl
                                  "
                                >
                                  <Play
                                    size={40}
                                    fill="#3556D8"
                                    color="#3556D8"
                                    className="ml-1"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* BUTTON */}
                            <a
                              href={item.video}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                mt-8
                                flex
                                items-center
                                justify-center
                                gap-4
                                w-[320px]
                                max-w-full
                                py-5
                                rounded-full
                                border
                                border-[#3556D8]
                                text-[#3556D8]
                                font-semibold
                                text-xl
                                bg-white
                                shadow-md
                                hover:bg-[#3556D8]
                                hover:text-white
                                transition-all
                                duration-300
                              "
                            >
                              <Play size={22} />
                              Watch Now
                              <ArrowRight size={22} />
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : selectedProject.category ===
                  "Videography" ? (
                /* ====================================== */
                /* REELS STYLE */
                /* ====================================== */

                <div>
                  {/* HEADER */}
                  <div className="mb-12">
                    <p
                      className="
                        text-[#5B8DEF]
                        font-semibold
                        mb-3
                      "
                    >
                      Featured Reels
                    </p>

                    <h2
                      className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#3556D8]
                        leading-tight
                      "
                    >
                      {selectedProject.title}
                    </h2>

                    <div
                      className="
                        w-24
                        h-[2px]
                        bg-gray-300
                        my-5
                      "
                    />

                    <p
                      className="
                        text-gray-600
                        text-lg
                        leading-8
                        max-w-3xl
                      "
                    >
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* REELS */}
                  <div
                    className="
                      flex
                      gap-5
                      overflow-x-auto
                      pb-4
                    "
                  >
                    {selectedProject.gallery?.map(
                      (item, i) => (
                        <div
                          key={i}
                          className="
                            min-w-[220px]
                          "
                        >
                          {/* CARD */}
                          <div
                            className="
                              relative
                              overflow-hidden
                              rounded-[28px]
                              border
                              border-white/30
                              bg-white/40
                              shadow-lg
                              group
                            "
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="
                                w-full
                                h-[420px]
                                object-cover
                                transition-all
                                duration-500
                                group-hover:scale-105
                              "
                            />

                            {/* PLAY */}
                            <div
                              className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <div
                                className="
                                  w-16
                                  h-16
                                  rounded-full
                                  bg-white/80
                                  flex
                                  items-center
                                  justify-center
                                "
                              >
                                <Play
                                  size={28}
                                  fill="#3556D8"
                                  color="#3556D8"
                                  className="ml-1"
                                />
                              </div>
                            </div>
                          </div>

                          {/* BUTTON */}
                          <a
                            href={item.video}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              mt-5
                              w-full
                              bg-white
                              border
                              border-gray-200
                              py-4
                              rounded-full
                              font-semibold
                              text-[#3556D8]
                              shadow-md
                              flex
                              items-center
                              justify-center
                              gap-2
                              hover:bg-[#3556D8]
                              hover:text-white
                              transition-all
                              duration-300
                            "
                          >
                            <Play size={18} />
                            Watch Now
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
                ) : selectedProject.category ===
                  "Photography" ? (
                  /* ====================================== */
                  /* PHOTOGRAPHY STYLE */
                  /* ====================================== */

                  <div>
                    {/* HEADER */}
                    <div
                      className="
                        grid
                        md:grid-cols-2
                        gap-8
                        items-start
                        mb-10
                      "
                    >
                      <h2
                        className="
                          text-5xl
                          md:text-6xl
                          font-bold
                          leading-tight
                          text-[#3556D8]
                        "
                      >
                        {selectedProject.title}
                      </h2>

                      <p
                        className="
                          text-gray-600
                          text-lg
                          leading-8
                          border-l
                          border-gray-300
                          pl-6
                        "
                      >
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* PHOTO GRID */}
                    <div
                      className="
                            grid
                            grid-cols-1
                            md:grid-cols-3
                            gap-3
                      "
                    >
                      {selectedProject.gallery?.map(
                        (img, i) => (
                          <div
                            key={i}
                            className={`
                              overflow-hidden
                              
                            `}
                          >
                            <img
                              src={img}
                              alt="photo"
                              className="
                                w-full
                                h-[280px]
                                object-contain
                              "
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  /* ====================================== */
                  /* DEFAULT GALLERY */
                  /* ====================================== */

                  <div>
                    {/* HEADER */}
                    <div className="mb-10">
                      <h2
                        className="
                          text-4xl
                          md:text-5xl
                          font-bold
                          text-[#3556D8]
                          leading-tight
                          mb-5
                        "
                      >
                        {selectedProject.title}
                      </h2>

                      <p
                        className="
                          text-gray-600
                          text-lg
                          leading-8
                          max-w-3xl
                        "
                      >
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* GALLERY */}
                    <div
                        className={`
                        grid
                        gap-6
                        place-items-center
                        md:grid-cols-4
                        
                      `}
                    >
                      {selectedProject.gallery?.map((img, i) => (
                      <div
                        key={i}
                        className="
                          overflow-hidden
                          
                        "
                      >
                            <img
                              src={img}
                              alt="project"
                              className="
                                max-w-[300px]
                                max-h-[650px]
                                object-contain
                              "
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}