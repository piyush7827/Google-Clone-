import React from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { action } from "../reducer";

function Search({ hidebuttons }) {
  const [input, setInput] = useState("");
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: action.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hidebuttons ? (
        <div className="search-button">
          <Button
            onClick={search}
            type="submit"
            variant="outlined"
            style={{ textTransform: "capitalize" }}
          >
            Google Search
          </Button>
          <Button variant="outlined" style={{ textTransform: "capitalize" }}>
            I'm feeling lucky
          </Button>
        </div>
      ) : (
        <div className="search-buttons" style={{ display: "none" }}>
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
        </div>
      )}
      ;
    </form>
  );
}

export default Search;
