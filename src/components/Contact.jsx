import { useState, useEffect } from "react";
import wave from "../assets/wave.png";

export default function Contact() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // show button after scrolling 300px
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="contact"
      className="relative px-[10%] py-10 min-h-[80vh] bg-white bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundPosition: "center 100%",
      }}
    >
      <div className="max-w-5xl mx-auto bg-[#FFF8DE] rounded-3xl p-12 shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="font-poly italic text-[#483D89]">
            <h2 className="text-3xl mb-6 font-extrabold">Get in touch</h2>

            <ul className="space-y-4 text-sm not-italic text-gray-700">
              <li>
                <span className="font-semibold">Email:</span>
                <br />
                tammymontemolin@gmail.com
              </li>
              <li>
                <span className="font-semibold">Phone:</span>
                <br />
                +63 99 740 4934
              </li>
              <li>
                <span className="font-semibold">Located:</span>
                <br />
                Metro Manila, Las Piñas, Philippines
              </li>
            </ul>

            {/* Socials */}
            <div className="pt-6">
              <h3 className="font-poly font-semibold italic text-base text-[#483D89] mb-3">
                Socials
              </h3>
              <div className="flex gap-4">
                {/* Discord */}
                <a
                  href="https://discord.com/channels/@me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors flex items-center justify-center"
                  aria-label="Discord"
                >
                  <svg
                    className="w-5 h-5 text-[#483D89]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/tammy-claire-montemolin-774017294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-[#483D89]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.33c.648-1.035 2.109-1.33 3.25-1.33 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/clai.oew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-[#483D89]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Claire1096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 text-[#483D89]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.35.78 1.04.78 2.1v3.12c0 .31.2.66.79.55a11.52 11.52 0 0 0 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
                  </svg>
                </a>
                {/* Behance */}
                <a
                  href="https://www.behance.net/tammyclaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors flex items-center justify-center"
                  aria-label="Behance"
                >
                  <svg
                    className="w-5 h-5 text-[#483D89]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 7h-6V5h6v2zm-6.75 3.75c-.28-.45-.8-.75-1.5-.75H9v6h4.75c.7 0 1.22-.3 1.5-.75.25-.4.25-.85.25-1.5 0-.65 0-1.1-.25-1.5zM13.25 12H11v2h2.25c.6 0 .75-.25.75-1s-.15-1-.75-1zM13 2H2v20h11c3 0 5-2 5-5 0-2.25-1.25-4.25-3.25-4.75C15.75 11.5 17 9.75 17 7.5 17 4.5 15 2 13 2zm-1.25 8H5V6h6.75c1.25 0 2 .75 2 2s-.75 2-2 2zM12.5 18H5v-4h7.5c1.25 0 2 .75 2 2s-.75 2-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 rounded-xl border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 rounded-xl border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full rounded-xl border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            <button
              type="submit"
              className="block mx-auto bg-pink-300 hover:bg-pink-400 transition text-white px-8 py-3 rounded-xl shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showTopBtn && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
        w-12 h-12
        rounded-full
        bg-pink-300 hover:bg-pink-400
        text-white text-xl font-bold
        shadow-lg
        ring-2 ring-pink-100
        animate-bounce
        transition-all duration-300
        hover:scale-110
        active:scale-95
        flex items-center justify-center
      "
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      )}
    </section>
  );
}
