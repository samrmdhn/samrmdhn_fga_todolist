import React from "react";
import Image from "next/image";
const RightHero = () => {
  return (
    <>
      <div style={{ padding: 30 }} className="col">
        <div className="row">
          <div className="col-lg-12">
            <div
          style={{
            backgroundColor: "#301B3F",
            padding: "16px",
            color: "white",
            borderRadius: "12px",
            fontWeight: "bolder",
          }}
        >
          Trends
          <div>
            <div style={{ borderBottom: "1px solid white" }}>
              1. Climate science scepticism and denial
            </div>
            <div style={{ borderBottom: "1px solid white" }}>
              2. Trillion-dollar crypto collapse – who’s to blame?
            </div>
            <div style={{ borderBottom: "1px solid white" }}>
              3. Starfield dominates Xbox Bethesda showcase
            </div>
            <div style={{ marginTop: 5 }} className="row">
              <div className="col">6/22/2022</div>
              <div className="col">Show More..</div>
            </div>
          </div>
        </div>
        </div>
          <div className="col-lg-12">
            <div style={{backgroundColor: "black",
            padding: "16px",
            marginTop: 20,
            color: "white",
            borderRadius: "12px",
            fontWeight: "bolder"}}>
            <div style={{  marginTop: 10, borderRadius: 10, alignContent:"center", justifyContent:"center", position: "relative"}}>
              <Image style={{borderRadius: 15, overflow:"hidden"}}src="https://e3.365dm.com/22/06/2048x1152/skynews-elon-musk-tesla_5810877.jpg" alt="planet" height="190" width="345" />
              <div style={{position: "absolute", marginTop: -200}}>Technology</div>
              <div style={{fontSize: 26, position: "absolute", marginTop: -130, fontWeight:"bolder"}}>Elon Musk questions if TikTok is &quot;destroying civilization&quot;</div>
              <p style={{marginTop: 10, fontWeight: "100"}}>The billionaire slammed the popular video-sharing app following a report that employees of its Chinese parent company Bytedance have accessed private data from US users. <a href="">Read more...</a> </p>
            </div>
            </div>
</div>
        </div>
      </div>
    </>
  );
};

export default RightHero;
