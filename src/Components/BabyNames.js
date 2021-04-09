


const BabyNames = (props) => {
    const sortedAllBabyNames = props.unSortedNames;
    sortedAllBabyNames.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});

     return(
         <div>
       {sortedAllBabyNames.map((babyName, index) => {
         if (babyName.sex === "f") {
         return <p onClick={props.handleFavouriteNames} key={index} className="female">
        {babyName.name}</p>
       }  else {
         return <p onClick={props.handleFavouriteNames} key={index} className="male">
        {babyName.name}
      </p>
       }
       })}
    
    </div>

    );
};

export default BabyNames;