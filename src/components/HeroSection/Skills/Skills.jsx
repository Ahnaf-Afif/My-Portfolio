import React from "react";
import ProfilePhoto from "../../../assets/My-Profile-Photo/afif-white-b.png";

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
  const duration = 18;

  const orbitSize = "clamp(220px, 72vmin, 520px)";
  const ringSize = "clamp(170px, 56vmin, 400px)";

  const itemSize = "clamp(52px, 12vmin, 96px)";
  const iconSize = "clamp(28px, 6vmin, 50px)";
  const radius = "clamp(78px, 26vmin, 190px)";

  return (
    <div className="">
      <div className="flex items-center justify-center bg-zinc-950  text-white">
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

        <div
          className="relative"
          style={{ width: orbitSize, height: orbitSize }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/30"
            style={{ width: ringSize, height: ringSize }}
          />

          <div
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-900 shadow-2xl shadow-cyan-500/10
  h-[clamp(80px,18vmin,130px)] w-[clamp(80px,18vmin,130px)]
  md:h-[clamp(110px,22vmin,160px)] md:w-[clamp(110px,22vmin,160px)]"
          >
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="rounded-full object-cover ring-2 ring-cyan-400/60
    h-[clamp(80px,18vmin,130px)] w-[clamp(80px,18vmin,130px)]
    md:h-[clamp(110px,22vmin,160px)] md:w-[clamp(110px,22vmin,160px)]"
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
                    transform: `rotate(${angle}deg) translateX(${radius})`,
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/60 bg-zinc-900 px-2 shadow-lg shadow-cyan-200/10"
                    style={{
                      width: itemSize,
                      height: itemSize,
                      transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
                    }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      style={{
                        width: iconSize,
                        height: iconSize,
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
    </div>
  );
}
