import axios from "axios";
import { Component } from "react";
import ListItem from "../ListItem/ListItem";
import Rating from "../Pricing/Rating";

export default class ListView extends Component {
  state = {
    searchData: [],
    searchString: "dirty work",
  };

  setSearchData = (searchDataIn) => {
    this.setState({ searchData: searchDataIn });
  };

  setSearchStromg = (searchStringIn) => {
    this.setState({ searchString: searchStringIn });
  };

  getSearchData = () => {
    axios
      .get(`http://localhost:8080/search/${this.state.searchString}`)
      .then((res) => {
        const searchResults = res.data;
        this.setSearchData(searchResults);
      });
  };

  componentDidMount(){
      this.getSearchData();
  }

  render() {
    console.log(this.state.searchData);
    return (
      <div className="searchList">
        {this.state.searchData.map((result, index) => (
          <ListItem
            key={result.id}
            id={result.id}
            title={result.title}
            rating={result.rating}
            ratingcount={result.ratingcount}
            link={result.link}
            image={result.image}
          ></ListItem>
        ))}
      </div>
    );
  }
}

/* 
id: currentItem.id,
        rating: currentItem.volumeInfo.averageRating,
        ratingcount: currentItem.volumeInfo.ratingsCount,
        price: isForSale,
        title: currentItem.volumeInfo.title,
        subtitle: currentItem.volumeInfo.subtitle,
        searchTermInTitle: searchTermInTitle,
        author: currentItem.volumeInfo.authors,
        searchTermInAuthor: searchTermInAuthor,
        link: currentItem.saleInfo.buyLink,
        description: currentItem.volumeInfo.description,
        image: currentItem.volumeInfo.imageLinks.thumbnail,
*/
