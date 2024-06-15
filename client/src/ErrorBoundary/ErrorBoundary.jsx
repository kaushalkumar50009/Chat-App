import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Error occurred: {this.state.error.message}</h1>
                    {this.props.fallback}
                </div>
            );
        }
        return this.props.children;
    }
}