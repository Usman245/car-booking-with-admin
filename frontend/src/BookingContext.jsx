// context/BookingContext.js
import { createContext, useState } from "react";

// Create the context
const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [services, setServices] = useState(false);
  const [isLogin, setLogin] = useState(false);

  return (
    <BookingContext.Provider
      value={{ date, setDate, services, setServices, isLogin, setLogin }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
