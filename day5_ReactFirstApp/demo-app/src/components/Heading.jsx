import React,{ Component } from "react";

class Heading extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Joseph"
        }
        this.handleonclick=this.handleonclick.bind(this)
    }
    handleonclick(){
        this.setState(
{
...this.state,name:"oliver"
}
        );
        
    }

    render() {
        return (
        <div>Heading, {this.props.marks}
        <h1>{this.state.name}</h1>
        <button onClick={this.handleonclick}>click</button>
        </div>
        )
    }
}

export default Heading