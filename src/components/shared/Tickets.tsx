import React from "react";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Ticket } from "@/types/types";

interface Props {
  incrementTicket: (id: number) => void;
  decrementTicket: (id: number) => void;
  tickets: Ticket[];
}

const Tickets: React.FC<Props> = ({ incrementTicket, decrementTicket, tickets }) => {
  return (
    <>
      <h2 className="text-sm font-semibold text-gray-500 pt-5 px-8">
        Select Tickets
      </h2>
      {tickets.map((ticket) => (
        <div key={ticket.ticketId} className="flex items-center gap-1 px-8">
          <div className=" border-2 border-slate-300 w-full h-full px-2 py-3 rounded-xl">
            <h1 className="font-bold text-gray-600 text-sm">
              {ticket.ticketDesc} : <span>{ticket.ticketPrice}</span>
            </h1>
            {/* <p className="text-gray-400 text-xs">
                  Ticket not eligible for discount
                </p> */}
          </div>
          <div className="flex text-lg pr-2 items-center ml-auto">
            <Button
              className="border-none rounded-full"
              size="icon"
              type="button"
              variant="outline"
              onClick={() => decrementTicket(ticket.ticketId)}
            >
              <MinusIcon className="h-3 w-3" />
            </Button>
            <span className="text-lg border-slate-300 border-2 p-2 w-10 h-10 flex items-center justify-center">
              {ticket.quantity}
            </span>
            <Button
              className="border-none rounded-full"
              size="icon"
              variant="outline"
              type="button"
              onClick={() => incrementTicket(ticket.ticketId)}
            >
              <PlusIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tickets;
