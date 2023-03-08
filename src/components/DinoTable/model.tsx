export interface DinoTableModel {
  address: string;
  ethervalue: string;
  value: string;
  rank: string;
  // buyData: buyDataModel[];
}

export interface buyDataModel {
  ethervalue: string;
  transactionhash: string;
}

export interface WalletRank {
  address: string;
  ethervalue: string;
  rank: string;
  value: string;
}
