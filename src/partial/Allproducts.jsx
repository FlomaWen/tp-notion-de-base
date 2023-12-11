const Allproducts = ({productsProp}) => {
    return(

            <section>
                <h2>Tout nos produits</h2>
                    {productsProp.map((product)=>(
                        <article>
                            <h2>{product.title}</h2>
                            <p class="price">{product.price}€</p>
                        </article>
                    ))}

            </section>

    )
}

export default Allproducts