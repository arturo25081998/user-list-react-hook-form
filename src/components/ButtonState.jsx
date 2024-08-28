import { useState } from "react";

export default function ButtonState() {
  //Estado interno ejemplo
  const [count, setCount] = useState(0);
  // primer argumento del arreglo el estado
  // Segundo argumento del arreglo funcion para actualizar el estado

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
