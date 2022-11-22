import React from "react";

export const Button = ({ type, classList, text, onClick }) => {
	return <button type={type} className={classList} onClick={onClick}>{text}</button>;
};
