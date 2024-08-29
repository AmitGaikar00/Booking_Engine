import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/shared/Header";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import {
  participantFormSchema,
  ParticipantFormSchemaType,
} from "@/types/schemas";
import { useNavigate, useParams } from "react-router-dom";
import usePayment from "@/hook/usePayment";
import { Participant } from "@/types/types";
import Spinner from "@/components/shared/Spinner";

const ParticipantDetails: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, errorResponse, buyerData } = usePayment();

  const { tripId } = useParams<{ tripId: string }>();
  console.log("tripId ->", tripId);
  const [checked, setChecked] = useState(false);

  const form = useForm<ParticipantFormSchemaType>({
    resolver: zodResolver(participantFormSchema),
    defaultValues: {
      participants: Array(buyerData ? buyerData.noOfPassengers : 2).fill({
        name: "",
        mobile: "",
        email: "",
        age: "",
        gender: "",
      }),
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof participantFormSchema>) {
    const finalParticipantsData: Participant[] = values.participants.map(
      (participant, index) => {
        return {
          name: participant.name,
          age: Number(participant.age),
          gender: participant.gender,
          mobileNumber: participant.mobile,
          emailId: participant.email,
          isPrimaryPassenger: index === 0 && checked ? true : false,
        };
      }
    );

    console.log("finalParticipantsData ->", finalParticipantsData);
    navigate("/confirm");
  }

  const buyerDetails = {
    name: "amit",
    mobile: "9172968712",
    email: "amit@gmail.com",
    age: "12",
    gender: "MALE",
  };

  function handleCheckboxChange(checked: boolean) {
    setChecked(checked);
    if (checked) {
      form.setValue("participants.0", {
        ...buyerDetails,
      });
      form.trigger("participants.0");
    } else {
      form.setValue("participants.0", {
        name: "",
        mobile: "",
        email: "",
        age: "",
        gender: "",
      });
    }
    form.trigger("participants.0");
  }

  return (
    <>
      {isLoading ? (
        <Spinner/>
      ) : errorResponse ? (
        <div className="grid h-screen place-content-center bg-white px-4">
          <h1 className="uppercase tracking-widest text-red-500">
            Error : {errorResponse}
          </h1>
        </div>
      ) : (
        <div>
          <Header
            Heading="Participant Details"
            tripName="Hampi Backpacking 2024"
            step={3}
          />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 py-6 px-8"
            >
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full"
              >
                {form.watch("participants").map((_, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>
                      <h2 className="text-md font-semibold text-gray-500">
                        <strong className="">Participant {index + 1}</strong>
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 space-y-4">
                      {index === 0 && (
                        <div className="flex items-center justify-start space-x-2">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={handleCheckboxChange}
                            id="terms"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Participant 1 details same as buyer
                          </label>
                        </div>
                      )}
                      <div className="space-y-4 flex-1">
                        <InputField
                          formControl={form.control}
                          name={`participants.${index}.name`}
                          label="Name"
                          placeholder="Enter your name"
                        />

                        <InputField
                          formControl={form.control}
                          name={`participants.${index}.mobile`}
                          label="Mobile"
                          placeholder="Enter your mobile number"
                        />

                        <InputField
                          formControl={form.control}
                          name={`participants.${index}.email`}
                          label="Email"
                          placeholder="Enter your email"
                        />

                        <div className="flex items-center space-x-4">
                          {index === 0 ? (
                            <SelectField
                              formControl={form.control}
                              name={`participants.${index}.gender`}
                              label="Gender"
                              options={["MALE", "FEMALE"]}
                              className="w-1/2"
                              placeholder="Select gender"
                              setValue={form.setValue}
                            />
                          ) : (
                            <SelectField
                              formControl={form.control}
                              name={`participants.${index}.gender`}
                              label="Gender"
                              options={["MALE", "FEMALE"]}
                              className="w-1/2"
                              placeholder="Select gender"
                            />
                          )}

                          <InputField
                            formControl={form.control}
                            name={`participants.${index}.age`}
                            label="Age"
                            placeholder="Enter your age"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="flex items-center py-4">
                <Button className="w-full text-md" size="lg" type="submit">
                  Confirm Booking
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default ParticipantDetails;
