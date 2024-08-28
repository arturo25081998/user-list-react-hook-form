import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addToDo() {
    if (!text) {
      alert("no puedes agregar una tarea vacia");
      return;
    }
    setTodos([...todos, text]);
    setText("");
    //alert(text);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      addToDo();
    }
  }

  function removeToDo(index) {
    const filterToDos = todos.filter((_, idx) => idx !== index);
    setTodos(filterToDos);
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="w-full bg-blue-300 text-black font-light text-center text-2xl">
        To do app
      </div>
      <header className="w-full max-w-md flex flex-row gap-2 items-center mx-auto">
        <input
          type="text"
          className=" border border-blue-500 rounded p-2 w-full"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onKeyDown={onKeyDown}
        />
        <button
          className="bg-blue-300 text-black rounded p-2 size-10"
          onClick={addToDo}
        >
          +
        </button>
      </header>
      <section className="flex flex-col w-full max-w-md mx-auto gap-4">
        {todos.map((todo, index) => {
          return (
            <article
              key={`todo-${index}`}
              className="w-full border border-blue-300 rounded p-2 grid grid-cols-[1fr_3rem]"
            >
              <span>{todo}</span>
              <span
                onClick={() => removeToDo(index)}
                className="text-red-300 text-right cursor-pointer"
              >
                ✘
              </span>
            </article>
          );
        })}
      </section>
    </main>
  );
}
