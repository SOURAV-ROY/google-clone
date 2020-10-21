import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {

    const [{term}, dispatch] = useStateValue();

    //LIVE API Call *****************************************
    const {data} = useGoogleSearch(term);

    // https://cse.google.com/cse/create/new
    console.log(data);

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
