import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-start">
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )
    }
}

export default Spinner
