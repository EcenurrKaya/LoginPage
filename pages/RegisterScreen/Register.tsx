import React from "react"
import { Dimensions, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import {useFonts} from "expo-font"
import { IconView, SafeArea, TextHeader } from "./_style";

const {height} = Dimensions.get("window");
const Register = ({navigation}) =>{
    const [fontsLoaded] = useFonts({
        Ultra: require("../../assets/fonts/ProtestStrike-Regular.ttf")
    })
    return(
        <SafeArea>

            <ImageBackground source={{ uri:'https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?w=740&t=st=1707315158~exp=1707315758~hmac=f68a0e62af6ea1becdc7b40258db88153f3620982dd322265e712be0b8a808a7'}} resizeMode="contain" 
                style={{height:height/2.7}}/>

                <View style={{height:'100%'}}>
                    <TextHeader>Kayıt Ol</TextHeader>

                    <View style={{marginVertical:10}}>
                        <Input placeholder="Kullanıcı Adı"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Şifre"/>
                    </View>

                    <Button onPress={()=>navigation.navigate('')} text="Kayıt Ol"/>
                    
                    <Text style={{textAlign:"center"}}>Zaten hesabın mı var?  Giriş Yap</Text>
                    <Text style={{textAlign:"center", marginTop:30}}>Bununla devam et</Text>
                 
                    <IconView>
                        <IconButton name="logo-google"/>
                        <IconButton name="logo-github"/>
                        <IconButton name="logo-facebook"/>
                    </IconView>
                </View>
        </SafeArea>
    )
}

export default Register