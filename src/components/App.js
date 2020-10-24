import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let list = ["Goa", "Darjeeling", "Lonavala"];
    return (
      <>
        <ol>
          {list.map((city, index) => (
            <li key={`location${index + 1}`}> {city} </li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
