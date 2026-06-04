import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const navItems = [
    {
      name: "Home",
      id: "home",
    },

    {
      name: "About",
      id: "about",
    },

    {
      name: "Portfolio",
      id: "portfolio",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <nav
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2

        z-50
      "
    >

      <div
        className={`
          glass

          px-8
          py-4

          rounded-full

          transition-all
          duration-500

          ${
            scrolled
              ? "backdrop-blur-2xl shadow-xl"
              : ""
          }
        `}
      >

        <div
          className="
            flex
            gap-8

            text-sm
            md:text-base

            text-gray-700
          "
        >

          {navItems.map((item, index) => (

            <div key={index}>

              {/* HOMEPAGE */}
              {location.pathname === "/" ? (

                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}

                  className="
                    cursor-pointer

                    transition-all
                    duration-300

                    hover:text-[#5B8DEF]
                  "
                >
                  {item.name}
                </ScrollLink>

              ) : (

                /* PROJECTS PAGE */
                <Link
                  to={`/#${item.id}`}

                  className="
                    cursor-pointer

                    transition-all
                    duration-300

                    hover:text-[#5B8DEF]
                  "
                >
                  {item.name}
                </Link>

              )}

            </div>
          ))}

        </div>

      </div>

    </nav>
  );
}