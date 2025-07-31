import React from "react";
import { Text } from "react-native";
import { getCurrencySymbol } from "../../utils/getCurrencySymbol";

type PriceTextProps = {
  amount: number;
};

const PriceText: React.FC<PriceTextProps> = ({ amount }) => {
  const symbol = getCurrencySymbol();
  return (
    <Text>
      {symbol}
      {amount.toFixed(2)}
    </Text>
  );
};

export default PriceText;
