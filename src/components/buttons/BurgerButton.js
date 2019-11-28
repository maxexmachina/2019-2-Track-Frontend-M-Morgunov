import React from 'react';
import burgerStyles from '../../styles/buttons/BurgerButton.css';

export default function BurgerButton(props) {
	return (
		<div className="burger-button" style={burgerStyles.BurgerButton}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
			>
				<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
			</svg>
		</div>
	);
}
