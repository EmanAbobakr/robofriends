import "./App.css";
import { CardList } from "./CardList";
import { robots } from "./robots";
import { SearchBox } from "./SearchBox";
import { useState } from "react";

export const App = () => {
  const [searchedWord, setSearchedWord] = useState("");

  function searchHandler(name) {
    setSearchedWord(name.target.value);
  }

  return (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox setSearchedWord={searchHandler} />
      <CardList
        robots={robots.filter((robot) => {
          return robot.name.toLowerCase().includes(searchedWord.toLowerCase());
        })}
      />
    </div>
  );
};
