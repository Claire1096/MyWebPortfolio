import profileImage from "../assets/profile.jpg"; // adjust path

export default function Landing() {
  return (
    <>
      {/* NAVBAR */}
      <header className="bg-pink-100 py-5">
        <nav>
          <ul className="flex justify-center gap-10 text-sm text-[#483D89] font-poppins italic navbar-labels">
            <li className="cursor-pointer hover:opacity-70 transition-opacity">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">
              <a href="#workflow">Workflow</a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* HERO / LANDING */}
      <section className="relative px-[10%] py-16 bg-linear-to-b from-blue-100 to-blue-50 min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text */}
          <div>
            <h1 className="font-poly font-semibold italic text-4xl lg:text-4xl text-[#483D89] mb-6 leading-tight">
              Aspiring Web Developer | Graphic Designer
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed about-me">
              Hello! I’m{" "}
              <span className="bg-pink-200 text-pink-800 font-semibold px-1 rounded ">
                Tammy Claire Montemolin
              </span>
              , a third-year BS Computer Science student at Cavite State
              University – Bacoor Campus. I am an aspiring web developer,
              graphic designer, and animator, passionate about transforming
              ideas into engaging digital experiences. <br />
              <br />
              Welcome to my{" "}
              <span className="bg-yellow-200 text-yellow-800 font-semibold px-1 rounded">
                first portfolio
              </span>{" "}
              — I hope you enjoy exploring my work!
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-pink-300 rounded-3xl p-6 shadow-xl max-w-sm w-full">
              <img
                src={profileImage}
                alt="Tammy Claire Montemolin"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-32 rotate-180"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
      M0,110
      Q80,170 160,140
      Q240,110 320,140
      Q400,170 480,140
      Q560,110 640,140
      Q720,170 800,140
      Q880,110 960,140
      Q1040,170 1120,140
      Q1200,110 1280,140
      Q1360,170 1440,140
      L1440,0 L0,0 Z
    "
          />
        </svg>
      </section>
    </>
  );
}
