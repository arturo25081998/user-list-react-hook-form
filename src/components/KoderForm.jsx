import clsx from "clsx";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export default function KoderForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function addkoder(koder) {
    props.setkoders([
      ...props.koders,
      {
        name: koder.name,
        lastName: koder.lastName,
        github: koder.user,
      },
    ]);
    reset();
  }

  function onSubmit(data) {
    addkoder(data);
  }

  return (
    <form
      className="w-full max-w-md flex flex-col gap-3 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Name"
        className={clsx(
          "border border-blue-500 rounded p-2 w-full focus-visible:border-blue-500",
          {
            "bg-red-500/10 border border-red-500": errors.name,
          }
        )}
        {...register("name", {
          required: {
            value: true,
            message: "No puedes agregar nombres en blanco",
          },
          minLength: {
            value: 4,
            message: "El nombre debe tener minimo 3 caracter",
          },
        })}
      />
      {errors.name && <ErrorMessage message={errors.name.message} />}

      <input
        type="text"
        placeholder="LastName"
        className={clsx("border border-blue-500 rounded p-2 w-full", {
          "bg-red-500/10 border border-red-500": errors.lastName,
        })}
        {...register("lastName", {
          required: {
            value: true,
            message: "No puedes agregar un apellido en blanco",
          },
          minLength: {
            value: 4,
            message: "El apellido debe tener minimo 3 caracteres",
          },
        })}
      />
      {errors.lastName && <ErrorMessage message={errors.lastName.message} />}

      <input
        type="text"
        placeholder="Github user"
        className={clsx("border border-blue-500 rounded p-2 w-full", {
          "bg-red-500/10 border border-red-500": errors.user,
        })}
        {...register("user", {
          required: {
            value: true,
            message: "No puedes agregar un usuario en blanco",
          },
          minLength: {
            value: 4,
            message: "El usuario debe tener minimo 2 caracteres",
          },
        })}
      />
      {errors.user && <ErrorMessage message={errors.user.message} />}

      <button className="bg-green-600 text-white rounded p-2 size-10 w-full">
        Register
      </button>
    </form>
  );
}
