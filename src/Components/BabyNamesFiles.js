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

    const filterBabySearch = allBabyNames.filter((filteredName) => {
      if (filteredName.name.toLowerCase().includes(handleBabySearchCase)) {
        return filteredName;
      }
    });
    setNames(filterBabySearch);
    if (handleBabySearch === "") {
      setNames(allBabyNames);
    }
  };

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

  return (
    <div>
      <BabyNamesInput handleBabySearch={handleBabySearch} />
      <FavouriteNames
        favorites={favorites}
        handleUnClickFavorite={handleUnClickFavorite}
      />
      <BabyNames
        unSortedNames={names}
        handleFavouriteNames={handleFavouriteNames}
      />
    </div>
  );
};

export default AllBabyNamesFunction;
