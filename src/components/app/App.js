import { Component } from 'react';
import CoffeeHeader from '../coffee-header/coffee-header';
import About from '../about/about';
import Line from '../line/line';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'aromistico Coffee 1 kg' , country: 'brazil' , price: 6.99, src: `"../app/images/coffee-item-brazil.png"`, id: 1},
        {name: 'barostico Coffee 1 kg' , country: 'kenya', price: 6.99, src: `"../app/images/coffee-item-brazil.png"`,  id: 2},
        {name: 'farostico Coffee 1 kg' , country: 'columbia' , price: 6.99, src: `"../app/images/coffee-item-brazil.png"`, id: 3},
        {name: 'marostico Coffee 1 kg' , country: 'brazil' , price: 6.99, src: `"../app/images/coffee-item-brazil.png"`, id: 4},
        {name: 'aromistico Coffee 1 kg' , country: 'brazil' , price: 6.99, src: `"../app/images/coffee-item-brazil.png"`, id: 5},
        {name: 'aromistico Coffee 1 kg' , country: 'brazil' , price: 6.99, src: `"../app/images/coffee-item-brazil.png"`, id: 6}
      ],
      term: '',
      filter: ''
    }
    this.maxId = 4;
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }  
    return items.filter(item => { 
        return item.name.indexOf(term) > -1 
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

filterPost = (items, filter) => {
  switch (filter) {
    case 'brazil': 
           return items.filter(item => item.country === 'brazil');
    case 'kenya':
          return items.filter(item => item.country === 'kenya');
    case 'columbia':
          return items.filter(item => item.country === 'columbia');
    default:
      return items
  }
}

onFilterSelect = (filter) => {
    this.setState({filter});
}

render() {
  const {data, term, filter} = this.state;
  const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="App">
            <CoffeeHeader/>
        <div className='App_about'>
            <About/>
        </div>
        <div className='App_line'>
            <Line/>
        </div>
        <div className='search-panel'>
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <CoffeeList data={visibleData}/>
        <Footer/>
      </div>
    );
  }
}
export default App;
