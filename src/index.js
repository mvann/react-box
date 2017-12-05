import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import './index.css';

a = {nameFirst: "Doug", nameLast: "Frie"};

ReactDOM.render(
	<Box content={[[a,a,a],[a],[a,a]]} />,
	document.getElementById('root')
);
