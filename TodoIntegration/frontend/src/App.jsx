import { useEffect, useState } from 'react'
import { Axios } from './utils/axiosInstance';

function App() {
  const [todos, setTodos] = useState([]);
  
  const [newTodoText, setNewTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await Axios.get('/todo/allTodos');
      if (response.data.success) {
        const transformedTodos = response.data.data.map(todo => ({
          id: todo.id,
          name: todo.title, 
          success: todo.completed 
        }));
        setTodos(transformedTodos);
      }
    } catch (err) {
      console.error(`Error fetching todos: ${err.message}`);
    }
  };

  // Add new todo
  const handleAddTodo = async () => {
    if (!newTodoText.trim()) return;

    try {
      const response = await Axios.post('/todo', { title: newTodoText });
      if (response.data.success) {
        const newTodo = {
          id: response.data.data.id,
          name: response.data.data.title,
          success: response.data.data.completed || false
        };
        setTodos([...todos, newTodo]);
        setNewTodoText('');
      }
    } catch (err) {
      console.error(`Failed to add todo: ${err.message}`);
    }
  };

  // Delete todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await Axios.delete(`/todo/${id}`);
      if (response.data.success) {
        setTodos(todos.filter(todo => todo.id !== id));
        if (editingTodo?.id === id) {
          setEditingTodo(null);
        }
      }
    } catch (err) {
      console.error(`Failed to delete todo: ${err.message}`);
    }
  };

  // Edit todo
  const handleStartEdit = (todo) => {
    setEditingTodo(todo);
    setEditText(todo.name);
  };

  const handleSaveEdit = async () => {
    if (!editText.trim()) return;

    try {
      const response = await Axios.patch('/todo/edit', {
        id: editingTodo.id,
        title: editText
      });
      
      if (response.data.success) {
        setTodos(todos.map(todo => 
          todo.id === editingTodo.id ? 
          { ...todo, name: editText } : todo
        ));
        setEditingTodo(null);
        setEditText("");
      }
    } catch (err) {
      console.error(`Failed to update todo: ${err.message}`);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const response = await Axios.patch(`/todo/success/${id}`);
      if (response.data.success) {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, success: true } : todo
        ));
      }
    } catch (err) {
      console.error(`Failed to update todo status: ${err.message}`);
    }
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter') {
      if (action === 'add') {
        handleAddTodo();
      } else if (action === 'edit') {
        handleSaveEdit();
      }
    } else if (e.key === 'Escape' && action === 'edit') {
      setEditingTodo(null);
      setEditText("");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-white/80">
      <div className="bg-black text-2xl text-white px-5 py-2">Todo List</div>
      <div className='flex flex-col justify-center object-center'>
        {/* add todo */}
        <div className='flex flex-row justify-center'>
          <div className='border-2 p-3 w-100 mt-10 rounded-lg shadow-xl'>
            <div className='flex flex-col'>
              <input 
                type='text' 
                placeholder='title of todo' 
                className='outline-0 pl-2 text-lg text-black font-medium'
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'add')}
              />
            </div>
          </div>
          <button 
            className='p-3 border-2 border-green-600 mt-10 items-center rounded-lg ml-5 w-15 hover:bg-green-600 hover:text-white text-green-600 font-bold duration-300'
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        
        <div className="space-y-4 p-5 bg-emerald-200 mt-5 rounded-lg w-120 max-h-100 overflow-y-scroll mx-auto">

          {todos.map((todo) => (
            <div key={todo.id} className="flex flex-row justify-between bg-white p-3 rounded-lg">
              <div className='flex flex-row'>
                <div 
                  className={`${todo.success ? 'bg-green-400' : 'bg-red-400'} rounded-full w-8 h-8 my-auto cursor-pointer`}
                  onClick={() => toggleStatus(todo.id)}
                >
                </div>
                <div className='break-words max-w-xs w-61 p-1.5 px-3'>
                  {editingTodo?.id === todo.id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'edit')}
                      className="w-full outline-0 border border-gray-300 rounded px-2"
                      autoFocus
                    />
                  ) : (
                    <span className={todo.success ? 'line-through text-gray-500' : ''}>
                      {todo.name}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {editingTodo?.id === todo.id ? (
                  <button 
                    className="bg-green-600 mt-1 w-15 py-1 ml-2 text-white font-bold text-center rounded-lg hover:bg-green-500 duration-300 transition"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                ) : (
                  <button 
                    className="bg-gray-700 mt-1 w-15 py-1 ml-2 text-white font-bold text-center rounded-lg hover:text-white hover:bg-gray-500 duration-300 transition"
                    onClick={() => handleStartEdit(todo)}
                  >
                    Edit
                  </button>
                )}
                <button 
                  className="bg-red-700 mt-1 w-10 py-1 ml-2 text-white font-bold text-center rounded-lg hover:text-white hover:bg-red-500 duration-300 transition"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App