
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

import IconMain from '../../../both/components/icons/icon-main.jsx';

/****************************************************************************************/

function guestHomeView() {
	return (
		<div>
			<div className="guest-cover-container">
				<div className="guest-cover-left">
					<IconMain/>
					<h1>Transforma tu forma de trabajar</h1>
					<p>Qelq puede ayudarte a colaborar mejor con tu equipo y sacar adelante tus proyectos independiente del puesto o departamento en el que trabajes.</p>
					<Link className="guest-cover-btn" to="/registro">Regístrate para comenzar</Link>
				</div>
				<div className="guest-cover-right">
					<img
						src="https://www.studiopress.com/wp-content/themes/studiopress_2017_rt/images/svgs/home/sites.png"
						alt="">
					</img>
				</div>
			</div>
			<div className="guest-home-ad">
				<h3>
					El eje que reúne a tu equipo y guía tu trabajo
				</h3>
				<p>
					Qelq es el lugar donde colaboras con tu equipo, donde puedes encontrar fácilmente la información que necesitas para tus proyectos e integrar todas las herramientas que usas para hacer tu trabajo.
				</p>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default guestHomeView;

/****************************************************************************************/
