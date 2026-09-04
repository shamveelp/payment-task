import raw from "../data/payment.json";

export type PaymentStatus = "completed" | "pending" | "failed" | "refunded";
export type PaymentMethod = "ach" | "wire" | "card" | "check";

export type Payment = {
  id: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: PaymentMethod;
  createdAt: string;
  description: string;
  fee: number;
};

/** Acts like a real API call: takes ~600ms, fails ~20% of the time. */
export function fetchPayments(): Promise<Payment[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Failed to load payments"));
      else resolve(raw as Payment[]);
    }, 600);
  });
}