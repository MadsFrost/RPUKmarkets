import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
export default class List extends Component {
    render() {
    return (
        <div className="list">
        {this.props.Bool ? (
            <div className="list-group">
              {this.props.allData.map(i => (
                <li
                  key={uuid()}
                  onClick={() => this.props.showCard(i["Name"])}
                  className="list-group-item list-group-item-action"
                >
                  {i["Name"]}
                </li>
              ))}
            </div>
          ) : null}
        </div>
    )
    }
}



