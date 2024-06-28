import React from "react";
// import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HD from "../../Images/hd.jpg";
import Resume from "../../Images/HemantKDiwakar.pdf";
const Landing_Page = () => {
  return (
    <div className="Landing-container">
      <div className="Landing-wrapper">
        <Box sx={{ flexGrow: 1, height: "90vh" }}>
          <Grid container direction="column" xs={12} sx={{ height: "100%" }}>
            <Grid item xs={12} sx={{ height: "70%" }}>
              {/* for tab and laptop */}
              <Grid
                container
                spacing={2}
                sx={{ height: "100%" }}
                className="laptop-view"
              >
                <Grid item xs={6}>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="Loading-page-wel">
                      <h3>HEY THERE !</h3>
                    </div>
                    <div className="Loading-page-name">
                      <h1>I Am Hemant Diwakar</h1>
                    </div>
                    <div className="Loading-page-role">
                      <h2>Front-End ReactJS Developer</h2>
                    </div>
                    <div className="Landing-btn-box">
                      <div>
                        <a
                          href={Resume}
                          download="HemantDiwakar.pdf"
                          class="button"
                        >
                          <span class="button__text">Download</span>
                          <span class="button__icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 35 35"
                              id="bdd05811-e15d-428c-bb53-8661459f9307"
                              data-name="Layer 2"
                              class="svg"
                            >
                              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          //   onclick="openTab(event,'Get-In-Touch')"
                          class="tablinks Get-in-touch"
                        >
                          Get In Touch
                        </button>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ margin: 0, padding: 0 }}>
                  <div className="photo-adjust">
                    <img style={{ height: "100%" }} src={HD} alt="" />
                  </div>
                </Grid>
              </Grid>
              {/* for mobile */}
              <div className="Landing-page-mob-container">
                <div className="Landing-page-mob-wrapper">
                  <img src={HD} alt="" />
                  <div className="Landing-page-mob-text">
                    <h3>HEY THERE !</h3>
                    <h1>I Am Hemant Diwakar</h1>
                    <h2>Front-End RaectJS Developer</h2>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sx={{ height: "30%" }}>
              <div className="Skill-logo">
                <div className="Lang-icon">
                  <img
                    class="image-rotate1"
                    src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
                    alt
                  />
                  <img
                    class="image-rotate2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCuKHwHwT4i0cWdIjYj3yQg3psmdct9QM7YPMTr_IKA&s"
                    alt
                  />
                  <img
                    class="image-rotate3"
                    src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
                    alt
                  />
                  <img
                    class="image-rotate4"
                    src="data:image/png;base64,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"
                    alt
                  />
                  <img
                    class="image-rotate5"
                    src="https://moonshotcentral.com/wp-content/uploads/python-logo.png"
                    alt
                  />
                  <img
                    class="image-rotate6"
                    src="data:image/png;base64,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"
                    alt
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default Landing_Page;

{
  /* <Box sx={{ flexGrow: 1, height: "90vh" }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <div>hemant Kumar diwakar</div>
            </Grid>
            <Grid xs={6}>
              <div>Image</div>
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ flexGrow: 0, height: "30%" }}>
            <div>xs</div>
          </Grid>
        </Box> */
}
