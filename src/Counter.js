import {Component} from 'react'

class Counter extends Component{


    state ={count :this.props.count}

    inc=()=>{
        const cnt =this.state.count
        this.setState({count: cnt+1})
    }
    dec=()=>{
        const ctn =this.state.count
        this.setState({count:ctn-1})
    }

    render(){
        return <div>
            <button onClick ={this.inc  }>+</button>
            <h1>{this.state.count}</h1>
            <button onClick ={this.dec}>-</button>
        </div>
    }   
}

export default Counter