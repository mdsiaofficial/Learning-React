import { useState } from "react"

function Todo_List() {
    const [tasks, setTasks] = useState(["eat", "sleep", "code", "repeat",]);
    const [newTask, setNewTask] = useState("");

    function handleInput(e) {
        setNewTask(e.target.value);
    }
    function addTask() {
        
    }
    function dropTask() {
        
    }
    function moveUp() {
        
    }
    function moveDown() {
        
    }
    
    return (
        <div className="todo-list">
            <h1>To-Do-List</h1>
            
            <div>
                <input type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInput} />
                <button onClick={addTask} className="add-button">Add Task</button>

            </div>

            <ol>
                {
                    tasks.map((el, i) => 
                        <li key={i}>
                            <span className="task">
                                {el}

                                <button onClick={dropTask} className="drop-task
                                "> Drop Task </button>
                                <button onClick={moveDown} className="move-down
                                "> Move Down </button>
                                <button onClick={moveUp} className="move-up
                                "> Move up </button>
                            </span>
                        </li>
                )}
            </ol>
        </div>
    )
}
export default Todo_List