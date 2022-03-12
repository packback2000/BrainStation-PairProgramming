import React from "react";
import BookListPage from "../BookListPage/BookListPage";
import "../../styles/styles.css"
import "../../styles/DarkMode.css";
import axios from 'axios';


export default class HomePage extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            bookData: [],
            searchedCategory: [],
            bookDetails: [],
            search: "",
            searchBy: '',
            title: '',
            author:'',
            price: '',
            description:'',
            publsihedDate: '',
            pageCount: '',
            subject: '',
            popularData: [],
            weeksOnList: '',
            image: '',
            rank: '',
            bookMap: [],
        }
    }

    handleChangeSearch = (event) => {
      this.setState({
          search: event.target.value
      })
  }
  
  handleSubmit = (e) => {
      e.preventDefault();
      let bookVar = this.state.bookData.filter((book) => {
        console.log(book)
              if (book.volumeInfo.title === (this.state.search)) {
                  return book
              }
          })
          this.setState({
            bookData: bookVar
          })
      
      }

    searchByRatingNumber = () => {
      let bookVar = this.state.bookData.filter((book) => {
            if(book.volumeInfo.ratingsCount >= 50){
                console.log(book)
                return book
        }
       })
       console.log(bookVar)
       this.setState({
         bookData: bookVar
       })
      }

    searchByAverageRating = () => {
      let bookVar = this.state.bookData.filter((book) => {
        if(book.volumeInfo.averageRating >=4){
          console.log(book)
          return book
        }
      })
       this.setState({
         bookData:bookVar
       })
    }

    fetchBookDetails() {
       axios.get("https://www.googleapis.com/books/v1/volumes?q=stephen%20king+author")
       .then((response) => {
           let allData = response.data.items;
           this.setState({
               bookData: allData
           })
       })
    }

    componentDidMount() {
        this.fetchBookDetails();
       // let searchString = this.state.search
       // axios.get('http://localhost:8080/search/' + searchString)
       // .then(response => console.log(response))
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }
      

    render() {

        return(
            <section className="test">

                <form onSubmit={this.handleSubmit} className='mainform'>
                    <label>Enter a Search Term</label>
                    <input type='text' onChange={this.handleChangeSearch} value={this.state.search} name='search' />
                    <button type="submit" onClick={this.handleSubmit}>Search</button>
                </form>
           
            <div className="all">
                <form className="sidebar">
                    <label>Filter By</label>
                   <br></br>
                   <br></br>
                   <label>Over 50 Ratings</label>
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


                

                <div className="books">
                {this.state.bookData.map((book) => 
                <div className="List">
                <BookListPage 
                id = {book.id}
                title = {book.volumeInfo.title}
                author = {book.volumeInfo.authors}
                category = {book.volumeInfo.categories}
                image = {book.volumeInfo.imageLinks.thumbnail}
                pageCount = {book.volumeInfo.pageCount}
                description = {book.volumeInfo.description}
                rating = {book.volumeInfo.averageRating}
                ratingCount = {book.volumeInfo.ratingsCount}
                />
                </div>
                )}
                </div>
                </div>
            </section>
        )
    }
}

/*
localhost/searchTest
*/