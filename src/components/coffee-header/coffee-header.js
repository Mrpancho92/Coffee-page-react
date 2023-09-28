import logo from './images/coffee-shop.png';
import "./coffee-header.css";

const CoffeeHeader = () => {
    return (
        <div className="coffee-header">
            <img className='logo' src={logo} alt="shelves with coffee"/>
            <div className='logo_header'>
                <img src={require("./images/coffee-beans.png")} alt="coffee beans" />
            </div>
            <nav className='nav'>
                <a href='1'>Coffee house</a>
                <a href='1'>Our coffee</a>
                <a href='1'>For your pleasure</a>
            </nav>
            
            <div className='text_header'>
                <p>Our Coffee</p>
            </div>

        </div>
        
    )
}

export default CoffeeHeader;