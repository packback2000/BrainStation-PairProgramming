import axios from "axios";
import { Component } from "react";
import ListItem from "../ListItem/ListItem";
import "../../styles/styles.css"

export default class FilteredList extends Component {
  state = {
    searchData: [],
    searchString: "dirty work",
    ratingRange:{min: 0, max:10},
    priceRange:{min: 0, max:10},
    ratingFilter: 0,
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

  getSearchData = () => {
    axios
      .get(`http://localhost:8080/search/${this.state.searchString}`)
      .then((res) => {
        const searchResults = res.data;
        this.setSearchData(searchResults);
      });
  };

  rangeChangeHandler = (event) =>{
      console.log(event);
      this.setRatingFilter(event.target.value);
  }

  componentDidMount(){
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
        <div className="middle">
        <input type="range" onChange={this.rangeChangeHandler} min={this.state.ratingRange.min} max={this.state.ratingRange.max} value={this.state.ratingFilter} className="slider" id="ratingRange"></input>
        
        <form className="sidebar">
                    <label>Filter By</label>
                   <br></br>
                   <br></br>
                   <label>Ratings</label>
                    <label className="switch">
                        <input type='checkbox' value='Ratings' onClick={this.searchByRatingNumber}/>
                        <span className="slider round"/>
                        </label>
                    <label>Average Rating 4+</label>
                    <label className="switch">
                        <input type='checkbox' value='Average Rank' onClick={this.searchByAverageRating} />
                        <span className="slider round"/>
                    </label>
                </form>
        </div>
        {this.state.searchData.filter(result => result.rating >= this.state.ratingFilter).map((result, index) => (
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
