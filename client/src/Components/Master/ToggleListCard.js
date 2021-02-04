import React, { Component } from "react";
import List from '../List/List';
import Card from '../Card/Card';

export default class ToggleListCard extends Component {
  constructor(props) {
    super();
    this.state = {
      list: true,
      card: false,
      conditionalData: [],
      singleData: {},
      type: 'runs'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateData();
  } 
  

  updateData = () => {
    fetch(`/prices/${this.state.type}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({conditionalData: responseJson.data});
      });
   }
 

  showCard = data => {
    fetch(`/prices/${this.state.type}/${data}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({singleData: responseJson.data});
      });
      this.setState({
        list: false,
        card: true
      });
  };

  showList = () => {
    this.setState({
      card: false,
      list: true
    });
  };

  handleChange(event) {
    this.setState({type: event.target.value}, function () {
      this.updateData()
    });
  }



  render(){
      return(
        <div>
        <div className ="container">
            <select className="mb-3 form-select" aria-label=".form-select-lg example" defaultValue={this.state.type} onChange={(event) => this.handleChange(event)}>
              <option value="runs">
                Runs
              </option>
              <option value="equipment">
                Equipment (Guns)
              </option>
              <option value="vehicles">
                Vehicles
              </option>
              <option value="clothing">
                Clothing
              </option>
            </select>
          <List Bool={this.state.list} allData={this.state.conditionalData} showCard={this.showCard}/>
          <Card Bool={this.state.card} singleData={this.state.singleData} showList={this.showList}/>
        </div> 
        <div className="bg-imgTwo">
        </div>
        </div>
       )
    };
    


}