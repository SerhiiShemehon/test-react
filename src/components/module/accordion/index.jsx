import React, { useState } from 'react';

import { AccordionItem } from './AccordionItem';

import './style.scss'


export const Accordion = ({
		data,
		multiple=false,
		customClass
	}) => {

	const [currentOpenTab, setOpenTab] = useState(0);
	const handleAccordionTab = (elemTab) => {
		setOpenTab(elemTab);
	}

	return (
		<div className={`accordion ${customClass}`}>
			{data && data.map( (accordionItem, i) => (
				multiple
					? <AccordionItem
						key={i}
						title={accordionItem.title}
						description={accordionItem.description}
						handleAccordion={handleAccordionTab}
					/>
					: <AccordionItem
						key={i}
						currentKey={i}
						currentOpenTab={currentOpenTab}
						title={accordionItem.title}
						description={accordionItem.description}
						handleAccordion={handleAccordionTab}
					/>
			) )}
		</div>
	)
}