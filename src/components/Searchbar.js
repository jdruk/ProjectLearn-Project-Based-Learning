import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import Background from "../img/sq1.png";
import Intro from "./Intro";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }
  state = {
    search: ""
  };
  updateSearch = event => {
    event.preventDefault();
    const query = event.target.value;
    this.setState(() => {
      return {
        search: query
      };
    });
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { handleSearch } = value;
          return (
            <SearchWrapper className=" mt-0">
              <Intro />
              {this.props.cond === "true" ? (
                <div className="title d-flex flex-column">
                  "I hear and I forget. I see and I remember. I do and I
                  understand."
                  <br />
                  <span className="text-right">-- Confucius</span>
                </div>
              ) : (
                <div className="search-bar d-flex align-items-center">
                  <span className="p-2">
                    <i className="fa fa-search nav-font"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search for a technology or a project. Eg. React"
                    value={this.state.search}
                    onChange={this.updateSearch}
                    class="input-form"
                  ></input>
                  <input
                    type="text"
                    placeholder="Eg. React"
                    value={this.state.search}
                    onChange={this.updateSearch}
                    class="input-form-mob"
                  ></input>
                  <Link to="/" className="ml-auto">
                    <button
                      type="button"
                      className="submit-btn"
                      onClick={() => handleSearch(this.state.search)}
                    >
                      Search
                    </button>
                  </Link>
                </div>
              )}
            </SearchWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const SearchWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
  padding-top: 6rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #0f9d58;
  background-image: url("${Background}");
  background-repeat: repeat;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
    }
    .title{
      font-size: 1.5rem;
      color: white;
    }
    .text-right{
      font-size: 1.3rem;
      text-align: right;
    }
  .search-bar {
    background: #e6e6e6;
    width: 40%;
    height: fit-content;
    border-radius: 0.8rem 0.9rem 0.9rem 0.8rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .nav-font {
    font-size: 1.4rem;
  }
  .navbar-navigation {
    list-style: none;
    display: block;
  }
  .input-form {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
  }
  .input-form-mob {
    width: 40%;
    background: transparent;
    border: none;
    display: none;
    outline: none;
  }
  .submit-btn {
    height: 3rem;
    padding: 0 1rem;
    border: none;
    background: #0f9d58;
    color: var(--mainWhite);
    border-radius: 0 0.8rem 0.8rem 0;
    outline: none;
  }
  @media only screen and (max-width: 1200px) {
    padding-bottom: 2rem;
  padding-top: 2rem;
    .search-bar {
      width: fit-content;
      margin-left: 2rem;
      margin-right: 2rem;
      max-height: 2.5rem;
    }
    .submit-btn{
      height: 2.5rem;
    }
    .input-form-mob{
      display: inline;
    }
    .input-form{
      display: none;
    }
    .title{
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      font-size: 1rem;
      color: white;
    }
    .text-right{
      font-size: 0.85rem;
      text-align: right;
      margin-left: 1.5rem;
      margin-right: 0rem;
    }
  }
`;
export default Searchbar;
