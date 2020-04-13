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

const Testimonials = () => (
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
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;
