
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class MainView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					
					<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1"/>
					
					<link rel="shortcut icon" href="/icons/favicon.ico"/>
					<link rel="stylesheet" type="text/css" href="/css/qelq.min.css"/>
				</head>
				<body>
					<div id="app-main"></div>

					<script src="/js/qelq.min.js"/>
				</body>
			</html>
		);
	}
}

/****************************************************************************************/

export default MainView;

/****************************************************************************************/
