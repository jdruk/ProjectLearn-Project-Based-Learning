import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGlobe,
  faPalette,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

const Wrapper = styled.nav`
  background: transparent;
  background-repeat: repeat;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  padding-top: 1rem;

  .nav-linker {
    text-decoration: none;
    color: black;
  }
  .card-category {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 1rem;
  }
  .card-category:hover {
    transform: scale(1.025);
    transition: 0.7s;
  }
  .icon-container {
    padding: 0.7rem;
    font-size: 2rem;
    color: white;
    width: 5vw;
    border-radius: 1rem 0 0 1rem;
    background: #0f9d58;
  }
  .category {
    font-size: 1.5rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  @media only screen and (max-width: 1200px) {
    display: none !important;
    margin-left: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    .card-category {
      width: 80vw;
      margin-bottom: 0.7rem;
    }
    .icon-container {
      width: 3rem;
      font-size: 1.2rem;
    }
    .category {
      font-size: 1rem;
    }
  }
`;

export default function Categories() {
  return (
    <ProductConsumer>
      {value => {
        const { handleSearch } = value;
        return (
          <Wrapper className="row mb-4 d-flex flex-row justify-content-center align-items-center mx-auto">
            <div className="col-lg-auto col-12 d-flex flex-row justify-content-center align-items-center">
              <Link
                to="/"
                className="nav-linker"
                onClick={() => handleSearch("")}
              >
                <div className=" d-flex flex-column align-items-center">
                  <div
                    className="icon-container text-center"
                    style={{
                      borderRadius: "50%",
                      fontSize: "1rem",
                      width: "4.5rem"
                    }}
                  >
                    <FontAwesomeIcon icon={faRedo} />
                    <div
                      className="category"
                      style={{
                        fontSize: "1rem",
                        paddingLeft: 0,
                        paddingRight: 0
                      }}
                    >
                      Reset
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-auto col-12 d-flex flex-row justify-content-center align-items-center">
              <Link to="/programming" className="nav-linker">
                <div className="card-category d-flex flex-row align-items-center">
                  <div className="icon-container text-center">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <div className="category">Programming Lang.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-auto col-12 d-flex flex-row justify-content-center align-items-center">
              <Link to="/web-dev" className="nav-linker">
                <div className="card-category d-flex flex-row  align-items-center">
                  <div className="icon-container text-center">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className="category">Web Development</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-auto col-12 d-flex flex-row justify-content-center align-items-center">
              <Link to="/design" className="nav-linker">
                <div className="card-category d-flex flex-row align-items-center">
                  <div className="icon-container text-center">
                    <FontAwesomeIcon icon={faPalette} />
                  </div>
                  <div className="category">Design & UI/UX</div>
                </div>
              </Link>
            </div>
          </Wrapper>
        );
      }}
    </ProductConsumer>
  );
}
