import { Rocket, ToolCase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative px-[10%] pt-20 pb-36 bg-white">
      <div className="flex flex-col gap-12 max-w-4xl">
        {/* ABOUT TEXT */}
        <div>
          <h2 className="font-poly font-semibold italic text-3xl text-[#483D89] tracking-tight mb-5">
            About Me
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed about-me">
            I’m passionate about web development, design, and animation—turning
            ideas into experiences that are both functional and beautiful.
            Whether I’m coding, sketching, or animating, I love the process of
            transforming imagination into something real.
            <br />
            <br />I am a third-year BS Computer Science student at Cavite State
            University – Bacoor Campus and an aspiring web developer, graphic
            designer, and animator who enjoys creating engaging digital
            experiences.
          </p>
        </div>

        {/* LANGUAGES */}
        <div>
          <h2 className="font-poly font-medium italic text-2xl text-[#483D89] tracking-tight mb-4">
            Languages I Use
          </h2>

          {/* placeholder for icons / badges */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="px-5 py-2 bg-sky-100 rounded-full">HTML</span>
            <span className="px-5 py-2 bg-pink-100 rounded-full">CSS</span>
            <span className="px-5 py-2 bg-yellow-100 rounded-full">
              JavaScript
            </span>
            <span className="px-5 py-2 bg-purple-100 rounded-full">React</span>
            <span className="px-5 py-2 bg-blue-100 rounded-full">
              Bootstrap
            </span>
            <span className="px-5 py-2 bg-green-100 rounded-full">Python</span>
            <span className="px-5 py-2 bg-red-100 rounded-full">C++</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 pt-6">
        {/* SKILLS CARD */}
        <div className="bg-pink-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#FDA7E3] flex items-center justify-center">
              <Rocket size={18} className="text-white" />
            </div>
            <h4 className="font-semibold text-[#483D89] about-me">Skills</h4>
          </div>

          <ul className="text-sm text-gray-700 space-y-2 about-me">
            <li>• Responsive Web Design</li>
            <li>• UI Layout & Visual Hierarchy</li>
            <li>• Wireframing & Prototyping</li>
            <li>• Design-to-Code Translation</li>
            <li>• Accessibility-Aware Design (basic)</li>
          </ul>
        </div>

        {/* TOOLS CARD */}
        <div className="bg-pink-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#483D89] flex items-center justify-center">
              <ToolCase size={18} className="text-white" />
            </div>
            <h4 className="font-semibold text-[#483D89] about-me">
              Tools & Software
            </h4>
          </div>
          <ul className="text-sm text-gray-700 grid grid-cols-2 gap-x-4 about-me">
            <li>• Figma</li>
            <li>• Electron</li>
            <li>• Adobe Photoshop</li>
            <li>• Canva</li>
            <li>• Visual Studio Code</li>
            <li>• Git & GitHub</li>
            <li>• Krita</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
