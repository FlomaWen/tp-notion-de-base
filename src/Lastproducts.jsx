const LastProducts = ({productsProp}) =>{
    const PublishedArticles = productsProp.filter((product) => {
        return product.isPublished === true;
    });
    const LastArticlesPublished = PublishedArticles.slice(-5)
    return(
        <section>
            <h2>Retrouvez les dernieres articles !</h2>
            {LastArticlesPublished.map((article) =>{
                return(
                    <>
                        <article>
                            <h3>{article.title}</h3>
                            <p className="price">{article.price}€</p>
                        </article>
                    </>
                )
            })}
        </section>
    )
}

export default LastProducts