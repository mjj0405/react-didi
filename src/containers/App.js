import React, { Component } from 'react';
// import Left from '../components/left'
// import Right from '../components/right'
// import Center from '../components/center'
import '../common/style/style.css'

function Left(props){
  
  return <div onClick={()=>{
    props.clickL()
  }}>左</div>
}

function Right(props){
  return <div onClick={()=>{
    props.clickR()
  }}>右</div>
}

function Center(props){
  return <div>
    <select name="" id="">
    {
      props.city.length>0 && props.city.map((v,i)=>{
        return  <option value="">{v}</option>
      })
    }
       
    </select>
  </div>
}

class App extends Component {
  constructor(){
    super()
    this.state={
      cities:['北京','天津','上海','广州','香港']
    }
    this.clickL=this.clickL.bind(this)
    this.clickR=this.clickR.bind(this)
  }

  clickL(){
      alert('点击用户按钮')
  }

  clickR(){
      window.confirm('用户信息')
  }

  render() {
    let {
      cities
    }=this.state
    return (
      <div className="App">
          <Left clickL={this.clickL} /><Center city={cities}/><Right clickR={this.clickR} />
      </div>
    );
  }
}

export default App;
