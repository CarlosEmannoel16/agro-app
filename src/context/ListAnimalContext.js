import { createContext, useState } from "react";

export const AnimalContext = createContext();

export const AnimalContextProvider = ({ children }) => {
  const [animal, setAnimal] = useState({});
  const [currentAnimal, setCurrentAnimal] = useState({});

  return (
    <AnimalContext.Provider
      value={{ animal, setAnimal, currentAnimal, setCurrentAnimal }}
    >
      {children}
    </AnimalContext.Provider>
  );
};
