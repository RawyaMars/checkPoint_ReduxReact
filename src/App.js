import './App.css';
import ItemList from './components/ItemList';

function App() {
  //status=["uncomplete", "completed"]
  

// handleDelete=(id)=>this.setState({todos:this.state.todos.filter(el=>el.id!==id)});
// handleFinish=(id)=> {this.setState({todos:this.state.todos.map(el=>el.id===id?{...el,stat:!el.stat}:el)})}
// handleAdd=(newTask)=>{ 
//   this.setState({todos:[...this.state.todos,newTask]})}

    return (
      <div className='App'>
        <ItemList/>
      </div>
    )
  }
  export default App;