export interface DinoTableModel {
  address: string;
  ammount: string;
  value: string;
  rank: string;
  // buyData: buyDataModel[];
}

export interface buyDataModel {
  ammount: string;
  transactionhash: string;
}

export interface WalletRank {
  address: string;
  ammount: string;
  rank: string;
  value: string;
}
