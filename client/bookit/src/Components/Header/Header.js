import React from 'react';
import "../../styles/styles.css";
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            bookdata:[],
            searchData: []
        }
    }

    handleChangeSearch = (event) => {
        this.setState({
            searchData: event.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let bookVar = this.state.bookData.filter((book) => {
                if (book.volumeInfo.title === (this.state.search)) {
                    return book
                }
            })
            this.setState({
              bookData: bookVar
            })
        
        }
    render() {
        return(
            <section className='header'>
                <Link to="/" >
                    <h1>BOOKIT</h1>
                </Link>
                <Link to="/search/StephenKing">
                    <p>Stephen King Books</p>
                </Link>
            </section>    
        )
    }
}