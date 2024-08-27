import React, { useCallback, useContext, useState, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import usePayment from "@/hook/usePayment.ts";
import { IndianRupee, Loader2 } from "lucide-react";
import Header from "@/components/shared/Header";
import { form1Schema, form2Schema, Form2SchemaType } from "@/types/schemas";
import CheckBoxField from "@/components/shared/CheckBoxField";
import TermsConditions from "@/components/shared/TermsConditions";
import BillSummary from "@/components/shared/BillSummary";
import AddOns from "@/components/shared/AddOns";
import Tickets from "@/components/shared/Tickets";

const Form2: React.FC = () => {
  const navigate = useNavigate();
  const formContext = useContext(FormContext);
  const {
    formData,
    incrementTicket,
    decrementTicket,
    incrementAddon,
    decrementAddon,
  } = formContext;

  // Validate Form1 data on component mount
  useEffect(() => {
    const storedTripName = sessionStorage.getItem("bookingTitle");
    let tripName = "";
    if (storedTripName) {
      tripName = JSON.parse(storedTripName);
    }

    try {
      form1Schema.parse(formData);
    } catch (error) {
      console.error("Validation failed:", error);
      navigate(`/booking/form1/${tripName}`);
    }
  }, []);

  const { isLoading, errorResponse, makePayment } = usePayment();

  const form = useForm<Form2SchemaType>({
    resolver: zodResolver(form2Schema),
  });

  async function onSubmit(data: z.infer<typeof form2Schema>) {
    const hasValidTicket = formData.eventTickets.some(
      (ticket) => ticket.quantity > 0
    );

    if (!hasValidTicket) {
      form.setError("ticket", {
        type: "manual",
        message: "You must select at least one ticket.",
      });
      return; // Prevent form submission
    }

    const updatedTickets = formData.eventTickets.map((ticket) => ({
      ticketDesc: ticket.ticketDesc,
      ticketPrice: ticket.ticketPrice,
      minimumBookingAmountPrice: 1990.1,
      quantity: ticket.quantity,
    }));

    const updatedAddons = formData.eventAddOns.map((addon) => ({
      addOnName: addon.addOnDesc,
      addOnPrice: addon.addOnPrice,
      quantity: addon.quantity,
    }));

    const finalData = {
      location: formData.title,
      dateOfTrip: formData.dateOfTrip,
      tickets: updatedTickets,
      addOns: updatedAddons,
      primaryPassengerData: {
        name: formData.name,
        age: Number(formData.age),
        gender: formData.gender,
        mobileNumber: formData.mobile,
        emailId: formData.email,
      },
      sourceOfLead: formData.sourceOfLead,
      amount: calculateTotalPrice(),
      isPayingBookingAmount: form.watch("book_slot") ? true : false,
    };

    // try {
    //   const result = await makePayment(finalData);
    //   if (result?.url) {
    //     window.location.href = result.url; // Redirect to payment URL
    //   }
    //   if (errorResponse) {
    //     alert("Failed Please try again :" + errorResponse);
    //   }
    // } catch (error) {
    //   alert("Failed Please try again :" + error);
    //   console.error("Failed Please try again :", error);
    // }

    navigate(
      "/success?mode=UPI&utr=403993715532165013&txnId=9105455a-83f2-4112-8264-28a915d69d78&amount=1990.10&status=success&message=Transaction%20completed%20successfully&tripId=f20bfe6f-b5eb-462f-ba07-46822826af1e"
    );

    console.log(data);
    console.log(finalData);
  }

  const calculateTotalPrice = useCallback(() => {
    const totalTicketPrice = formData.eventTickets.reduce((total, ticket) => {
      return total + ticket.ticketPrice * ticket.quantity;
    }, 0);

    const totalAddonPrice = formData.eventAddOns.reduce((total, addon) => {
      return total + addon.addOnPrice * addon.quantity;
    }, 0);
    const price = totalTicketPrice + totalAddonPrice;

    return price;
  }, [formData]);

  const calculateTotalQuantity = useCallback(() => {
    const totalticketQuantity = formData.eventTickets.reduce(
      (total, ticket) => {
        return total + ticket.quantity;
      },
      0
    );
    return totalticketQuantity === 0 ? 1 : totalticketQuantity;
  }, [formData]);

  const [showDetails, setShowDetails] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  // const storedTripName = sessionStorage.getItem("bookingTitle");

  return (
    <div className="">
      <Header
        Heading="Create Tickets and Pay!"
        tripName={formData.title ? formData.title : ""}
        step={2}
      />

      <div className="mx-auto text-center">
        <h2 className="text-md font-semibold text-gray-500 pt-5">
          Selected dates
        </h2>
        <p className="text-orange-400 text-sm">
          {/* July 26 2024 fri to Aug 1 2024 sun */} {formData.dateOfTrip}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 py-5">
          {/* Render ticket counters */}
          <Tickets
            incrementTicket={incrementTicket}
            decrementTicket={decrementTicket}
            tickets={formData.eventTickets}
          />

          {/* // ticket error */}
          {form.formState.errors.ticket && (
            <p className="text-red-500 text-sm mt-1 px-8">
              {form.formState.errors.ticket.message}
            </p>
          )}

          {/* Render addon counters */}
          <AddOns
            incrementAddon={incrementAddon}
            decrementAddon={decrementAddon}
            addOns={formData.eventAddOns}
          />

          {/* checkbox term and conditions and booking slot */}
          <div className="flex flex-col pt-4 justify-center space-y-2 px-8">
            <CheckBoxField
              formControl={form.control}
              name="book_slot"
              label="Reserve your slot by paying : ₹4283.20/-"
            />
            <CheckBoxField
              formControl={form.control}
              name="legal"
              label="I have read and accept the Refunds, Cancellation Policy &Terms & Conditions."
              setShowTerms={setShowTerms}
              flag={true}
            />
          </div>

          {/* terms and conditions Modal */}
          {showTerms && (
            <TermsConditions
              setShowTerms={setShowTerms}
              showTerms={showTerms}
            />
          )}

          {/* Bill summary */}
          <BillSummary showDetails={showDetails} />

          {/* toggle bill summary  and total price */}
          <div className=" flex  items-center justify-end space-x-3 px-8 ">
            <p
              className="text-sm text-orange-400 hover:text-orange-500 cursor-pointer underline"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide details" : "Show details"}
            </p>
            <h1 className="text-2xl font-bold text-gray-600 flex items-center ">
              <IndianRupee className="h-4 w-4" />
              {form.watch("book_slot")
                ? 2146 * calculateTotalQuantity()
                : calculateTotalPrice()}
            </h1>
          </div>

          {/* buttons */}
          <div className="flex justify-between items-center py-4 px-8">
            <Button
              className="w-fit text-md bg-slate-300 hover:bg-slate-200"
              type="button"
              size="lg"
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              Previous
            </Button>

            {isLoading ? (
              <Button disabled size="lg" className="w-fit text-md">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="w-fit text-md" size="lg" type="submit">
                Pay now
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Form2;
