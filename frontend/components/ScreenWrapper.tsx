import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";
import { colors } from "@/constants/theme";

const height = Dimensions.get("window").height;
const ScreenWrapper = ({
  style,
  children,
  showPattern = false,
  isModal = false,
  bgOpacity = 1,
}: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 40;
  let paddingBottom = 0;

  if (isModal) {
    paddingTop = Platform.OS === "ios" ? height * 0.02 : 45;
    paddingBottom = height * 0.02;
  }
  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: isModal ? colors.white : colors.neutral100,
      }}
      source={require("../assets/images/bgPattern.jpg")}
      imageStyle={{ opacity: showPattern ? bgOpacity : 0 }}
      resizeMode="center"
     
    >
      <View
        style={{
          flex: 1,
          paddingTop,
          paddingBottom,
         
        }}
      >
        <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
        {children}
      </View>
    </ImageBackground>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral100,
  },
});
