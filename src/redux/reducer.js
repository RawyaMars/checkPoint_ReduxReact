import { ADD, DELETE, FINISH } from "./actionTypes"
const data={
    todos:[
      {id:0,action:"Buy groceries for next week" ,stat:false},
      {id:1,action:"Renew car insurance" ,stat:false},
      {id:2,action:"Sign up for online course" ,stat:false}
  
    ]
  }

export const reducer=(state=data,{ type, payload })=>{
    switch (type) {
        
        case ADD:
            console.log(payload);
            return{
                ...state,todos:[...state.todos,payload]
            };
        case DELETE:
            //const { id} = action.payload;
            return{
                ...state,todos:state.todos.filter(el=>el.id!==payload.id)
            };
        case FINISH:
            //const { id} = action.payload;
            return{
                ...state,todos:state.todos.map(el=>el.id===payload.id?{...el,stat:!el.stat}:el)
            }    
            
    
        default:
           return state
    }
}