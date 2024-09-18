import 'react-notifications/lib/notifications.css';
import {useState, useEffect} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  // let [todoList, setTodoList] = useState([]);

  // Get data from localStorage if available, otherwise set an empty array
  let [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todoList');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //if we use localStorage then useEffect must be needed
  useEffect(() => {
    // Save the todoList to localStorage whenever it changes
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]); // Runs every time todoList changes

  let [currentTodo, setCurrentTodo] = useState('');

  let showErrorNotification = (message) => {
    NotificationManager.error(message);
  }

  let saveTodoList = (event) => {
    event.preventDefault();
    let todoData = event.target.todoData.value;
    let creationTime = new Date().toLocaleString();

    if (todoList.find(item => item.data === todoData)) {
      showErrorNotification(`${todoData} - This Data Already Exists.`);
    } else {
      let finalTodoData = [...todoList, { data: todoData, time: creationTime }];
      setTodoList(finalTodoData);
      setCurrentTodo('');
    }
  }

  let todo = todoList.map((value, index) => {
    return (
      <TodoDetails 
        todoData={value.data} 
        creationTime={value.time} 
        indexNumber={index} 
        todoList={todoList} 
        setTodoList={setTodoList} 
        key={index} 
      />
    );
  });

  return (
    <div className="App">
      <NotificationContainer />
      <div id="formDiv">
        <h1>ToDo List!</h1>
        <form id="addTodoForm" onSubmit={saveTodoList}>
          <input 
            type="text" 
            name="todoData" 
            id="todoText" 
            placeholder="Add your new ToDo..." 
            value={currentTodo} // Bind currentTodo to the input field
            onChange={(e) => setCurrentTodo(e.target.value)} // Update currentTodo when input changes
          />
          <input type="submit" name="submit" id="todoAdd" value="+" />
        </form>
        <ul id="todoUl">
          {todo}
        </ul>
      </div>
    </div>
  );
}

function TodoDetails({todoData, creationTime, indexNumber, todoList, setTodoList}){
  let [status, setStatus] = useState(false);
  let [isEditing, setIsEditing] = useState(false); // Track if the current item is being edited
  let [editValue, setEditValue] = useState(todoData); // Track the value in the input field while editing

  let showSuccessNotification = (message) => {
    NotificationManager.success(message);
  }

  let deleteTodoData = () => {
    setStatus(status===true ? false : false);
    let finalTodoData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalTodoData);
    showSuccessNotification("Deleted Successfully");
  }

  let saveEditedTodo = () => {
    let updatedTodoList = [...todoList];
    updatedTodoList[indexNumber].data = editValue; // Update the data of the current todo
    setTodoList(updatedTodoList);
    setIsEditing(false); // Exit edit mode after saving
    NotificationManager.success("Todo updated successfully.");
  }

  return (
    <>
      <li className='main_list'>
        {/* Toggle between showing the text or the input field when editing */}
        {isEditing ? (
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
        ) : (
          <span className={(status) ? 'checked' : ''} onClick={() => setStatus(!status)}>
            {indexNumber + 1}. {todoData} <br/>
          </span>
        )}

        {/* Show Edit or Save button based on isEditing */}
        {isEditing ? (
          <button onClick={saveEditedTodo} className='saveBtn'>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className='editBtn'>Edit</button>
        )}

        <button onClick={deleteTodoData} className='closeBtn'>x</button> {/* Close Button */}
      </li>
      <p className='timezone'>Created at: {creationTime}</p>
      </>
  );
}

export default App;