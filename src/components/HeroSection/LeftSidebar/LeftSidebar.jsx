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
          <ul className="menu bg-zinc-950 text-white border-2 border-cyan-400 rounded-3xl  flex justify-center items-center h-90 lg:h-100 w-80 md:w-90 lg:w-80 p-4 ">
            {/* Sidebar content here */}
            <li>
              <div className="text-center text-lg md:text-xl text-cyan-400 flex   flex-col justify-center items-center gap-6">
                <div className="font-bold text-3xl">Hey There, I am Afif</div>
                <div className="text-2xl font-bold">
                  Full Stack MERN developer
                </div>
                <div className="font-bold text-base">
                  Passionate and love to build beautiful, customized, well
                  designed and scalable web applications.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
