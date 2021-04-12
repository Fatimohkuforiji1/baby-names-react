import React, { useState } from "react";
import allBabyNames from "../data.js/allBabyNames.js";
import BabyNames from "./BabyNames.js";
import BabyNamesInput from "./BabyNamesInput";
import FavouriteNames from "./FavouriteNames.js";

const AllBabyNamesFunction = () => {
  const [names, setNames] = useState(allBabyNames);
  const [favorites, setFavorites] = useState([]);

  const handleBabySearch = (event) => {
    const handleBabySearchCase = event.target.value.toLowerCase();
    if(handleBabySearchCase === ""){
      const filterBabySearch = allBabyNames.filter((filteredName) => {
     
        return containsObject(filteredName, favorites);
    });
    setNames(filterBabySearch)
    } else{ 
      const nameSearched = allBabyNames.filter((babyName)=>{
         if (babyName.name.toLowerCase().includes(handleBabySearchCase)) {
           return containsObject(babyName, favorites);
        }})
        setNames(nameSearched);
       }
    }
  
  
function containsObject(object, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === object) {
            return false;
        }
    }

    return true;
}

  const handleFavouriteNames = (event) => {
    const favouriteNameSelect = event.target.innerText;
    const filteredSearch = names.filter((filterSearch) => {
      return filterSearch.name === favouriteNameSelect;
    });
    setFavorites([...favorites, ...filteredSearch]);

    const notFavourite = names.filter((filterNotFavourite) => {
      return filterNotFavourite.name !== favouriteNameSelect;
    });
    setNames(notFavourite);
  };

  const handleUnClickFavorite = (event) => {
    const handleUnClickFavEl = event.target.innerText;
    console.log(handleUnClickFavEl);
    const tempNames = [];
    const favNamesRemains = favorites.filter((favoriteRemain) => {
      if (favoriteRemain.name === handleUnClickFavEl) {
        tempNames.push(favoriteRemain);
      } else {
        return favoriteRemain.name !== handleUnClickFavEl;
      }
    });
    setFavorites(favNamesRemains);
     setNames([...names, ...tempNames]);
  };

  const handleAllSelect = (event)=>{
    const genderSelected = event.target.parentNode.childNodes;
     genderSelected.forEach((list) => {
       if (list.classList.contains("all")){
         (list.classList.add("active"))
       }else {
         list.classList.remove("active")
       }
     });
    const getButtons = allBabyNames.filter((babyName)=>{
      return containsObject(babyName, favorites)
    })
    setNames(getButtons)
  }

   const handleMaleSelect = (event) => {
    const genderSelected = event.target.parentNode.childNodes;
    genderSelected.forEach((list) => {
      if (list.classList.contains("male")) {
        list.classList.add("active");
      } else {
        list.classList.remove("active");
      }
    });
    const getButtons = allBabyNames.filter((babyName) => {
      if(babyName.sex === "m"){
      return containsObject(babyName, favorites);
      }
    });
    setNames(getButtons);
  }
   const handleFemaleSelect = (event) => {
     const genderSelected = event.target.parentNode.childNodes;
     genderSelected.forEach((list) => {
       if (list.classList.contains("female")) {
         list.classList.add("active");
       } else {
         list.classList.remove("active");
       }
     });
     const getButtons = allBabyNames.filter((babyName) => {
       if (babyName.sex === "f") {
         return containsObject(babyName, favorites);
       }
     });
     setNames(getButtons);
   };

  return (
    <div>
      <BabyNamesInput
        handleBabySearch={handleBabySearch}
        handleAllSelect={handleAllSelect}
        handleMaleSelect={handleMaleSelect}
        handleFemaleSelect={handleFemaleSelect}
      />
      <FavouriteNames
        favorites={favorites}
        handleUnClickFavorite={handleUnClickFavorite}
      />
      <BabyNames
        unSortedNames={names}
        handleFavouriteNames={handleFavouriteNames}
      />
    </div>
  )

}
export default AllBabyNamesFunction;
