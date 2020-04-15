import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg";
import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg";
import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg";
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg";
import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy.jpg";
import GirlModal from "../assets/images/portfolio/modals/m-girl.jpg";
import OrigamiModal from "../assets/images/portfolio/modals/m-origami.jpg";
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg";

import myschema from "../assets/images/portfolio/myschema.jpg";
import arima from "../assets/images/portfolio/arima.png";
import chatty from "../assets/images/portfolio/chattyapp.png";
import jungle from "../assets/images/portfolio/jungle.png";

import myschemaModal from "../assets/images/portfolio/modals/schemaql.gif";
import arimaModal from "../assets/images/portfolio/modals/arimadash.png";
import chattyModal from "../assets/images/portfolio/modals/chatty.gif";
import jungleModal from "../assets/images/portfolio/modals/jungle.gif";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Projects.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-halves cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={myschema} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>MySchemaQL</h5>
                    <p>Single-Page Application</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={arima} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Arima</h5>
                    <p>Datavisualization Dashboard</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={chatty} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Chatty App</h5>
                    <p>An experiment with web sockets</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={jungle} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Jungle Rails</h5>
                    <p>An e-commerce Platform</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

 
        </div>
      </div>

      <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={myschemaModal}
          alt=""
        />

        <div className="description-box">
          <h4>MySchemaQL</h4>
          <p>
            A single page Application for users to plan and visualize Entity-Relationship-Diagrams and interact with data
            using SQL queries
          </p>
          <span className="categories">
            <FaTag /> SPA, React, Netlify
          </span>
        </div>

        <div className="link-box">
          <a href="https://myschemaql.netlify.com/">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={arimaModal}
          alt=""
        />

        <div className="description-box">
          <h4>Arima Dashboard</h4>
          <p>
            Arima is an AI startup using Machine Learning to combine data from different sources into a single source of truth to provide Insights into Market Research. Arima provides a dashboard equipped with data visualization tools that allow users to depict trends, changes, and densities in the data. APIs are available for those that require a more integrated solution.
          </p>
          <span className="categories">
            <FaTag />Flask, React, Plotly, Material-UI, MySQL, Firebase, Google Cloud Platform, Docker
          </span>
        </div>

        <div className="link-box">
          <a href="http://arimainsights.com/">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={chattyModal}
          alt=""
        />

        <div className="description-box">
          <h4>Chatty App</h4>
          <p>
            A web application that allows users to choose their name and chat with others on the same local server
          </p>
          <span className="categories">
            <FaTag />React, Web Sockets, Express
          </span>
        </div>

        <div className="link-box">
          <a href="https://github.com/Renkinjutsu/Chatty-App">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={jungleModal}
          alt=""
        />

        <div className="description-box">
          <h4>Jungle Rails</h4>
          <p>
          An e-commerce platform created with ruby and rails, a Model-View-Controller framework. Created features like product categories, cart, checkout, orders, payment, reviews, and account management.
          </p>
          <span className="categories">
            <FaTag />Ruby on Rails, Active Record, Bcrypt, Stripe API
          </span>
        </div>

        <div className="link-box">
          <a href="https://github.com/Renkinjutsu/jungle-rails">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={FarmerboyModal}
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={GirlModal}
          alt=""
        />

        <div className="description-box">
          <h4>Girl</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={OrigamiModal}
          alt=""
        />

        <div className="description-box">
          <h4>Origami</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Illustration
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={RetrocamModal}
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
