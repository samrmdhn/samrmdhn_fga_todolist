import React from "react";import Clock from "react-live-clock";
const NavbarMid = () => {
  return (
    <>
      <div style={{ fontWeight: "bolder", borderBottom: "2px solid black" }}>
        <div style={{ marginTop: 16 }} className="row">
          <div className="col-lg-4">Dashboard</div>
          <div className="col-lg-4">
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"ID"} />
          </div>
          <div className="col-lg-4">Bandung</div>
        </div>
      </div>
    </>
  );
};

export default NavbarMid;
