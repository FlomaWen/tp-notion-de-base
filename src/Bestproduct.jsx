const Best = ({productsProp}) =>{
    const tabProductsSort = productsProp.sort((a,b) => a.rating - b.rating)
    const bestproduct = tabProductsSort.slice(-1)[0]

    return(
        <>

            <section>
                <h2>Le best des best ! </h2>
                <article>
                    <h3>{bestproduct.title}</h3>
                    <p className="price">{bestproduct.price}€</p>
                </article>
            </section>
        
        </>
    )
}

export default Best