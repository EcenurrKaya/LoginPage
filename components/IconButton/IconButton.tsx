import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButtonStyle } from "./_style";

const IconButton=({name})=>{
    return(
        <View>
            <IconButtonStyle>
                <Ionicons name={name} size={25}/>
            </IconButtonStyle>
        </View>
    )
}

export default IconButton