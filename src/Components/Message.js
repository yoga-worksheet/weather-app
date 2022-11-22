import React from 'react';

export const Message = ({ errorMessage }) => {
    return <p className="m-1 vertical bold red-text">{ errorMessage }</p>
}