import React from "react";
import SearchIcon from "./search.svg"

const Input = ({searchTerm_Prop,setSearchTermProp,searchMoviesProp})=>{
    return(
        <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm_Prop}
          onChange={(e) => {
            setSearchTermProp(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => {
            searchMoviesProp(searchTerm_Prop);
          }}
        />
         </div>
    )
}

export default Input;