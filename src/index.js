import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import './index.css';

ReactDOM.render(
	<Box content={[['a'],['b'],['c']]} />,
	document.getElementById('root')
);
