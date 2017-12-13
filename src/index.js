import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<App content={
		{
			columns: [
				{
					order: 0,
					boxes: [
						{
							order: 0,
							nameFirst: "George",
							nameLast: "Oxford"
						},
						{
							order: 1,
							nameFirst: "Michael",
							nameLast: "Vann"
						}
					]
				},
				{
					order: 1,
					boxes: [
						{
							order: 0,
							nameFirst: "ItsUr",
							nameLast: "Boi"
						}
					]
				},
				{
					order: 2,
					boxes: [
						{
							order: 0,
							nameFirst: "DJ",
							nameLast: "K"
						},
						{
							order: 1,
							nameFirst: "A",
							nameLast: "Cat"
						},
						{
							order: 2,
							nameFirst: "Bob",
							nameLast: "R"
						}
					]
				}
			]
		}
	} />,
	document.getElementById('root')
);
