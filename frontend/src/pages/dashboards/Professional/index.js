import React from "react";
import ProfessionalsList from "./ProfessionalsLists";

class ProfessionalsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("I came here");
    return (
      <>
        <ProfessionalsList />
      </>
    );
  }
}

export default ProfessionalsComponent;
