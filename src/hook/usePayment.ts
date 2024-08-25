// usePayment.ts
import { useState } from "react";
import {
  BookingConfirmed,
  BookingPaymentInput,
  InputBookingData,
  BuyerData,
  PaymentUrlData,
  Participant,
} from "@/types/types";

// const BASE_URL = "http://15.206.147.65:8080/api/v1/trips";
const BASE_URL = import.meta.env.VITE_API_URL;

interface PaymentHook {
  isLoading: boolean;
  errorResponse: string | null;
  success: boolean;
  inputBookingData: InputBookingData | null;
  makePayment: (
    data: BookingPaymentInput
  ) => Promise<PaymentUrlData | undefined>;
  fetchData: (tripName: string) => Promise<void>;
  buyerData: BuyerData | null;
  getAutofillDetails: (tripId: string) => Promise<void>;
  saveCoPassengers: (
    data: Participant[]
  ) => Promise<BookingConfirmed | undefined>;
}

const usePayment = (): PaymentHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorResponse, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [inputBookingData, setBookingData] = useState<InputBookingData | null>(
    null
  );
  const [buyerData, setBuyerData] = useState<BuyerData | null>(null);

  const makePayment = async (data: BookingPaymentInput) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${BASE_URL}/createTrip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: PaymentUrlData = await response.json();
      setSuccess(true);
      return result;
    } catch (error) {
      setError(`Payment failed: ${error}`);
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async (tripName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        // `https://jsonplaceholder.typicode.com/todos/1?tripName=badami`
        `${BASE_URL}?query=${tripName}`
      ); // Replace with your API endpoint

      const data: InputBookingData = await response.json();
      setBookingData(data);

      // if (response.data && response.data.success) {
      //   setInputBookingData(response.data.bookingData);
      // else {
      //   setErrorResponse("An unexpected error occurred.");
      // }
    } catch (error) {
      setError(`Failed to fetch data: ${error}`);
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAutofillDetails = async (tripId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/getAutofillDetails?tripId=${tripId}`
        // `http://15.206.147.65:8080/api/v1/trips/getAutofillDetails?tripId=${tripId}`
      ); // Replace with your API endpoint

      const data: BuyerData = await response.json();
      setBuyerData(data);
    } catch (error) {
      setError(`Failed to fetch data: ${error}`);
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveCoPassengers = async (data: Participant[]) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        // "http://15.206.147.65:8080/api/v1/trips/createTrip",
        `${BASE_URL}/saveCoPassengers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: any = await response.json();
      setSuccess(true);
      return result;
    } catch (error) {
      setError(` failed : ${error}`);
      console.error("failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errorResponse,
    success,
    inputBookingData,
    makePayment,
    fetchData,
    buyerData,
    getAutofillDetails,
    saveCoPassengers,
  };
};

export default usePayment;
