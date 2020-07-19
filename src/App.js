import React from 'react'
import './App.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      newvalue:"",
      list:[]
    }
  }
  additem(val){
    if(val==="") return 
    else{
      const list2=[...this.state.list]
      const newval={
        id:Date.now(),
        value:val,
        done:false
      }
      list2.push(newval)
      this.setState({
        list:list2,
        newvalue:""
      })
    }
  }
  updateitem(val){
    this.setState({newvalue:val})
  }
  deleteitem(id){
    const list2=[...this.state.list]
    const list3=list2.filter((item)=>item.id!==id)
    this.setState({
      list:list3
    })
  }
  render(){
    return(
       <div className="back">
         <header className="head">ToDo List...</header>
         <input className="task" 
         type="text" 
         placeholder="Add your new task"
         required
         onChange={e => this.updateitem(e.target.value)}
         value={this.state.newvalue}
         
         />
         <button className="Add"
         onClick={() => this.additem(this.state.newvalue)}
         disabled={!this.state.newvalue.length}
         >ADD</button>
         <div>
           <ul >
             {this.state.list.map((item)=>{
               return(
                <li  key={item.id} calssName="list">
                <input className="inp" type="checkbox"/>
               {item.value}
               <button className="Add" onClick={()=>{
                 const list2=[...this.state.list]
                 const list3=list2.filter(item2=>item2.id!==item.id)
                 this.setState({list:list3})
               }}>Delete Task</button>
               </li>

               )
             })}
             </ul>
         </div>
       </div>
    )
  }
}

export default App