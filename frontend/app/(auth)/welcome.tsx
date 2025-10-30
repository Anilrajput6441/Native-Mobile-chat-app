import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacingX, spacingY } from "@/constants/theme";
import ScreenWrapper from "../../components/ScreenWrapper";
import Typo from "@/components/Typo";
import { scale, verticalScale } from "@/utils/styling";
import Animated from "react-native-reanimated";
import { FadeIn } from "react-native-reanimated";
import Button from "../../components/Button";

const Welcome = () => {
  return (
      <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={{alignItems:"center"}}>
          <Typo size={43} fontWeight={"900"} >MyApp</Typo>
        </View>
        <Animated.Image 
        source={require("../../assets/images/welcome.png")} 
        style={styles.welcomeImage} 
        entering={FadeIn.duration(700).springify()}
        resizeMode="contain"
        />
        <View style={{alignItems:"center"}}>
          <Typo size={24} fontWeight={"900"} >Stay Connected ...</Typo>
         
        </View>
        <Button>
          <Typo size={16} fontWeight={"900"} >Get Started</Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
  welcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: "center",
  },
});