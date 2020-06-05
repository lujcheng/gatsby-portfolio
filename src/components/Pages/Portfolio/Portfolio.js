import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import myschema from "../../../assets/images/portfolio/myschema-compressor.jpg";
import arima from "../../../assets/images/portfolio/arima-compressor.png";
import chatty from "../../../assets/images/portfolio/chattyapp-compressor.png";
import jungle from "../../../assets/images/portfolio/jungle-compressor.png";

import myschemaModal from "../../../assets/images/portfolio/modals/schemaql-compressor.gif";
import arimaModal from "../../../assets/images/portfolio/modals/arimadash-compressor.png";
import chattyModal from "../../../assets/images/portfolio/modals/chatty-compressor.gif";
import jungleModal from "../../../assets/images/portfolio/modals/jungle-comp.gif";


const Portfolio = (props) => {
  const stop = (event) => {
    event.stopPropagation()
  }
  const prop = (event) => {
    event.stopPropagation() 
    props.setBg(0)
  }
  const popup = () => {
    props.setBg(1)
  }
  return (
  <section id="portfolio">
    {props.bg == 1 && 
      <div id="popup-bg" style={{background: "black", width: '100vw', height:'100vh', position:'fixed', left:'0', top:'0', opacity:'0.7 ', zIndex:'10'}}> 
      </div>
    }
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>
          Check Out Some of My Projects.
        </h1>

        <div id="portfolio-wrapper" className="bgrid-halves cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={myschema} />
                <div className="overlay" onClick={popup}>
                  <div className="portfolio-item-meta">
                    <h5>
                      MySchemaQL
                    </h5>
                    <p>
                      Single-Page Application
                    </p>
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
                <div className="overlay" onClick={popup}>
                  <div className="portfolio-item-meta">
                    <h5>
                      Arima
                    </h5>
                    <p>
                      Datavisualization Dashboard
                    </p>
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
                <div className="overlay" onClick={popup}>
                  <div className="portfolio-item-meta">
                    <h5>
                      Chatty App
                    </h5>
                    <p>
                      An experiment with web sockets
                    </p>
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
                <div className="overlay" onClick={popup}>
                  <div className="portfolio-item-meta">
                    <h5>
                      Jungle Rails
                    </h5>
                    <p>
                      An e-commerce Platform
                    </p>
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

      <div id="modal-01" className="popup-modal mfp-hide" onClick={stop}>
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
          <a href="https://myschemaql.netlify.com/" onClick={prop}>Details</a>
          <a href="#portfolio" className="popup-modal-dismiss" onClick={prop}>Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide" onClick={stop}>
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
          <a href="http://arimainsights.com/" onClick={prop}>Details</a>
          <a href="#portfolio" className="popup-modal-dismiss" onClick={prop}>Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide" onClick={stop}>
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
          <a href="https://github.com/Renkinjutsu/Chatty-App" onClick={prop}>Details</a>
          <a href="#portfolio" className="popup-modal-dismiss" onClick={prop}>Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide" onClick={stop}>
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
          <a href="https://github.com/Renkinjutsu/jungle-rails" onClick={prop}>Details</a>
          <a href="#portfolio" className="popup-modal-dismiss" onClick={prop}>Close</a>
        </div>
      </div>

    </div>
  </section>
)};

export default Portfolio;
