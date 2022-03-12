import React from 'react';
import "../../styles/styles.css";
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            bookdata:[]
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

                <form onSubmit={this.handleSubmit} className='mainform'>
                    <label>Enter a Search Term</label>
                    <input type='text' onChange={this.handleChangeSearch} value={this.state.search} name='search' />
                    <button type="submit" onClick={this.handleSubmit}>Search</button>

                </form>
            </section>    
        )
    }
}