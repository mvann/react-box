import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import './index.css';

ReactDOM.render(
	<Box content={[['a','z','r'],['b'],['c','1']]} />,
	document.getElementById('root')
);
