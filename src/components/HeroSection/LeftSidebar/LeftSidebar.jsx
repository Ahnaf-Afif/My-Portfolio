import React from "react";

const LeftSidebar = () => {
  return (
    <div>
      <div className="drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div>
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-zinc-950 text-white border-2 border-cyan-400 rounded-3xl  flex justify-center items-center h-90 md:h-100 w-80 p-4 ">
            {/* Sidebar content here */}
            <li>
              <p className="text-center text-lg md:text-xl text-cyan-400">
                Passionate about building clean, functional, and responsive web
                applications. Engineering student exploring the MERN stack and
                building projects to grow as a full-stack developer.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
