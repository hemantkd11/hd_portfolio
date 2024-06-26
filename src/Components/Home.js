import React from "react";

// Functional component representing the Home page
const Home = () => {
  return (
    <div className="tabcontent img_background" id="Home">
      <div className="page_body">
        <div className="col body_part1">
          {/* Content for the left side of the page */}
          <h1>Welcome to our Website</h1>
          <p>This is some introductory text...</p>
          <button>Learn More</button>
          <img src="left-image.jpg" alt="Left" />
        </div>
        <div className="col body_part2">
          {/* Content for the right side of the page */}
          <img src="right-image.jpg" alt="Right" />
        </div>
      </div>
      {/* Language icons at the bottom of the page */}
      <div className="Lang-icon">
        <img src="icon1.png" className="image-rotate1" alt="Icon 1" />
        <img src="icon2.png" className="image-rotate2" alt="Icon 2" />
        {/* Add more language icons here */}
      </div>
    </div>
  );
};

export default Home;
