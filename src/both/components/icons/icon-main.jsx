
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class IconMain extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg version="1.0" viewBox="0 0 12 12" style={this.props.style} className={this.props.className}>
				<g><path d="M2 2v6c1.5 1.5 3.75 1 3.75 2h.5V4.5C6.25 3 3.5 3 2 2zm9 0C9.5 3 6.75 3 6.75 4.5V10h.5c0-1 2.25-.5 3.75-2z" overflow="visible"></path></g>
			</svg>
		);
	}
}

/****************************************************************************************/

export default IconMain;

/****************************************************************************************/
