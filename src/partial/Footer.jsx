import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <>
            <div className="footer">
                <div className="logo-image-Footer">
                    <img src="https://upload.wikimedia.org/wikipedia/fr/archive/7/7d/20211212183338%21Logo_US_Dax_Rugby_Landes_-_2018.svg" width="45px" height="45px" alt="USD"></img>
                </div>
                <p>© Copyright</p>
                <ul><li><Link to="../condition-de-ventes">CGV</Link></li></ul>
            </div>
        </>
    )
}

export default Footer