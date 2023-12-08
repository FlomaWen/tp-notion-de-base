const Header = () =>{
    return(
        <div className="header">
            <nav className="navbar">
                    <ul>
                        <a href="/">                
                            <div className="logo-image-Header">
                                <img src="https://upload.wikimedia.org/wikipedia/fr/archive/7/7d/20211212183338%21Logo_US_Dax_Rugby_Landes_-_2018.svg" width="45px" height="45px" alt="USD"/>
                            </div>
                        </a>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/articles">Articles</a>
                    </li>
                    <li>
                        <a href="/boutique">Boutique</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    </ul>
            </nav>
      <h1 className="title">TP NOTIONS DE BASE REACT</h1>
    </div>
    )
}
export default Header