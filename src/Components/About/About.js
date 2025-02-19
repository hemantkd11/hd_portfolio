import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ConstructionIcon from "@mui/icons-material/Construction";
import Deco from "../../Images/decoration.png";
import ReactSkill from "../../Images/ReactImg.png";
import JavascriptSkill from "../../Images/JsImg.png";
import HTMLSkill from "../../Images/HTMLImg.png";
import CSSSkill from "../../Images/CSSImg.png";
import PythonSkill from "../../Images/PythonImg.png";
import NodeJSSKill from "../../Images/NodeJSImg.png";
import NextJSSkill from "../../Images/NextJSImg.png";
import SqLSkill from "../../Images/SQLImg.png";
import MoongoDB from "../../Images/MOngoDBImg.png";
import MaterialUISkill from "../../Images/MaterialUIImg.png";
import EXCELSkill from "../../Images/ExcelUImg.png";
import ExpressJSSkill from "../../Images/ExpressJSImg.png";
const AboutPage = () => {
  return (
    <div className="outerBox outer-container">
      <div className="innerBox inner-container">
        <div className="body-container">
          {/* heading */}
          <div className="aboutMe-heading">ABOUT ME</div>
          {/* intro */}

          <div className="aboutMe-intro">
            I'm Hemant Kumar Diwakar, a dedicated Frontend Developer with 2
            years of experience in building dynamic web applications using
            React.js, Angular and JavaScript. My expertise lies in developing
            web applications from scratch, integrating backend APIs, and
            effectively facilitating meetings to gather and understand business
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
                    Based on project created by me or another one, sent by you,
                    I can program the website to be fully funtional and
                    responsive
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
          <div className="skill-heading">
            <div>SKILLS</div>
          </div>
          <div className="skill-list">
            <div className="using-list box-width-skill">
              <div className="hello-box">
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={ReactSkill} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={JavascriptSkill} alt="" />
                    </div>
                  </div>
                </div>
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={CSSSkill} alt="" />
                    </div>
                  </div>
                </div>
                {/* <div className="box-flex">
                  <div className="box">box5</div>
                  <div className="box">box6 </div>
                </div> */}
                <div className="skill-type">USING NOW</div>
              </div>
            </div>
            <div className="learning-list box-width-skill">
              <div className="hello-box">
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={NextJSSkill} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={PythonSkill} alt="" />
                    </div>
                  </div>
                </div>
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={NodeJSSKill} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={SqLSkill} alt="" />
                    </div>
                  </div>
                </div>
                {/* <div className="box-flex">
                  <div className="box">box5</div>
                  <div className="box">box6 </div>
                </div> */}
                <div className="skill-type">LEARNING</div>
              </div>
            </div>
            <div className="Toll-list box-width-skill">
              <div className="hello-box">
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={MaterialUISkill} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={MoongoDB} alt="" />
                    </div>
                  </div>
                </div>
                <div className="box-flex">
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={EXCELSkill} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="Skill-logo-box">
                      <img src={ExpressJSSkill} alt="" />
                    </div>
                  </div>
                </div>
                {/* <div className="box-flex">
                  <div className="box">box5</div>
                  <div className="box">box6 </div>
                </div> */}
                <div className="skill-type">OTHER SKILLS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
