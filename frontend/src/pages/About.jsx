import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          About
        </h1>

        <p className="mb-6 text-center">
          This is{" "}
          <strong className="text-yellow-400 font-semibold">
            {profile?.user?.name || "Param"}
          </strong>
          , a dedicated full stack web developer and AI/ML enthusiast. With a strong foundation in modern web technologies and a keen interest in machine learning, {profile?.user?.name || "Param"} builds impactful digital solutions and continually expands his skill set.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="font-semibold text-yellow-400 text-xl mb-2">
              Technical Expertise
            </h2>
            <p>
              <strong>Front-End:</strong> Skilled in React.js, Next.js, and Tailwind CSS, crafting responsive and interactive interfaces with optimized performance. <br />
              <strong>Back-End:</strong> Experienced with Node.js, Express.js, and Fastify. Works efficiently with REST APIs and database integrations using MongoDB, PostgreSQL, and MySQL. <br />
              <strong>DevOps & Deployment:</strong> Familiar with containerization using Docker, CI/CD pipelines, and deploying scalable apps on cloud platforms like Vercel and AWS. <br />
              <strong>AI/ML:</strong> Currently exploring AI-powered applications, integrating ML models for intelligent insights in projects such as player performance analytics and personalized recommendations.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-yellow-400 text-xl mb-2">
              Professional Highlights
            </h2>
            <p>
              {profile?.user?.name || "Param"} has developed multiple full-stack projects, including student attendance systems, fantasy sports platforms, and productivity tools for coal mine management. They collaborate effectively with diverse teams, learn rapidly, and adapt to emerging technologies to deliver solutions that are both practical and innovative.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-yellow-400 text-xl mb-2">
              Current Focus
            </h2>
            <p>
              Building scalable web apps with clean architecture, improving coding standards, and integrating AI capabilities into real-world solutions. {profile?.user?.name || "Param"} is also enhancing data structures and algorithms expertise for software engineering interviews.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-yellow-400 text-xl mb-2">
              Personal Interests
            </h2>
            <p>
              Beyond coding, {profile?.user?.name || "Param"} is passionate about cricket, often inspired by legends like Virat Kohli. They enjoy exploring new tech tools, designing intuitive UI/UX experiences, and guiding juniors or peers in their learning journeys.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center italic text-gray-500">
          {profile?.user?.name || "Param"} is driven by a vision to build meaningful software products that improve lives and create opportunities. With a mindset rooted in growth, curiosity, and resilience, they continue to strive towards excellence in tech.
        </p>
      </div>
    </section>
  );
}

export default About;
