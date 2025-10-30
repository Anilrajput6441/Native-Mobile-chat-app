import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonProps } from "@/types";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Loading from "./Loading";

const Button = ({ style, onPress, children, loading = false }: ButtonProps) => {
    if(loading){     
        return (
            <View style={[styles.button, style,{backgroundColor:"transparent"}]}>
                <Loading color={colors.primary}/>
            </View>
        );
    }
    return (
  <View>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius:radius.full,
        padding: 10,
        borderCurve:"continuous",
        height:verticalScale(56),
        justifyContent:"center",
        alignItems:"center",
    },

});
