import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let list = [
      "Goa(India)",
      "Amsterdam(Netherlands)",
      "New York(USA)",
      "Darjeeling(India)",
      "Tokyo(Japan)",
      "Lonavala(India)"
    ];
    return (
      <>
        <ol key="listcity">
          {list.map((city, index) => (
            <li key={`location${index + 1}`}> {city} </li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
