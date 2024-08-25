// types.ts
export interface Ticket {
  ticketId: number;
  ticketDesc: string;
  ticketPrice: number;
  quantity: number;
}

export interface Addon {
  addOnId: number;
  addOnDesc: string;
  addOnPrice: number;
  quantity: number;
}

export interface FormData {
  title: string;
  availableDates: string[];
  availableSeats: number;
  dateOfTrip: string;
  name: string;
  mobile: string;
  email: string;
  age: string;
  gender: string;
  sourceOfLead: string;
  eventTickets: Ticket[];
  eventAddOns: Addon[];
  minimumBookingAmountPerTicket: number;
}

//   usePayment.ts hook types

export interface PaymentUrlData {
  url: string;
}

export interface Ticket {
  ticketId: number;
  ticketDesc: string;
  ticketPrice: number;
  quantity: number;
}

export interface Addon {
  addOnId: number;
  addOnDesc: string;
  addOnPrice: number;
  quantity: number;
}

export interface InputBookingData {
  title: string;
  availableDates: string[];
  eventTickets: Ticket[];
  eventAddOns: Addon[];
  availableSeats: number;
  minimumBookingAmountPerTicket: number;
}

export interface BookingTicket {
  ticketDesc: string;
  ticketPrice: number;
  minimumBookingAmountPrice: number;
  quantity: number;
}

export interface BookingAddon {
  addOnName: string;
  addOnPrice: number;
  quantity: number;
}

export interface BookingPaymentInput {
  location: string;
  dateOfTrip: string;
  tickets: BookingTicket[];
  addOns: BookingAddon[];
  primaryPassengerData: {
    name: string;
    age: number;
    gender: string;
    mobileNumber: string;
    emailId: string;
  };
  sourceOfLead: string;
  amount: number;
  isPayingBookingAmount: boolean;
}

export interface BuyerData {
  noOfPassengers: number;
  primaryPassengerData: {
    name: string;
    age: number;
    gender: string;
    mobileNumber: string;
    emailId: string;
  };
}

export interface BuyerDetails {
  name: string;
  mobile: string;
  email: string;
  age: string;
  gender: string;
}

export interface Participant {
  name: string;
  age: number;
  gender: string;
  mobileNumber: string;
  emailId: string;
  isPrimaryPassenger: boolean;
}

export interface BookingConfirmed {
  status: string;
}
