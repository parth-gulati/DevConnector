import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/1.gif";
import img2 from "../../img/2.gif";
import img3 from "../../img/3.gif";
import img4 from "../../img/4.gif";
import img5 from "../../img/5.webp";
import img6 from "../../img/6.gif";
import img7 from "../../img/7.gif";
import ReactRotatingText from "react-rotating-text";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [img1, img2, img3, img4, img5, img6, img7],
    };
  }

  render() {
    return (
      <div
        className="landing"
        style={{
          backgroundImage: `url(${
            this.state.images[
              Math.floor(Math.random() * this.state.images.length)
            ]
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  className="display-3 mb-4 typewriter"
                  style={{ fontFamily: `Monospace, monospace` }}
                >
                  &lt; DevConnector &gt;
                </h1>
                <p className="lead" style={{ fontFamily: "Raleway" }}>
                  <ReactRotatingText
                    items={[
                      "Create a developer profile/portfolio.",
                      "Share Posts.",
                      "Get help from other developers.",
                      "Connect.",
                    ]}
                  />
                </p>
                <br />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
