import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    render() {
        return (
            <>
                <div className="search-panel-text">
                <p>Looking for</p>
                </div>
                <input type="text"
                    className="search-input"
                    placeholder="staefert typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
            </>
        )
    }
}

export default SearchPanel;