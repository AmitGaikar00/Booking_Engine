import React, { useContext, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { FormContext } from "@/context/FormContext";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import usePayment from "@/hook/usePayment.ts";
import Spinner from "@/components/shared/Spinner";
import Header from "@/components/shared/Header";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import { form1Schema, Form1SchemaType } from "@/types/schemas";

const FormStep1: React.FC = () => {
  const navigate = useNavigate();
  const formContext = useContext(FormContext);
  const { formData, updateFormData } = formContext;

  const { tripName } = useParams<{ tripName: string }>();
  const { isLoading, errorResponse, inputBookingData, fetchData } =
    usePayment();

  const form = useForm<Form1SchemaType>({
    resolver: zodResolver(form1Schema),
    defaultValues: {
      dateOfTrip: formData.dateOfTrip,
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
      sourceOfLead: formData.sourceOfLead,
    },
  });

  // useEffect(() => {
  //   if (tripName) {
  //     fetchData(tripName);
  //   }
  // }, [tripName]);

  // useEffect(() => {
  //   if (inputBookingData) {
  //     updateFormData(inputBookingData);
  //     console.log(inputBookingData);
  //   }
  // }, [inputBookingData]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof form1Schema>) {
    console.log("Form 1 Data", values);

    updateFormData(values);
    sessionStorage.setItem("bookingTitle", JSON.stringify(tripName));

    navigate("/booking/form2");
  }

  return (
    <>
      {isLoading ? (
        <Spinner height="8" width="8" />
      ) : errorResponse ? (
        <div className="grid h-screen place-content-center bg-white px-4">
          <h1 className="uppercase tracking-widest text-red-500">
            Error : {errorResponse}
          </h1>
        </div>
      ) : (
        <div className="">
          <Header
            Heading="Book a Trip!"
            tripName={formData.title ? formData.title : ""}
            step={1}
          />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 py-5 px-8"
            >
              <SelectField
                formControl={form.control}
                name="dateOfTrip"
                label="Date of Trip"
                // options={["m@example.com", "m@google.com", "m@support.com"]}
                placeholder="Select date of trip"
                options={formData.availableDates}
              />

              <InputField
                formControl={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />

              <InputField
                formControl={form.control}
                name="mobile"
                label="mobile"
                placeholder="Enter your mobile number"
              />

              <InputField
                formControl={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <div className="flex items-center space-x-4">
                <SelectField
                  formControl={form.control}
                  name="gender"
                  label="Gender"
                  options={["MALE", "FEMALE"]}
                  className="w-1/2"
                  placeholder="Select gender"
                />

                <InputField
                  formControl={form.control}
                  name="age"
                  label="Age"
                  placeholder="Enter your age"
                />
              </div>

              <InputField
                formControl={form.control}
                name="sourceOfLead"
                label="Source"
                placeholder="Enter source"
              />

              <div className="flex items-center py-4">
                <Button className="w-fit text-md" size="lg" type="submit">
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default FormStep1;
