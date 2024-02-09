import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { ButtonStyle, ButtonText, ButtonView } from "./_style";

const Button=({text, onPress})=>{
    return(
        <ButtonView>
            <ButtonStyle onPress={onPress}>
                <ButtonText>{text}</ButtonText>
            </ButtonStyle>
        </ButtonView>
    )
}

export default Button