import "./contect.css";
const ContactPage = () => {
  return (
    <div class="tabcontent" id="Get-In-Touch">
      <div class="getIn-container">
        <div class="getIn-main">
          <div class="get-detail-box">
            <div class="contact-form">
              <h2>Get in Touch</h2>
              <form id="contactForm">
                <div class="Get-form">
                  <div>
                    <input
                      class="input-box"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="phone-email-get">
                    <input
                      class="input-box"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      class="input-box"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <input
                      class="input-box"
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      class="input-box"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button class="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="personal-details-getIn">
              <p class="set-text-details">
                {" "}
                <i
                  class="fa fa-user"
                  style={{ "font-size": "25px", color: "white" }}
                ></i>{" "}
                Hemant Kumar Diwakar
              </p>
              <p class="set-text-details">
                <i
                  class="fa fa-phone"
                  style={{ "font-size": "25px", color: "white" }}
                ></i>{" "}
                9624353446
              </p>
              <p class="set-text-details">
                <i
                  class="fa fa-envelope"
                  style={{ "font-size": "25px", color: "white" }}
                ></i>{" "}
                diwakarhemant11@gmail.com
              </p>
              <p class="set-text-details">
                <i
                  class="fa fa-linkedin"
                  style={{ "font-size": "25px", color: "white" }}
                ></i>{" "}
                <br />
                <a
                  href="https://www.linkedin.com/in/hemant-diwakar-362aa7244/"
                  target="_blank"
                >
                  Hemant Diwakar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
