import React from "react";
import { Wrapper, Button } from ".";

const LandingPage = () => {
  return (
    <Wrapper>
      <main>
        <div className="main-content">
          <div className="main-left">
            <h1 className="main-left-tile">
              Track and Reduce your Carbon Footprint
            </h1>
            <p className="main-left-text">
              Have you ever wondered how you can make the world a better place?
              Here’s a reminder that YOU matter and that it’s the small things
              that count.
            </p>
          </div>
          <div className="main-right">
            <img src="/image.svg" alt="recycle" />
          </div>
        </div>
        <div className="main-btn-container">
          <Button text="Get Started" />
        </div>
      </main>
    </Wrapper>
  );
};

export default LandingPage;
