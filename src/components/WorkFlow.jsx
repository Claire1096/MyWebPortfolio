import workflowIllustration from "../assets/workflow-illustration.png"; // Replace with your image path

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative px-[10%] py-16 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - Workflow Steps */}
        <div>
          <h2 className="font-poly italic text-4xl text-[#483D89] tracking-tight mb-2">
            My Workflow
          </h2>
          <p className="text-pink-300 italic text-lg mb-12">How I work</p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Dashed Line */}
            <div className="absolute left-5.25 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-pink-300"></div>

            {/* Steps */}
            <div className="space-y-10">
              {/* Step 01 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-pink-300 bg-white flex items-center justify-center z-10">
                  <span className="font-poly text-pink-300 font-semibold">
                    01
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold italic text-xl text-[#483D89] mb-2 ">
                    Research & Planning
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed about-me">
                    Understanding the project's goals, target audience, and user
                    needs is the foundation of any successful design.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-pink-300 bg-white flex items-center justify-center z-10">
                  <span className="font-poly text-pink-300 font-semibold">
                    02
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold italic text-xl text-[#483D89] mb-2 ">
                    Wireframing & Prototyping
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed about-me">
                    After planning, I create wireframes and interactive
                    prototypes to visualize the structure and flow of the
                    website.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-pink-300 bg-white flex items-center justify-center z-10">
                  <span className="font-poly text-pink-300 font-semibold">
                    03
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold italic text-xl text-[#483D89] mb-2">
                    Design & Development
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed about-me">
                    This step combines visual design and coding. I develop the
                    website's look and feel by creating graphics, typography,
                    and color schemes, then bring it to life with clean,
                    responsive HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-pink-300 bg-white flex items-center justify-center z-10">
                  <span className="font-poly text-pink-300 font-semibold">
                    04
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold italic text-xl text-[#483D89] mb-2">
                    Testing & Optimization
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed about-me">
                    Before launch, I thoroughly test the website across devices
                    and browsers to identify any bugs, usability issues, or
                    performance problems.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="relative flex gap-6">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-pink-300 bg-white flex items-center justify-center z-10">
                  <span className="font-poly text-pink-300 font-semibold">
                    05
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold italic text-xl text-[#483D89] mb-2 ">
                    Launch & Feedback
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed about-me ">
                    Once the website is live, I monitor its performance and
                    gather feedback from users and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="relative">
          <div className="relative">
            {/* Pink Circle Background */}
            <div className="absolute inset-0 bg-pink-100 rounded-full blur-3xl opacity-60 scale-110"></div>

            {/* Illustration */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={workflowIllustration}
                alt="Workflow illustration"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
