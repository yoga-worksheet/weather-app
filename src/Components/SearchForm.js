import React, {useState} from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';

export const SearchForm = ( {query, setQuery, errorMessage, setErrorMessage, search} ) => {

    return (
        <div className="search-form flex m-2 vertical">
            <SearchBar
                type="text"
                classList="search-bar"
                placeholder="Enter city name ... "
                onChange={ (event) => {
                    if (errorMessage !== "") setErrorMessage("");
                    setQuery(event.target.value);
                }}
                value={query}
            />
            <Button
                classList="label"
                type="button"
                onClick={search}
                text="Search"
            />
        </div>
    )
}