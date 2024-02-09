import React from "react";
import { TextInput,View } from "react-native";
import { TextStyle } from "./_style";

const Input=({placeholder})=>{
    return(
        <View>
            <TextStyle placeholder={placeholder}/>
        </View>
    )
}

export default Input