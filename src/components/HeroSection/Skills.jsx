import React from "react";
import ProfilePhoto from "../../assets/My-Profile-Photo/afif-white-b.png";

const skills = [
  {
    name: "Node",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg",
  },
];

export default function Skills() {
  const radius = 190;
  const duration = 18;

  return (
    <div className="flex min-h-screen max-w-8/12 mx-auto items-center justify-center bg-zinc-950 px-4 text-white">
      <style>{`
          @keyframes orbitSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
  
          @keyframes counterSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>

      <div className="relative h-[520px] w-[520px]">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/20" />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/20 bg-zinc-900 shadow-2xl shadow-cyan-500/10">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className=" h-40 w-40 rounded-full object-cover ring-2 ring-cyan-400/60"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ animation: `orbitSpin ${duration}s linear infinite` }}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px)`,
                }}
              >
                <div
                  className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-900 px-2 text-center text-base font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10"
                  style={{
                    transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    width="50"
                    height="50"
                    style={{
                      animation: `counterSpin ${duration}s linear infinite`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
