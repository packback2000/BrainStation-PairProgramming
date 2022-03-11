

export default function BookListPage(props) {
    return(
        <section className="booklist">
           
                <p className="book-title">{props.title}</p>
                <p className='book-category'>{props.subject}</p>
                <p className="book-price">{props.publishedYear}</p>
            
        </section>
    )
}