import React from 'react'
import message from 'vanilla-antd-message'
import 'vanilla-antd-message/dist/style.css'
import './index.less'

class MessageDemo extends React.Component {
	render() {
		return (
			<main className="message-demo">
				<button className="info-btn" onClick={() => message.info('Info Message')}>info</button>
				<button className="success-btn" onClick={() => message.success('Success Message')}>success</button>
				<button className="error-btn" onClick={() => message.error('Error Message')}>error</button>
				<button className="warn-btn" onClick={() => message.warn('Warn Message')}>warn</button>
			</main>
		)
	}
}

export default MessageDemo