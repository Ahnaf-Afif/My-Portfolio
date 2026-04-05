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
          <ul className="menu bg-zinc-950 border-2 rounded-3xl border-cyan-400 h-90 md:h-100 flex justify-center items-center w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <p className="text-center text-lg md:text-xl text-cyan-400">
                <u>Education</u>
              </p>
            </li>
            <li>
              <p className="text-center text-lg md:text-xl text-cyan-400">
                BSc in Electronics and Telecommunication Engineering
              </p>
            </li>
            <li>
              <p className="text-center text-lg md:text-xl text-cyan-400">
                University: Chittagong University of Engineering and Technology
              </p>
            </li>
            <li>
              <p className="text-center text-lg md:text-xl text-cyan-400">
                CGPA: 3.35
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
