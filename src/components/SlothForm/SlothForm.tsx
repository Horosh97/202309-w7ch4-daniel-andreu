import { useState } from "react";
import { Sloth } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const SlothForm = (): React.ReactElement => {
  const initialNewSloth: Sloth = {
    id: 0,
    name: "",
    picture: "",
    fingers: 0,
  };

  const [newSloth, setNewSloth] = useState(initialNewSloth);

  const addSloth = async (sloth: Sloth) => {
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sloth),
    });

    if (response.status !== 201) {
      return;
    }
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSloth((newSloth) => ({
      ...newSloth,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addSloth(newSloth);

    setNewSloth(initialNewSloth);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={onFormSubmit}>
      <div className="form__container">
        <label className="form__label" htmlFor="name">
          Nombre:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={newSloth.name}
          onChange={onChangeData}
        />
      </div>
      <div className="form__container">
        <label className="form__label" htmlFor="picture">
          URL de la imagen:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="picture"
          value={newSloth.picture}
          onChange={onChangeData}
        />
      </div>
      <div className="form__container">
        <label className="form__label" htmlFor="fingers">
          Número de dedos del perezoso:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="fingers"
          value={newSloth.fingers}
          onChange={onChangeData}
        />
      </div>
      <button className="button" type="submit">
        Crear Perezoso
      </button>
    </form>
  );
};

export default SlothForm;
