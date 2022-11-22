import React from 'react';

export const SearchBar = ( {type, placeholder, classList, onChange, value} ) => {
    return <input 
        type={type} 
        placeholder={placeholder} 
        className={classList}
        onChange={onChange}
        value={value}
    />
}