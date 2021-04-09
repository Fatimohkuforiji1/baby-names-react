import React from 'react'


const BabyNamesInput = (props) => {


    return (
      <div className="babyNameInput">
        <input
          className="input"
          onChange={props.handleBabySearch}
          placeholder="Search for a name"
        ></input>
        <div className = "buttonDiv">
          <button className="all">All</button>
          <button className="male">Boys</button>
          <button className="female"> Female</button>
        </div>
      </div>
    );
}

export default BabyNamesInput;
