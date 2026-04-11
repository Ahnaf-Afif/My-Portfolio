import React from "react";

const RightSidebar = () => {
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
          <ul className="menu bg-zinc-950 border-2 rounded-3xl border-cyan-400 h-90 md:h-100 flex justify-center items-center w-80 md:w-90 lg:w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <div className="text-center text-lg md:text-xl text-cyan-400 flex flex-col justify-center items-center gap-6">
                <div className="grid gap-1">
                  <div className="font-bold text-3xl">Available for</div>
                  <div className="text-base font-bold">
                    Internships • Freelance • Collaboration
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-3xl font-bold">Based in</div>
                  <div className="font-bold text-base">
                    Chattogram, Bangladesh
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-3xl font-bold">Focus </div>
                  <div className="text-base font-bold">
                    Frontend • MERN Stack • Responsive UI
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
