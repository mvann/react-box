import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import './index.css';

ReactDOM.render(
	<Box content={[[{nameFirst: "Doug", nameLast: "Frie"},{nameFirst: "Doug", nameLast: "Frie"},{nameFirst: "Doug", nameLast: "Frie"}],[{nameFirst: "Doug", nameLast: "Frie"}],[{nameFirst: "Doug", nameLast: "Frie"},{nameFirst: "Doug", nameLast: "Frie"}]]} />,
	document.getElementById('root')
);
