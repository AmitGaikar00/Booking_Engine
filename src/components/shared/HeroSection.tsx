import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SelectField from "@/components/shared/SelectField";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { tripSchema, TripSchemaType } from "@/types/schemas";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const options = ["hampi", "andharban", "spiti", "gokarna"];

  const form = useForm<TripSchemaType>({
    resolver: zodResolver(tripSchema),
    defaultValues: {
      trip: "",
    },
  });

  function onSubmit(values: z.infer<typeof tripSchema>) {
    navigate(`/booking/form1/${values.trip}`);
    console.log(values);
  }

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-center h-screen">
        <div className="mx-auto max-w-xl text-center space-y-5">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Book your trip.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              @RoutesDeIndia.{" "}
            </strong>
          </h1>

          <p className="sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <SelectField
                formControl={form.control}
                name="trip"
                placeholder="Select the Trip"
                options={options}
                className="w-[16rem] sm:w-full max-w-xs mx-auto"
              />

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="w-full md:w-fit text-md px-12 rounded-none"
                  size="lg"
                  type="submit"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
