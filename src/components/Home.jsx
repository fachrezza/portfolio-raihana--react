import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Play,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        py-24
        relative
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND BLUR ================= */}
      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-blue-200/40
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
          bg-cyan-200/40
          blur-3xl
          rounded-full
        "
      />

      {/* ================= WRAPPER ================= */}
      <div className="relative max-w-7xl w-full z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            glass
            rounded-[45px]
            p-8
            md:p-14
            border
            border-white/40
            shadow-[0_20px_60px_rgba(91,141,239,0.12)]
            overflow-hidden
            relative
          "
        >
          {/* ================= DECORATION ================= */}
          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[320px]
              h-[320px]
              rounded-full
              bg-gradient-to-br
              from-[#5B8DEF]/20
              to-cyan-200/20
              blur-3xl
            "
          />

          {/* ================= MAIN GRID ================= */}
          <div
            className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]
              gap-16
              items-center
              relative
              z-10
            "
          >
            {/* ================= LEFT CONTENT ================= */}
            <div>
              {/* SMALL TEXT */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/70
                  border
                  border-white/40
                  rounded-full
                  px-5
                  py-2
                  mb-8
                "
              >
                <Sparkles
                  size={16}
                  className="text-[#5B8DEF]"
                />

                <p className="text-sm text-gray-600">
                  Creative Portfolio 2026
                </p>
              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
                className="
                  text-5xl
                  md:text-7xl
                  font-bold
                  leading-[1.05]
                "
              >
                Raihana
                <br />

                <span className="text-[#5B8DEF]">
                  Suci Amalia
                </span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                className="
                  text-gray-600
                  text-lg
                  md:text-xl
                  leading-9
                  mt-8
                  max-w-2xl
                "
              >
                Creative storyteller focused on visual
                branding, videography, social media
                content, and digital experiences for
                modern audiences and impactful campaigns.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                }}
                className="
                  flex
                  flex-wrap
                  gap-4
                  mt-10
                "
              >
                {/* CV */}
                <a
                  href="/resume.pdf"
                  download
                  className="
                    bg-[#5B8DEF]
                    text-white
                    px-7
                    py-4
                    rounded-full
                    flex
                    items-center
                    gap-3
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#4A7DE8]
                    hover:shadow-[0_10px_30px_rgba(91,141,239,0.35)]
                  "
                >
                  Download CV

                  <ArrowRight size={18} />
                </a>

                {/* PROJECT */}
                <Link
                  to="/projects"
                  className="
                    bg-white/70
                    border
                    border-white/40
                    px-7
                    py-4
                    rounded-full
                    flex
                    items-center
                    gap-3
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#EEF4FF]
                  "
                >
                  View Projects

                  <Play size={18} />
                </Link>
              </motion.div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
                relative
                flex
                justify-center
              "
            >
              {/* MAIN CARD */}
              <div
                className="
                  relative
                  w-full
                  max-w-[420px]
                  rounded-[40px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-2xl
                  p-7
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* TOP */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-8
                  "
                >
                  <div>
                    <p className="text-gray-500 text-sm">
                      Creative Focus
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        mt-1
                      "
                    >
                      Digital Creator
                    </h3>
                  </div>

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#5B8DEF]
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Briefcase size={24} />
                  </div>
                </div>

                {/* BIG NUMBER */}
                <div className="mb-8">
                  <h1
                    className="
                      text-6xl
                      font-bold
                      text-[#3556D8]
                    "
                  >
                    20+
                  </h1>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >
                    Creative projects and visual campaigns
                  </p>
                </div>

                {/* MINI CARDS */}
                <div className="space-y-4">
                  {/* CARD */}
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      bg-white/70
                      rounded-2xl
                      px-5
                      py-4
                      border
                      border-white/40
                    "
                  >
                    <div>
                      <p className="text-gray-400 text-sm">
                        Content
                      </p>

                      <h4 className="font-semibold">
                        Social Media
                      </h4>
                    </div>

                    <span
                      className="
                        text-[#5B8DEF]
                        font-semibold
                      "
                    >
                      
                    </span>
                  </motion.div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      bg-white/70
                      rounded-2xl
                      px-5
                      py-4
                      border
                      border-white/40
                    "
                  >
                    <div>
                      <p className="text-gray-400 text-sm">
                        Visual
                      </p>

                      <h4 className="font-semibold">
                        Videography
                      </h4>
                    </div>


                  </motion.div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      bg-white/70
                      rounded-2xl
                      px-5
                      py-4
                      border
                      border-white/40
                    "
                  >
                    <div>
                      <p className="text-gray-400 text-sm">
                        Branding
                      </p>

                      <h4 className="font-semibold">
                        Graphic Design
                      </h4>
                    </div>

 
                  </motion.div>
                </div>
              </div>

             
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}