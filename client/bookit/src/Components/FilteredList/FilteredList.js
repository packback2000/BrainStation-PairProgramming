import axios from "axios";
import { Component } from "react";
import ListItem from "../ListItem/ListItem";
import "../../styles/styles.css"

export default class FilteredList extends Component {
  state = {
    searchData: [],
    searchString: "dirty work",
    ratingRange: { min: 0, max: 10 },
    priceRange: { min: -1, max: 10 },
    ratingFilter: 0,
    priceFilter: -1,
  };

  setSearchData = (searchDataIn) => {
    this.setState({ searchData: searchDataIn });
  };

  setSearchString = (searchStringIn) => {
    this.setState({ searchString: searchStringIn });
  };

  setRatingRange = (ratingDataIn) => {
    this.setState({ ratingRange: ratingDataIn });
  };

  setPriceRange = (priceDataIn) => {
    this.setState({ priceRange: priceDataIn });
  };

  setRatingFilter = (ratingDataIn) => {
    this.setState({ ratingFilter: ratingDataIn });
  };

  setPriceFilter = (priceDataIn) => {
    this.setState({ priceFilter: priceDataIn });
  };

  getSearchData = () => {
    axios
      .get(`http://localhost:8080/search/${this.state.searchString}`)
      .then((res) => {
        const searchResults = res.data;
        const priceRange = this.getMinMaxPrice(searchResults);
        const ratingRange = this.getMinMaxRate(searchResults);
        this.setPriceRange({min: priceRange[0],max:priceRange[1]});
        this.setRatingRange({min: ratingRange[0],max:ratingRange[1]});
        this.setSearchData(searchResults);
      });
  };

  getMinMaxPrice = (data) => {
    return data.reduce((acc, val) => {
      acc[0] = acc[0] === undefined || val.price.amount < acc[0] ? val.price.amount : acc[0];
      acc[1] = acc[1] === undefined || val.price.amount > acc[1] ? val.price.amount : acc[1];
      return acc;
    }, []);
  };

  getMinMaxRate = (data) => {
    return data.reduce((acc, val) => {
      acc[0] = acc[0] === undefined || val.rating < acc[0] ? val.rating : acc[0];
      acc[1] = acc[1] === undefined || val.rating > acc[1] ? val.rating : acc[1];
      return acc;
    }, []);
  };

  rangeChangeHandler = (event) => {
    console.log(event);
    switch (event.target.id) {
      case "ratingRange":
        this.setRatingFilter(event.target.value);
        break;
      case "priceRange":
        this.setPriceFilter(event.target.value);
        break;
    }
  };

  componentDidMount() {
    this.getSearchData();
  }

  searchByRatingNumber = () => {
    let bookVar = this.state.searchData.filter((book) => {
          if(book.ratingcount >= 1){
              console.log(book)
              return book
      }
     })
     console.log(bookVar)
     this.setState({
       searchData: bookVar
     })
    }

  searchByAverageRating = () => {
    let bookVar = this.state.searchData.filter((book) => {
      console.log(book)
      if(book.rating >= 4){
        console.log(book)
        return book
      }
    })
     this.setState({
       searchData:bookVar
     })
    }

  render() {
    console.log(this.state.searchData);
    return (
      <div className="searchList">
        <input
          type="range"
          onChange={this.rangeChangeHandler}
          min={this.state.ratingRange.min}
          max={this.state.ratingRange.max}
          value={this.state.ratingFilter}
          className="slider"
          id="ratingRange"
        ></input>
        <input
          type="range"
          onChange={this.rangeChangeHandler}
          min={this.state.priceRange.min}
          max={this.state.priceRange.max}
          value={this.state.priceFilter}
          className="slider"
          id="priceRange"
        ></input>
        {this.state.searchData
          .filter(
            (result) =>
              result.rating >= this.state.ratingFilter &&
              result.price.amount >= this.state.priceFilter
          )
          .map((result, index) => (
            <ListItem
              key={result.id}
              id={result.id}
              title={result.title}
              rating={result.rating}
              ratingcount={result.ratingcount}
              price={result.price}
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
