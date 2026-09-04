import React, { useEffect, useState } from "react";
import { fetchPayments, type Payment } from "../api/payment";

const Payments = () => {
  const [datas, setDatas] = useState<Payment[]>([]);

  useEffect(() => {
    fetchPayments().then((data: Payment[]) => setDatas(data));
  }, []);

  return (
    <div>
      Payments Table
      <input type="text" placeholder="Search Box" />
      <br />
      <br />
      <table>
        <tr>
          <th>References</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Method</th>
          <th>Created</th>
        </tr>
        {datas.map((items) => (
          <tr>
            <>
              <td key={items.id}>{items.reference}</td>
              <td key={items.id}>{items.customerName}</td>

              {(() => {
                if (items.currency === "USD") return <td key={items.id}>${items.amount}</td>;
                else if (items.currency == "EUR") return <td key={items.id}>€{items.amount}</td>;
                else if (items.currency == "GBP") return <td key={items.id}>£{items.amount}</td>;
              })()}

                {(() => {
                if (items.status === "completed") return <td style={{'color':'green'}} key={items.id}>{items.status}</td>
                else if (items.status === "pending") return <td style={{'color':'yellow'}} key={items.id}>{items.status}</td>
                else if (items.status === "failed") return <td style={{'color':'red'}} key={items.id}>{items.status}</td>
                else if (items.status === "refunded") return <td style={{'color':'white'}} key={items.id}>{items.status}</td>
              })()}
              
              <td key={items.id}>{items.method}</td>
              <td key={items.id}>{items.createdAt}</td>
            </>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Payments;
