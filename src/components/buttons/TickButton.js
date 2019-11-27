import React from 'react';
import tickStyles from '../../styles/buttons/TickButton.css';

function TickButton(props) {
	return (
		<div className="tick-button" style={tickStyles.TickButton}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
			</svg>
		</div>
	);
}

export default TickButton;
