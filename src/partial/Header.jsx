import { Link } from "react-router-dom"

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
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/condition-de-ventes">CGV</Link>
                        </li>
                        <li>
                            <Link to="/boutique">Boutique</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
            </nav>
      <h1 className="title">TP NOTIONS DE BASE REACT</h1>
    </div>
    )
}
export default Header