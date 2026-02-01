import { useState } from "react";
import sun from "../assets/sun.png";
import diaryImage from "../assets/Diary.png";
import trackerImage from "../assets/Tracker.png";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Clairey's Diary",
      description:
        "Inspired by pixel games like Stardew Valley and Minecraft, this diary lets users write, save, and view entries.",
      image: diaryImage,
      bgColor: "bg-pink-300",
    },
    {
      title: "Studios - School Tracker",
      description:
        "Track your academic progress, manage schedules, and organize subjects, professors.",
      image: trackerImage,
      bgColor: "bg-pink-300",
    },
    {
      title: "Namala - A Online Library",
      description:
        "Description for your third project goes here. Add as many projects as you'd like!",
      image: "/path-to-project3-image.png",
      bgColor: "bg-pink-300",
    },
    {
      title: "Project Four",
      description: "Description for your fourth project goes here.",
      image: "/path-to-project4-image.png",
      bgColor: "bg-pink-300",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= projects.length ? 0 : prevIndex + 2,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? Math.max(0, projects.length - 2) : prevIndex - 2,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="projects"
      className="relative px-[10%] py-16 min-h-[80vh] bg-white bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url(${sun})` }}
    >
      <h2 className="font-poly italic text-4xl text-center text-[#483D89] tracking-tight mb-12">
        Work Showcase
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
          >
            {/* Group projects in pairs */}
            {Array.from({ length: Math.ceil(projects.length / 2) }).map(
              (_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2"
                >
                  {projects
                    .slice(slideIndex * 2, slideIndex * 2 + 2)
                    .map((project, index) => (
                      <div
                        key={slideIndex * 2 + index}
                        className={`${project.bgColor} rounded-3xl p-8 shadow-lg flex flex-col items-center`}
                      >
                        {/* Project Image Container */}
                        <div className="w-full aspect-video bg-white/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Project Title */}
                        <h3 className="font-petrona font-bold italic text-2xl text-[#483D89] text-center mb-4 ">
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <p className="text-[#483D89] text-center text-sm leading-relaxed about-me">
                          {project.description}
                        </p>
                      </div>
                    ))}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {projects.length > 2 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#483D89] text-white p-3 rounded-full shadow-lg hover:bg-[#5a4da3] transition-colors"
              aria-label="Previous projects"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#483D89] text-white p-3 rounded-full shadow-lg hover:bg-[#5a4da3] transition-colors"
              aria-label="Next projects"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {projects.length > 2 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * 2)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex / 2 === index
                      ? "bg-[#483D89] w-8"
                      : "bg-[#483D89]/30 hover:bg-[#483D89]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
