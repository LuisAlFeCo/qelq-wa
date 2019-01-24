
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

function noMatchView() {
	return (
		<div className="container">
			<div className="row" style={{marginBottom: '3rem'}}>
				<h3 style={{marginTop: '2rem'}}>
					<b>Error 404 - Página no encontrada</b>
				</h3>
			</div>
			<div className="row">
				<h5><b>Esta no es la página web que está buscando</b></h5>
				<p>¡Lo sentimos!, La página que buscas no se ha encontrado en este servidor. Puede deberse a que la dirección se ha escrito incorrectamente o a que la página ha sido cancelada. Revisa la dirección URL e inténtalo de nuevo.</p>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default noMatchView;

/****************************************************************************************/
