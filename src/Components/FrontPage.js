import React from 'react';
import { SearchForm } from "./SearchForm";
import { Message } from "./Message";

export const FrontPage = ({ display, query, setQuery, errorMessage, setErrorMessage, search }) => {
    return (
        <div
            className={
                display
                    ? "front-page flex center column"
                    : "front-page hide"
            }
        >
            <h1 className="text-center">Weather App Using React</h1>
            <SearchForm 
                query={query}
                setQuery={setQuery}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                search={ search}
            />
            {
                errorMessage !== "" 
                ? <Message errorMessage={ errorMessage } /> 
                : ""
            }
            <p>
                Or check using your position{" "}
                <button type="button" className="borderless">
                    Click Here
                </button>
            </p>
        </div>
    )
}