import React from 'react'



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
            All
          </button>
          <button onClick={props.handleMaleSelect} className="male">
            Boys
          </button>
          <button onClick={props.handleFemaleSelect} className="female">
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4C_4E8DSTLi2y77VheF6bbmRkdOvgQCw0fhgZxWkDOO_D9fqGwzu2ouxcc6ZPiUs1UI&usqp=CAU"></img>
          </button> 
          
        </div>
      </div>
    );
}

export default BabyNamesInput;
