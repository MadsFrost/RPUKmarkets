import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card-container">
            {this.props.Bool ? (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                <h5 className="card-title">{this.props.singleData["Name"]}</h5>
                <p className="card-text">{"Type: " + this.props.singleData["Type"]}</p>
                <p className="card-text">{"Cost " + this.props.singleData["Cost"] + " £"}</p>
                <div onClick={() => this.props.showList()} className="btn btn-outline-success">
                    Back
                </div>
                </div>
            </div>
            ) : null}
            </div>
        )
    }
}
