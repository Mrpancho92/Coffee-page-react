import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import './coffee-list.css';

const CoffeeList = ({data}) => {

    const elements = data.map(item => {
        // const (id, ...itemProps) = item;
        return (
            <CoffeeListItem 
            key={item.id} 
            name={item.name} 
            country={item.country} 
            price={item.price}
            src={item.src}     
            />
            // Или через спрэд оператор 
            /* <EmployeesListItem {...item} /> */
        )
})
    
    return (
        <div className="app-list list-group">
            {elements}
        </div>
    )
}

export default CoffeeList;