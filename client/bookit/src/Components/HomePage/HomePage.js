import React from "react";
import BookListPage from "../BookListPage/BookListPage";
import "../../styles/styles.css"

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
            subject: ''
        }
    }

    handleChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSearchClick = (event) => {
        this.setState({
            searchBy: event.target.value
        })
        
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleChangeSearch();
        console.log(this.handleChangeSearch)
    }

    fetchBookDetails() {
        let searchTerm = this.state.search;
        let search = this.state.searchBy;
        console.log(searchTerm)
        console.log(search)
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '+' + searchTerm)
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
        .then(response => response.json())
        .then(result => {
            this.setState({
                bookData: result.items
            })
        })
    }

    componentDidMount() {
        this.fetchBookDetails();
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    

    render() {

        return(
            <section>

                <form onSubmit={this.handleSubmit} className='mainform'>
                    <label>Enter a Search Term</label>
                    <input type='text' onChange={this.handleChangeSearch} value={this.state.search} name='search' />
                    <button type="submit" onSubmit={this.handleSubmit}>Search</button>
                </form>
            
            <div className="middle">
                <form className="sidebar">
                    <label>What Would You Like to Search By?</label>
                    <label>Author</label>
                    <label className="switch">
                        <input type='checkbox' value='Author' onClick={this.handleSearchClick}/>
                        <span className="slider round"/>
                        </label>
                    <label>Subject</label>
                    <label className="switch">
                        <input type='checkbox' value='Subject' onClick={this.handleSearchClick} />
                        <span className="slider round"/>
                    </label>
                       
                </form>
                
                <div className="List">
                <h1>Books</h1>
                <hr />
                {this.state.bookData.map((books) =>
                <div className="bookList">
                    <BookListPage
                         author = {books.volumeInfo.authors}
                         title= {books.volumeInfo.title}
                         price= {books.saleInfo.listPrice}
                         pageCount= {books.volumeInfo.pageCount}
                         subject= {books.volumeInfo.categories}
                         description = {books.volumeInfo.description}
                         publishedYear = {books.volumeInfo.publishedDate}
                         id = {books.id}
                    />
                </div>
                
                )}
                </div>
                
                </div>
            </section>
        )
    }
}