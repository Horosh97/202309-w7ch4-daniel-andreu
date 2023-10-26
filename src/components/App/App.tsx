import SlothForm from "../SlothForm/SlothForm";
import AppStyled from "./AppStyled";

export const App = (): React.ReactElement => {
  return (
    <AppStyled className="app">
      <h1>¡Guarda tus Perezosos!</h1>
      <SlothForm />
    </AppStyled>
  );
};

export default App;
