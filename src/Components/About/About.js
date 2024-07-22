import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ConstructionIcon from "@mui/icons-material/Construction";
import Deco from "../../Images/decoration.png";
const AboutPage = () => {
  return (
    <div className="outerBox outer-container">
      <div className="innerBox inner-container">
        <div className="body-container">
          {/* heading */}
          <div className="aboutMe-heading">ABOUT ME</div>
          {/* intro */}

          <div className="aboutMe-intro">
            I'm Hemant Kumar Diwakar, a dedicated Frontend React.js Developer
            with 1.5 years of experience in building dynamic web applications
            using React.js and JavaScript. My expertise lies in developing web
            applications from scratch, integrating backend APIs, and effectively
            facilitating meetings to gather and understand business
            requirements. <br /> I hail from Uttar Pradesh and completed my
            schooling at Kendriya Vidyalaya in Gandhinagar, Gujarat, where I
            also earned my bachelor's degree in arts. During my school years, I
            actively participated in various events, including football,
            kabaddi, the junior science olympiad, and multiple academic
            competitions, showcasing my versatility and enthusiasm.
          </div>
          {/* explore */}
          <div className="aboutMe-explore">
            <div className="aboutMe-explore-text">
              <span>|</span> Explore <span>|</span>
            </div>
            <div className="aboutMe-explore-design">
              <img src={Deco} alt="Deco" />
            </div>
          </div>
          {/* aboutMe - strength */}
          <div className="aboutMe-strength">
            <div className="designAndDevelopment">
              <div className="strenght flex-width">
                <div className="flex-strength-text">
                  <div className="strength-heading">
                    <div className="icon-aboutMe">
                      <DesignServicesIcon
                        sx={{
                          fontSize: "60px",
                          color: "lightgray",
                        }}
                      />
                    </div>
                    <div style={{ color: "#ff7f3e", fontSize: "20px" }}>
                      Design
                    </div>
                  </div>
                  <div className="strength-content">
                    I can design the site based on your need and suggestions. I
                    can also design the site from scratch and consult you during
                    the job.
                  </div>
                </div>
              </div>
              <div className="weakness flex-width">
                <div className="flex-strength-text">
                  <div className="strength-heading">
                    <div className="icon-aboutMe">
                      <DeveloperBoardIcon
                        sx={{
                          fontSize: "60px",
                          color: "lightgray",
                        }}
                      />
                    </div>
                    <div style={{ color: "#ff7f3e", fontSize: "20px" }}>
                      Development
                    </div>
                  </div>
                  <div className="strength-content">
                    With 1.5 years of experience as a Frontend Developer, I
                    specialize in building applications from scratch using
                    React.js and various libraries, delivering exceptional user
                    interfaces.
                  </div>
                </div>
              </div>
            </div>
            <div className="development flex-width">
              <div className="flex-strength-text">
                <div className="strength-heading">
                  <div className="icon-aboutMe">
                    <ConstructionIcon
                      sx={{
                        fontSize: "60px",
                        color: "lightgray",
                      }}
                    />
                  </div>
                  <div style={{ color: "#ff7f3e", fontSize: "20px" }}>
                    Strength
                  </div>
                </div>
                <div className="strength-content">
                  {" "}
                  With 1.5 years of experience as a Frontend Developer, I
                  specialize in building applications from scratch using
                  React.js and various libraries, delivering exceptional user
                  interfaces.
                </div>
              </div>
            </div>
            <div className="aboutMe-explore-design-2">
              <img src={Deco} alt="Deco" />
            </div>
          </div>
          <div className="aboutMe-heading">SKILLs</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
