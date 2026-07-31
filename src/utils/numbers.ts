interface spType {
  (amount: number): string;
}

export const sp: spType = (amount) => {
  return amount.toLocaleString("fa-IR");
};
