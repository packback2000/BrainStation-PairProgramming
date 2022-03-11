

export default function BookListPage(props) {
    return(
        <section className="booklist">
           
                <p className="book-title">{props.title}</p>
                <p className="book-title">{props.author}</p>
                <a href='{props.url}'> </a>
                <img src={props.image} alt="book cover" />
                <p className="book-title">{props.description}</p>
                <p className="book-title">{props.rank}</p>
        </section>
    )
}