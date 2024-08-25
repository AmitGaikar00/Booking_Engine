import React from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";

interface Props {
  setShowTerms: (showTerms: boolean) => void;
  showTerms: boolean;
}

const TermsConditions: React.FC<Props> = ({setShowTerms, showTerms }) => {
  return (
    <Modal onClose={() => setShowTerms(false)} isOpen={showTerms}>
      <h2 className="text-xl font-semibold text-center py-2">
        Terms and Conditions
      </h2>
      <p className="text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
        veritatis reiciendis modi quas. Quis sunt fugit sequi unde distinctio
        dicta aspernatur laboriosam doloribus animi qui sit aliquam beatae
        adipisci dolorem, at quidem, alias earum facilis placeat aut veniam
        architecto! Saepe odit similique harum eligendi explicabo culpa
        consequuntur minima aspernatur praesentium voluptas? Hic beatae nemo
        accusantium alias cupiditate animi voluptas ea aperiam rem sapiente,
        consequuntur quibusdam eveniet obcaecati ipsam amet nisi expedita, odit
        reiciendis inventore quo facilis provident. Est repellat aspernatur
        ullam, corporis vero ex mollitia praesentium nesciunt, odit omnis nemo
        explicabo fugit suscipit consequatur? Odio saepe natus obcaecati
        voluptatibus laudantium!
      </p>
      <Button onClick={() => setShowTerms(false)} className="mt-4 ">
        Close
      </Button>
    </Modal>
  );
};

export default TermsConditions;
