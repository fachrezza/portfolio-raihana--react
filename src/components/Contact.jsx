import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        py-32
        px-5
        relative
        overflow-hidden
      "
    >

      {/* background blur */}
      <div
        className="
          absolute
          top-10
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

          bg-cyan-200/30
          blur-3xl
          rounded-full
        "
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mb-16"
        >

          <p className="text-blue-500 font-medium mb-4">
            Contact Me
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl

              font-bold

              leading-tight
              mb-6
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              text-gray-600
              text-lg

              max-w-2xl
              mx-auto

              leading-8
            "
          >
            Open for collaborations, creative projects,
            digital branding, and modern visual experiences.
          </p>

        </motion.div>

        {/* main container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="
            glass

            rounded-[45px]

            p-10
            md:p-14

            border
            border-white/40
          "
        >

          {/* top info */}
          <div
            className="
              grid
              md:grid-cols-2

              gap-6
            "
          >

            {/* email */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}

              className="
                bg-white/50

                border
                border-white/40

                rounded-[30px]

                p-6

                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4 mb-4">

                <div
                  className="
                    w-14
                    h-14

                    rounded-full

                    bg-[#EEF4FF]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail className="text-[#5B8DEF]" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h3 className="font-semibold text-lg">
                    Ahnhanna08@gmail.com
                  </h3>
                </div>

              </div>

            </motion.div>

            {/* phone */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}

              className="
                bg-white/50

                border
                border-white/40

                rounded-[30px]

                p-6

                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4 mb-4">

                <div
                  className="
                    w-14
                    h-14

                    rounded-full

                    bg-[#EEF4FF]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone className="text-[#5B8DEF]" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Phone Number
                  </p>

                  <h3 className="font-semibold text-lg">
                    +62 822-5607-3940
                  </h3>
                </div>

              </div>

            </motion.div>

          </div>

          {/* social links */}
          <div className="mt-12">

            <h3
              className="
                text-2xl
                font-semibold

                mb-6
              "
            >
              Social Links
            </h3>

            <div
              className="
                flex
                flex-wrap
                gap-5
              "
            >

              {/* linkedin */}
              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}

                href="https://www.linkedin.com/in/raihanasuciamalia/"
                target="_blank"
                rel="noreferrer"

                className="
                  glass

                  px-6
                  py-4

                  rounded-full

                  flex
                  items-center
                  gap-3

                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={22} />

                <span>LinkedIn</span>

                <ArrowUpRight size={18} />
              </motion.a>

              

              {/* whatsapp */}
              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}

                href="https://wa.me/6282256073940"
                target="_blank"
                rel="noreferrer"

                className="
                  bg-[#5B8DEF]
                  text-white

                  px-6
                  py-4

                  rounded-full

                  flex
                  items-center
                  gap-3

                  transition-all
                  duration-300

                  hover:bg-[#4A7DE8]
                "
              >
                <FaWhatsapp size={22} />

                <span>WhatsApp</span>

                <ArrowUpRight size={18} />
              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}