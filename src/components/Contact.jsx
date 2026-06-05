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
        py-20
        md:py-32
        px-4
        relative
        overflow-hidden
      "
    >
      {/* background blur */}
      <div className="
        absolute top-10 left-10
        w-60 md:w-72
        h-60 md:h-72
        bg-blue-200/30
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute bottom-10 right-10
        w-60 md:w-72
        h-60 md:h-72
        bg-cyan-200/30
        blur-3xl
        rounded-full
      " />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-blue-500 font-medium mb-3 text-sm md:text-base">
            Contact Me
          </p>

          <h2 className="
            text-3xl
            md:text-6xl
            font-bold
            leading-tight
            mb-4
          ">
            Let's Work Together
          </h2>

          <p className="
            text-gray-600
            text-sm md:text-lg
            max-w-2xl
            mx-auto
            leading-7 md:leading-8
          ">
            Open for collaborations, creative projects,
            digital branding, and modern visual experiences.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            glass
            rounded-[30px] md:rounded-[45px]

            p-5 md:p-14

            border border-white/40
          "
        >

          {/* TOP INFO */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5 md:gap-6
          ">

            {/* EMAIL */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="
                bg-white/50
                border border-white/40
                rounded-[24px] md:rounded-[30px]
                p-5 md:p-6
              "
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="
                  w-12 md:w-14
                  h-12 md:h-14
                  rounded-full
                  bg-[#EEF4FF]
                  flex items-center justify-center
                  shrink-0
                ">
                  <Mail className="text-[#5B8DEF]" />
                </div>

                <div className="min-w-0">
                  <p className="text-gray-500 text-xs md:text-sm">
                    Email
                  </p>

                  <h3 className="
                    font-semibold
                    text-sm md:text-lg
                    break-all
                  ">
                    Ahnhanna08@gmail.com
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="
                bg-white/50
                border border-white/40
                rounded-[24px] md:rounded-[30px]
                p-5 md:p-6
              "
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="
                  w-12 md:w-14
                  h-12 md:h-14
                  rounded-full
                  bg-[#EEF4FF]
                  flex items-center justify-center
                  shrink-0
                ">
                  <Phone className="text-[#5B8DEF]" />
                </div>

                <div>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Phone Number
                  </p>

                  <h3 className="
                    font-semibold
                    text-sm md:text-lg
                  ">
                    +62 822-5607-3940
                  </h3>
                </div>
              </div>
            </motion.div>

          </div>

          {/* SOCIAL */}
          <div className="mt-10 md:mt-12">

            <h3 className="text-xl md:text-2xl font-semibold mb-5">
              Social Links
            </h3>

            <div className="
              flex
              flex-col
              sm:flex-row
              flex-wrap
              gap-4
            ">

              {/* LINKEDIN */}
              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                href="https://www.linkedin.com/in/raihanasuciamalia/"
                target="_blank"
                rel="noreferrer"
                className="
                  glass
                  px-5 md:px-6
                  py-3 md:py-4
                  rounded-full
                  flex items-center gap-3
                  text-sm md:text-base
                "
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} />
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                href="https://wa.me/6282256073940"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-[#5B8DEF]
                  text-white
                  px-5 md:px-6
                  py-3 md:py-4
                  rounded-full
                  flex items-center gap-3
                  text-sm md:text-base
                  hover:bg-[#4A7DE8]
                "
              >
                <FaWhatsapp size={20} />
                <p>WhatsApp</p>
                <ArrowUpRight size={16} />
              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}