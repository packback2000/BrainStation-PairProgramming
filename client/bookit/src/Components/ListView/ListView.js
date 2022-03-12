import axios from "axios";
import { Component } from "react";
import ListItem from "../ListItem/ListItem";
import Rating from "../Pricing/Rating";
import HomePage from "../HomePage/HomePage";
import "../../styles/styles.css"
import Pricing from "../Pricing/Pricing";

export default class ListView extends Component {
  state = {
    searchData: [],
    searchString: "dirty work",
    bookData: [],
  };

  setSearchData = (searchDataIn) => {
    this.setState({ searchData: searchDataIn });
  };

  setSearchString = (searchStringIn) => {
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
      if(book.rating >=4){
        console.log(book)
        return book
      }
    })
     this.setState({
       searchData:bookVar
     })
    }

  render() {
    
    return (
      <section className="searchList">
        <div className="test">
        <div className="put-to-side">
            <div className="middle">
                <form className="sidebar">
                    <label>Filter By</label>
                   <br></br>
                   <br></br>
                   <label>Ratings</label>
                    <label className="switch">
                        <input type='checkbox' value='Ratings' onClick={this.searchByRatingNumber}/>
                        <span className="slider round"/>
                        </label>
                    <label>Average Ranking 4+</label>
                    <label className="switch">
                        <input type='checkbox' value='Average Rank' onClick={this.searchByAverageRating} />
                        <span className="slider round"/>
                    </label>
                </form>
                </div>
                </div>
                </div>
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
              price={result.price}
            ></ListItem>
          ))}
        </div>
      </section>
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
