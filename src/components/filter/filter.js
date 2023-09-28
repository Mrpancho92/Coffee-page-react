import "./filter.css";


const Filter = (props) => {
    const buttonsData = [
        { name: 'brazil', label: 'Brazil' },
        { name: 'kenya', label: 'Kenya' },
        { name: 'columbia', label: 'Columbia' }
    ];
  
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <>
            <div className="filter-text">
                <p>Or filter</p>
                </div>
            <div className="btn-group">
                {buttons}
            </div>
        </>
    )
}

export default Filter;
