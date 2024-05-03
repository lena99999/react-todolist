import { SimpleGrid, Heading } from "@chakra-ui/react";
import { data } from "./data";
import { useState } from "react";
import AddTodoCard from "./AddTodoCard";
import Menu from "./Menu";
import SearchField from "./SearchField";
import AddTodoButton from "./AddTodoButton";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(data.filter((todo) => todo.userId === 2));
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [filterText, setFilterText] = useState("");

  const todoList = todos.filter((todo) =>
    showCompleted ? todo.completed : !todo.completed
  );

  const filteredTodos = todoList.filter((todo) =>
    todo.title.includes(filterText.toLowerCase())
  );

  function handleToggle(checked, selectedTodo) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, completed: checked } : todo
      )
    );
    //todo wait for item to be checked
  }

  function handleAddTodo(newTodo) {
    setTodos((todos) => [...todos, newTodo]);
  }

  return (
    <div className="App">
      <header>
        <Menu
          showCompleted={showCompleted}
          onShowCompleted={setShowCompleted}
        />
      </header>
      <Heading color="teal">
        Your {showCompleted ? "completed" : "open"} tasks ({todoList.length})
      </Heading>

      <SearchField filterText={filterText} onSetFilterText={setFilterText} />

      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing="40px"
        className="list"
      >
        {showAddTodo && !showCompleted && (
          <AddTodoCard onAddTodo={handleAddTodo} />
        )}

        <TodoList todoList={filteredTodos} onToggle={handleToggle} />
      </SimpleGrid>

      {!showCompleted && <AddTodoButton onShowAddTodo={setShowAddTodo} />}
    </div>
  );
}
