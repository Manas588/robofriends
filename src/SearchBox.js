import React from "react";

const SearchBox = ({serchField, searchChange}) => {
    return(
        <div className="p2">
            <input className="pa3 ba b--blue bw1 bg-light-blue"
                    type="search"
                    placeholder="Search robots"
                    onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;