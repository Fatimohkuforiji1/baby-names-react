import React from 'react'
import { FaMale, FaFemale } from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5";


const BabyNamesInput = (props) => {


    return (
      <div className="babyNameInput">
        <input
          className="input"
          onChange={props.handleBabySearch}
          placeholder="Search for a name"
        ></input>
        <div className="buttonDiv">
          <button onClick={props.handleAllSelect} className="all">
            <IoMaleFemale className="classIcon" />
          </button>
          <button onClick={props.handleMaleSelect} className="male">
            <FaMale className="classIcon" />
          </button>
          <button onClick={props.handleFemaleSelect} className="female">
            <FaFemale className="classIcon" />
          </button>
        </div>
      </div>
    );
}

export default BabyNamesInput;
