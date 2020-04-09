import React, { useEffect } from 'react';

import { HomeCarousel, Accordion, Tabs } from '../'

import { DataLoremText, DataLoremText2 } from '../../data';

export const HomePage = () => {
	useEffect(() => {
    window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<HomeCarousel />
			<div className="container">

				<h2 className="text-center decor decor-center">Tabs</h2>
				<Tabs data={DataLoremText} />

				<div className="row">
					<div className="col">
						<h2 className="text-center decor decor-center">Accordion</h2>
						<Accordion data={DataLoremText} />
					</div>
					<div className="col">
						<h2 className="text-center decor decor-center">Accordion Multiple</h2>
					<Accordion data={DataLoremText2} multiple={true} />
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}