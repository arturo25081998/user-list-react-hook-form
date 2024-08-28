import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AppRHF() {
  const [todos, setTodos] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function addToDo(todoText) {
    setTodos([...todos, todoText]);
    //alert(text);
  }

  function removeToDo(index) {
    const filterToDos = todos.filter((_, idx) => idx !== index);
    setTodos(filterToDos);
    reset();
  }

  function onSubmit(data) {
    addToDo(data.text);
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="w-full bg-blue-300 text-black font-light text-center text-2xl">
        To do app
      </div>
      <form
        className="w-full max-w-md flex flex-col gap-2 items-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-2 w-full">
          <input
            type="text"
            className={clsx("border border-blue-500 rounded p-2 w-full", {
              "bg-red-500/10 border border-red-500": errors.text,
            })}
            {...register("text", {
              required: {
                value: true,
                message: "No puedes agregar tareas en blanco",
              },
              minLength: {
                value: 3,
                message: "La tarea debe tener minimo 3 caracter",
              },
            })}
          />
          <button className="bg-blue-300 text-black rounded p-2 size-10">
            +
          </button>
        </div>
        {errors.text && (
          <span className="w-full text-red-500 text-sm">
            {errors.text.message}
          </span>
        )}
      </form>
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
