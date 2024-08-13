import React from "react";
import UI_WebPage from "../../Images/webpage.png";
import Ecommerce from "../../Images/amazon.png";
import Netflix from "../../Images/netflix.png";
import Api_Fetch from "../../Images/Fetch.png";
import ChatBot from "../../Images/chat.png";
import Speech_App from "../../Images/TextConverter.png";
const Project = () => {
  return (
    // <div class="tabcontent" id="Project">
    <div class="Project-container">
      <div class="Project-container-box">
        <div class="Project-container-main-box">
          <div class="heading-box">
            <h1>Projects</h1>
            <h3 class="subhead">
              Each project in this is done for practice perpose only.
            </h3>
          </div>
          {/* <!---first project--> */}
          <div class="First-project-box">
            <div class="project-img">
              <img src={UI_WebPage} alt="img" />
            </div>
            <div class="Project-details">
              <h3 class="discription-head">UI_WebPage</h3>

              <p class="discription">
                A versatile mobile application designed to offer a dynamic and
                customizable user interface. With this app, you can easily
                change text and images displayed to users directly from a
                database file, granting you unparalleled flexibility in managing
                the app's content.
              </p>
              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>REACTJS</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://hemantkd11.github.io/webpage_ui/"
                  target="_blank"
                >
                  <button
                    //   onclick="openTab(event,'Get-In-Touch')"
                    className="tablinks Get-in-touch"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!---second project--> */}
          <div class="First-project-box flex-reverse">
            <div class="Project-details">
              <h3 class="discription-head">Ecommerce web Application</h3>
              <p class="discription">
                The online shopping platform lets users browse and add items to
                their cart. They can review their selections, decide to proceed
                with checkout, or remove items if desired. Users can return to
                the home page to explore and add more items, simplifying the
                shopping experience with clear cart management and purchase
                options.
              </p>
              {/* <p class="discription">
                This is an demo app so The Data is coming from DB file. But I
                have same App which is connected with backend with the use of
                mongoDb and Express js.
              </p> */}
              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>REACTJS</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                  <li>MONGODB</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://hemantkd11.github.io/amazon_react/"
                  target="_blank"
                >
                  <button
                    //   onclick="openTab(event,'Get-In-Touch')"
                    className="tablinks Get-in-touch"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
            <div class="project-2-img image-align-end">
              <img src={Ecommerce} alt="img" />
            </div>
          </div>

          {/* <!---third project--> */}
          <div class="First-project-box">
            <div class="project-img">
              <img src={Netflix} alt="img" />
            </div>
            <div class="Project-details">
              <h3 class="discription-head">Video streaming App</h3>
              <p class="discription">
                Welcome to Video streaming App, the ultimate destination for a
                diverse range of movies and shows. With a library of content
                meticulously curated by our team, we bring you an extensive
                collection of entertainment across various genres, including
                action, comedy, romance, and more.
              </p>

              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>REACTJS</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                {/* <!-- <a href="https://hemantkd11.github.io/webpage_ui/"
                        target="_blank"><Button class="Button">Click
                          For Demo</Button></a> --> */}
                <button
                  //   onclick="openTab(event,'Get-In-Touch')"
                  className="tablinks Get-in-touch"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
          {/* <!---fourth project--> */}
          <div class="First-project-box flex-reverse">
            <div class="Project-details">
              <h3 class="discription-head">Fetching Data Using Api</h3>
              <p class="discription">
                A simple Webpage That fetch data, in this project I use API to
                fetch User data and simply Display that data in the page with
                some styling
              </p>
              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>REACTJS</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                <a href="https://hemant16hd.netlify.app/" target="_blank">
                  <button
                    //   onclick="openTab(event,'Get-In-Touch')"
                    className="tablinks Get-in-touch"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
            <div class="project-2-img image-align-end">
              <img src={Api_Fetch} alt="img" />
            </div>
          </div>

          {/* <!---fifth project--> */}
          <div class="First-project-box">
            <div class="project-img">
              <img src={ChatBot} alt="img" />
            </div>
            <div class="Project-details">
              <h3 class="discription-head">ChatBot</h3>
              <p class="discription">
                Chat App this app is created by using JAVASCRIPt, HTML , CSS in
                this app you can simply send message from one chat box to other
              </p>

              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://hemantkd11.github.io/ChatAppJS/"
                  target="_blank"
                >
                  <button
                    //   onclick="openTab(event,'Get-In-Touch')"
                    className="tablinks Get-in-touch"
                  >
                    Demo
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* <!---sixth project--> */}
          <div class="First-project-box flex-reverse">
            <div class="Project-details">
              <h3 class="discription-head">Speech Recognition</h3>
              <p class="discription">
                Text to voice Converter. In this app U can write anything you to
                and on clicking button text to voice then it will start speaking
                what ever writtern in the textArea. And if you dont want to
                write then there's a mic button So, you can say whatever you
                want
              </p>
              <div class="about-lang-and-links">
                <ul class="ul-list">
                  <li>REACTJS</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://hemantkd11.github.io/VoiceTotextInReact/"
                  target="_blank"
                >
                  <button
                    //   onclick="openTab(event,'Get-In-Touch')"
                    className="tablinks Get-in-touch"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
            <div class="project-2-img image-align-end">
              <img src={Speech_App} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Project;
