import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Upcoming = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Upcoming"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Upcoming
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Master C Programming: Your 8-Bit Journey"
          description="Ready to make your coding dreams a reality?  Dive into C and create your own programs. This course combines clear explanations with hands-on projects for a powerful learning experience."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Build Your Own AI: A Practical Introduction"
          description="Go beyond theory and create your own AI Tools. Learn fundamental AI concepts, tools, and techniques through hands-on coding and experimentation."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Become Tech-Industry Ready: Your Career Roadmap"
          description="Stop wondering, start doing! This course guides you through building a tech career, from skill development to getting your foot in the door."
        />
      </div>
    </div>
  );
};

export default Upcoming;
