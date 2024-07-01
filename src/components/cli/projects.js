import React, { useEffect, useState } from "react";

const projects = [
  {
    name: "FriendZone",
    description: "Web application for chatting",
    Tech_stack: ["React", "NextJs", "Redis","TailwindCss"],
    GitHub: "https://github.com/tanishk2705",
    URL: "https://anti-friend-zone-bytanishk.vercel.app/"
  },
  {
    name: "Multithreading Proxy Server",
    description: "Proxy server to implement caching",
    Tech_stack: ["Multithreading","Semaphore","LRU Cache","C/C++"],
    GitHub: "https://github.com/tanishk2705",
    URL: "https://github.com/tanishk2705/multithreaded-proxy-server"
  },
  {
    name: "Parallel File Encryptor",
    description: "Parallel File Encryptor in C++",
    Tech_stack: ["Operating System","File Management"],
    GitHub: "https://github.com/tanishk2705",
    URL: "https://github.com/tanishk2705/Encrypter"
  },
  {
    name: "FriendZone",
    description: "Web application for chatting",
    Tech_stack: ["React", "NextJs", "Redis","TailwindCss"],
    GitHub: "https://github.com/tanishk2705",
    URL: "https://github.com/tanishk2705"
  }
];

export default function CliProjects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching projects from an API or other source
    setTimeout(() => {
      setLoading(false); // Set loading to false once projects are fetched
    }, 2000); // Simulating a delay for demonstration purposes
  }, []);

  return (
    <div className="flex flex-wrap max-w-full">
      <pre
        data-prefix="tanishk@fedora$"
        className="text-info ml-3 text-wrap w-full flex flex-wrap"
        style={{ whiteSpace: "pre-wrap" }}
      >
        <div className="lg:flex">
          <div
            className="text-info"
            options={{
              speed: 5,
              waitUntilVisible: true,
              cursor: false,
            }}
          >
            <span className="text-base text-info">
              {loading ? "Loading projects..." : ""}
              <br/>
            </span>
            {!loading && (
              <>
                {projects.map((project) => (
                  <div key={project.name} style={{ lineHeight: "50%" }} className="mb-2">
                    <span className="text-lg text-success">{project.name}</span>
                    <br />
                    <span className="text-base">{project.description}</span>
                    <br />
                    <span className="text-base text-warning">Tech Stack:</span>
                    <br />
                    {project.Tech_stack.map((tech, index) => (
                      <span className="text-base" key={index}>
                        {" "}
                        {tech}
                      </span>
                    ))}
                    <div>
                      {project.GitHub && (
                        <a
                          className="text-base underline"
                          href={project.GitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}{" "}
                      {""}
                      {project.URL && (
                        <a
                          className="text-base underline"
                          href={project.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          URL
                        </a>
                      )}
                    </div>
                    <hr className="mt-2 border border-success" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </pre>
    </div>
  );
}
