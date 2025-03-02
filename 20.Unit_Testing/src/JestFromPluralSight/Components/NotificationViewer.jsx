import React, { Component } from 'react';
import { getNotificationService } from './NotificationService';

export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            count: -1
        }
    }
    async componentDidMount(){
      let {count}= await getNotificationService();
      this.setState({
          count
      })
    }
    render() {
        return (
           <section className="data-test-sectionHeading">
               <h1 className="data-test-count">
                   {this.state.count === -1? "Fetching data PleaseWait....": this.state.count}
               </h1>
           </section>
        )
    }
}
