import React from "react";

const BottomNavbar = () => {
  return (
    <>
      <div className="bottom-nav-main">
        <div className="bottom-nav-row">
          <button><div><img src="/public/home (1).png" alt="" className="bottom-nav-img" /></div></button>
          <button><div><img src="/public/location.png" alt="" className="bottom-nav-img" /></div></button>
          <button><div><img src="/public/search.png" alt="" className="bottom-nav-img" /></div></button>
          <button><div><img src="/public/residential.png" alt="" className="bottom-nav-img" /></div></button>
          <button><div><img src="/public/contact-mail.png" alt="" className="bottom-nav-img" /></div></button>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
