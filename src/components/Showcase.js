import { useEffect, useState } from "react";

const Showcase = () => {
  const [counter, setCounter] = useState(0);
  const [sliderCounter, setSliderCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSliderCounter(sliderCounter + 1);
      if (sliderCounter >= 2) {
        setSliderCounter(0);
      }
    }, 5000);
  }, [sliderCounter]);

  return (
    <section className="showcase">
      <div className="showcase-row">
        <div className="showcase-col">
          <div className="slider">
            <div
              className="inner-slider"
              style={{
                transform: `translateX( ${-sliderCounter * 100 + "%"} )`,
              }}
            >
              <img src="./images/nft.png" alt="slide" />
              <img src="./images/nft-2.png" alt="slide" />
              <img src="./images/nft-3.png" alt="slide" />
            </div>
            <button
              className="slider-button slider-left-button"
              onClick={() => {
                setSliderCounter(sliderCounter - 1);
                if (sliderCounter <= 0) {
                  setSliderCounter(2);
                }
              }}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="slider-button slider-right-button"
              onClick={() => {
                setSliderCounter(sliderCounter + 1);
                if (sliderCounter >= 2) {
                  setSliderCounter(0);
                }
              }}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="showcase-col">
          <h1 className="showcase-col-title">FUD FREE MINT LIVE</h1>
          <p className="showcase-col-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eum
            ipsam ab est. Exercitationem quidem labore vitae nulla velit iste
            commodi porro culpa magni praesentium?
          </p>
          <p className="showcase-col-desc desc-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eum
            ipsam ab est. Exercitationem
          </p>
          <div className="mint">
            <div className="mint-input">
              <i
                className="mint-control fas fa-minus"
                onClick={() => {
                  setCounter(counter - 1);
                  if (counter <= 0) {
                    setCounter(0);
                  }
                }}
              ></i>
              <span>{counter}</span>
              <i
                className="mint-control fas fa-plus"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              ></i>
            </div>
            <button className="mint-button">Mint Now</button>
          </div>
          <p className="showcase-col-desc">
            No Discord. No utility. CCO . Reveal after mint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
