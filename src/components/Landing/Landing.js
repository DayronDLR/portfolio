import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <ul>
              <li>
                <a href={this.landingData.twitter} target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
                </a>
              </li>
              <li>
                <a href={this.landingData.telegram} target='_blank'>
                  <FontAwesomeIcon icon={faTelegram} color="#2CA5E0" />
                </a>
              </li>
              <li>
                <a href={this.landingData.linkedin} target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
                </a>
              </li>
              <li>
                <a href={this.landingData.github} target='_blank'>
                  <FontAwesomeIcon icon={faGithub} color="#000" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
