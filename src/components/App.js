import React from "react";
import Header from "../components/Header/Header";
import SearchBox from "./SearchBox/SearchBox";
import ResultContainer from "./ResultsConatiner/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

export default class App extends React.Component {
  state = {
    title: "Name it",
    imgExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    this.setState({
      imgExpanded: !inputText,
      suggestedNames: name(inputText),
    });
  };

  render() {
    return (
      <div>
        <Header imgExpanded={this.state.imgExpanded} name={this.state.title} />
        <SearchBox outputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}
