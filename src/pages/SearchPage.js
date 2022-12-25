import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./searchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import BookIcon from "@mui/icons-material/Book";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = UseGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-image"
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
            alt="google"
          />
        </Link>
        <div className="searchPage-headerBody">
          <Search hidebuttons />
          <div className="searchPage-options">
            <div className="searchPage-options-left">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All </Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to="/image">Images </Link>
              </div>
              <div className="searchPage-option">
                <NewspaperIcon />
                <Link to="/newspaper">News </Link>
              </div>
              <div className="searchPage-option">
                <SlideshowIcon />
                <Link to="/slideshow">Videos </Link>
              </div>
              <div className="searchPage-option">
                <BookIcon />
                <Link to="/book">Books </Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/more">More </Link>
              </div>
            </div>
            <div className="searchPage-options-right">
              <div className="searchPage-option">
                <Link to="/setting">Settings </Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="serchPage-resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.searchTime}
            seconds)
          </p>

          {data?.items.map((item) => (
            <div className="searchPage-result">
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={item.link} target="_blank">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage-resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ✔
              </a>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                className="searchPage-resultTitle"
                href={item.link}
                target="_blank"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage-resultDescription">{item.snippet}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
