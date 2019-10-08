import React, {Component} from 'react';

class ErrorBoundary extends Component {
	state = { hasError: false }

	componentDidCatch(error, info) {
		//display fallback UI
		this.setState({hasError: true});
		// log the error to error reporting
	}

	render() {
		if (this.state.hasError) {
			// can render anything
			return <h3>There is an error!</h3>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

{/*
<ErrorBoundary>
	<MyComponent>
</ErrorBoundary>
	*/}
