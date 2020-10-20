import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";

function Search({hideButtons = false}) {

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = sou => {
        sou.preventDefault();

        console.log('Click google search button>>>', input);

        history.push("/search");
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input
                    value={input}
                    onChange={sou => setInput(sou.target.value)}
                />
                <MicIcon/>
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button
                        className="search_buttonsHidden"
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button
                        className="search_buttonsHidden"
                        variant="outlined"
                    >I'm Feeling Lucky</Button>
                </div>
            )}

        </form>
    );
}

export default Search;
