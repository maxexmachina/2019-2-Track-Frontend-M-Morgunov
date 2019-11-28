import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MessageForm.css';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { onFormChange } = this.props;
		onFormChange(event.target.value);
	}

	handleSubmit(event) {
		const { onMessageSubmit } = this.props;
		onMessageSubmit(event.target.value);
		event.preventDefault();
	}

	render() {
		const { formValue } = this.props;
		return (
			<form
				className="container"
				onSubmit={this.handleSubmit}
				style={styles.MessageForm}
			>
				<input
					type="text"
					value={formValue}
					onChange={this.handleChange}
					placeholder="Введите сообщение"
				/>
				<div className="attachmentButton">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244s3.071 1.171 4.242 0l8.507-8.464c.977-.977 1.464-2.256 1.464-3.536 0-2.769-2.246-4.999-5-4.999-1.28 0-2.559.488-3.536 1.465l-10.627 10.583c-1.366 1.368-2.05 3.159-2.05 4.951 0 3.863 3.13 7 7 7 1.792 0 3.583-.684 4.95-2.05l10.05-10.075-1.414-1.414z" />
					</svg>
				</div>
			</form>
		);
	}
}

MessageForm.propTypes = {
	onFormChange: PropTypes.func.isRequired,
	onMessageSubmit: PropTypes.func.isRequired,
	formValue: PropTypes.string.isRequired,
};

export default MessageForm;
