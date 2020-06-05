import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Interests = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Some of my interests</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    Value investing
                    <br/>
                    Some of my favorite books:
                    <br/>
                    Financial Shenanigans - Howard M. Schilit
                    <br/>
                    Zero to One - Peter Thiel
                    <br/>
                    Quality of Earnings - Thornton L. O'Glove
                    <br/>
                    Good to Great - Jim Collins
                  </p>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Photography
                    <br/>
                    Nothing too serious, I use a Fuji XT-1. The photos you see on this site are taken with a 35mm lens.
                  </p>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Volleyball
                    <br/>
                    I love all sports, but this is one of the few I still play. A few years ago, I was part of a competitive league that held competitions across Canada and the United States of America.
                  </p>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
