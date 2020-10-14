import React,{useState} from 'react'
import '../App.css'

const TodoForm = () => {
    const [input,setInput]=useState('')
    const [todos,setTodos]=useState([])
    
   
const  formSubmit=e=>{
    e.preventDefault();
    addItem(input);
    setInput('');

}
const  addItem=text=>{
    const valueItems=[...todos,text]
    setTodos(valueItems)
   
}

const deleteHandler=(value)=>{
    const items=todos.filter(currentValue=>currentValue!==value)
    setTodos(items)

}
const editHandler=(value)=>{

  

   

    
}
 


   
    return (

    <div className="container">
        <form onSubmit={formSubmit}>
         
           <input className="input" type="text" value={input}  name="text" onChange={(e)=>{
               setInput(e.target.value)
           }}/>
           <button  className="button" type="submit">Add</button>
     
         </form> 
        
         {
             todos.map((i,index)=>{
             return <div key={index} className="list">
                    
                    <span className="item">{i}</span>
                    <button onClick={()=>deleteHandler(i)}>Remove</button>
                    <button onChange={()=>editHandler(i)}>Edit</button>

                 </div>
             })
         }
         
      
    </div>  
        
    )
}

export default TodoForm
