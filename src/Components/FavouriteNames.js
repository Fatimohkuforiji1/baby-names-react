import React from 'react'
import BabyNames from './BabyNames';

const FavouriteNames = (props) => {
    return (
      <div>
        <p>Favourites: </p>
        <BabyNames
          unSortedNames={props.favorites}
          handleFavouriteNames = {props.handleUnClickFavorite}
        />
        <hr></hr>
      </div>
    );
}

export default FavouriteNames;
