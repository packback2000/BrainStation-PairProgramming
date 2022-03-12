import React from 'react';
import "../../styles/styles.css";
import { Link } from 'react-router-dom';

export default class Header extends React.Component{

    render() {
        return(
            <section className='header'>
                <Link to="/" >
                    <h1>BOOKIT</h1>
                </Link>
            </section>    
        )
    }
}