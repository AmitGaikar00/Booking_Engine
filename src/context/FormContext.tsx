import React, { createContext, useState, ReactNode } from "react";
import { FormData } from "@/types/types";

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  updateFormData: (newData: Partial<FormData>) => void;
  incrementTicket: (id: number) => void;
  decrementTicket: (id: number) => void;
  incrementAddon: (id: number) => void;
  decrementAddon: (id: number) => void;
}

const defaultFormData: FormData = {
  title: "Hampi Backpacking 2024",
  availableSeats: 0,
  availableDates: ["2024-10-01", "2024-10-02" , "2024-10-03"],
  dateOfTrip: "",
  name: "",
  mobile: "",
  email: "",
  age: "",
  gender: "",
  sourceOfLead: "",
  // eventTickets: [],
  // eventAddOns: [],
  minimumBookingAmountPerTicket: 1990.0,
  eventTickets: [
    {
      ticketId: 1,
      ticketDesc: "From Mumbai / Pune ",
      ticketPrice: 8641.0,
      quantity: 0,
    },
    {
      ticketId: 2,
      ticketDesc: "From Bangalore / Hyderabad ",
      ticketPrice: 7641.0,
      quantity: 0,
    },
  ],
  eventAddOns: [
    {
      addOnId: 1,
      addOnDesc: "Double Sharing ",
      addOnPrice: 1000.0,
      quantity: 0,
    },
  ],
};

export const FormContext = createContext({} as FormContextProps);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  const incrementTicket = (id: number) => {
    setFormData((prevData) => ({
      ...prevData,
      eventTickets: prevData.eventTickets.map((ticket) =>
        ticket.ticketId === id
          ? { ...ticket, quantity: ticket.quantity + 1 }
          : ticket
      ),
    }));
  };

  const decrementTicket = (id: number) => {
    setFormData((prevData) => ({
      ...prevData,
      eventTickets: prevData.eventTickets.map((ticket) =>
        ticket.ticketId === id && ticket.quantity > 0
          ? { ...ticket, quantity: ticket.quantity - 1 }
          : ticket
      ),
    }));
  };

  const incrementAddon = (id: number) => {
    setFormData((prevData) => ({
      ...prevData,
      eventAddOns: prevData.eventAddOns.map((addon) =>
        addon.addOnId === id
          ? { ...addon, quantity: addon.quantity + 1 }
          : addon
      ),
    }));
  };

  const decrementAddon = (id: number) => {
    setFormData((prevData) => ({
      ...prevData,
      eventAddOns: prevData.eventAddOns.map((addon) =>
        addon.addOnId === id && addon.quantity > 0
          ? { ...addon, quantity: addon.quantity - 1 }
          : addon
      ),
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,
        incrementTicket,
        decrementTicket,
        incrementAddon,
        decrementAddon,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
