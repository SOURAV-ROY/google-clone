import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";

function SearchPage() {

    const [{term}, dispatch] = useStateValue();

    return (
        <div className="searchPage">
            {/*<h1>This is search page WoW!!!!!</h1>*/}
            <div className="searchPage_header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage_results">

            </div>
        </div>
    );
}

export default SearchPage;
