import { useState } from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Input from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Tempe Mendoan", count: 1 },
    { title: "Melon", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank list");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 1) {
      //selama jumlah count > 0 maka lakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      //jika jumlah count < 0 maka hapus index yang di 0 kan
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCount = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCount;
  };

  return (
    <>
      <Navbar />

      <Container>
        <Input
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCount()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubtraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
