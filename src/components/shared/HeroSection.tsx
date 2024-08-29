import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate} from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex items-center justify-center h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Book your trip.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              @RoutesDeIndia.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate("/booking/form1/hampi")}
              className="w-full md:w-fit text-md px-12 rounded-none"
              size="lg"
              type="submit"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
