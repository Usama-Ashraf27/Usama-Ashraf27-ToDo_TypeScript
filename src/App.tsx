
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
   // https://usama-ashraf27-to-do-type-script.vercel.app/
  )
}

export default App