
import './App.css';
import Todos from './components/Todos';

import Navbar from './components/Navbar';
import AddToDo from './components/AddTodo';

const App = () => {
  return (
   <main>
      <h1>REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AddToDo/>
      <Todos />
   </main>
  )
}

export default App