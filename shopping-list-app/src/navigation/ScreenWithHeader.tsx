import React, { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { ScreenWithHeaderStyles } from "../styles/GlobalStyles";
type Props = {
  title: string;
  children: ReactNode;
};

const ScreenWithHeader = ({ title, children }: Props) => {
  return (
    <SafeAreaView style={ScreenWithHeaderStyles.container}>
      <CustomHeader title={title} />
      <View style={ScreenWithHeaderStyles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWithHeader;
