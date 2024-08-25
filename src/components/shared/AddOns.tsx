import React from "react";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Addon } from "@/types/types";

interface Props {
  incrementAddon: (id: number) => void;
  decrementAddon: (id: number) => void;
  addOns: Addon[];
}

const AddOns: React.FC<Props> = ({ incrementAddon, decrementAddon, addOns }) => {
  return (
    <>
      <h2 className="text-sm font-semibold text-gray-500 pt-5 px-8">
        Select Addons
      </h2>
      {addOns.map((addon) => (
        <div key={addon.addOnId} className="flex items-center gap-1 px-8">
          <div className=" border-2 border-slate-300 w-full h-full px-2 py-3 rounded-xl">
            <h1 className="font-bold text-gray-600 text-sm">
              {addon.addOnDesc} : <span>{addon.addOnPrice}</span>
            </h1>
          </div>

          <div className="flex text-lg pr-2 items-center ml-auto">
            <Button
              className="border-none rounded-full"
              size="icon"
              type="button"
              variant="outline"
              onClick={() => decrementAddon(addon.addOnId)}
            >
              <MinusIcon className="h-3 w-3" />
            </Button>
            <span className="text-lg border-slate-300 border-2 p-2 w-10 h-10 flex items-center justify-center">
              {addon.quantity}
            </span>
            <Button
              className="border-none rounded-full"
              size="icon"
              variant="outline"
              type="button"
              onClick={() => incrementAddon(addon.addOnId)}
            >
              <PlusIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddOns;
