import { Ticket } from "@/interfaces";

type Props = {
  ticket: Ticket;
};

const PurchaseDetailContainer: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="flex flex-col justify-center text-m gap-7 mt-5 bg-green p-7 rounded shadow-2xl border-2">
      <h2 className="uppercase font-bold self-center">Detalles de tu compra</h2>
      <span>Muchas gracias por tu compra! {ticket.purchaser}</span>
      <span>Tu codigo de seguimiento es: {ticket.code}</span>
      <span>Total: $ {ticket.amount.toFixed(2)}</span>
      <span>
        Fecha: {ticket.purchased_datetime.toLocaleString().slice(0, 10)}
      </span>
    </div>
  );
};

export default PurchaseDetailContainer;
