export interface IOrder {
  transactionId: string;
  date: string;
  status: TypeOrderStatus;
  gameName: string;
  gameId: number;
  amount: string;
  details: TypeOrderDetails;
}

export type TypeOrderDetails = {
  goods: number;
  count: string;
  income: string;
  price: string;
  oldPrice?: string;
};

export type TypeOrderStatus = "Canceled" | "Success" | "Pending";
