import "./App.css";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchedWord: "" };
  }
  searchHandler = (event) => {
    this.setState({ searchedWord: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((robots) => this.setState({ robots: robots }));
  }

  render() {
    const { robots, searchedWord } = this.state;
    return !robots.length ? (
      <h1 className="tc f1">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox setSearchedWord={this.searchHandler} />
        <CardList
          robots={robots.filter((robot) => {
            return robot.name
              .toLowerCase()
              .includes(searchedWord.toLowerCase());
          })}
        />
      </div>
    );
  }
}
