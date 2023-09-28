import "./coffee-list-item.css";
import logo from '../app/images/coffee-item-brazil.png';

const CoffeeListItem = (props) => {
    const {name, country, price} = props;
    return (
        <div className="coffee-list-item">
            <div className='coffee-list-item_image'>
                <img src={logo} alt="coffee wrapper" />
            </div>
            <div className="coffee-list-item_name">
                <p>{name}</p>
            </div>
            <div className="coffee-list-item_contry">
                <p>{country}</p>
            </div>
            <div className="coffee-list-item_prise">
                <p>{price}$</p>
            </div>
        </div>
         
        
    )
}

export default CoffeeListItem;