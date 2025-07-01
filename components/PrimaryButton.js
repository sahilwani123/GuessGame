// import { StatusBar } from "expo-status-bar";
// import { View,Text,TextInput,Pressable,StyleSheet } from "react-native";

// const PrimaryButton=({children})=>{
//     return(
//                    <Pressable 
//                    onPress={()=>{
                    
//                    }}
//                            android_ripple={{color:"white"}} 
//                            style={({pressed})=>
//                                pressed ?[styles.buttonStyle,styles.pressed]:
//                                styles.buttonStyle
//                             }>
                           
//                             <Text style={styles.buttonText}>{children}

//                             </Text>
//                            </Pressable>
//     );
// }

// export default PrimaryButton;

// const styles=StyleSheet.create({
   
    
//     buttonContainer:{
//         flexDirection:"row",
//         gap:90,
//     },
//     buttonStyle:{
//         backgroundColor:"pink",
//         paddingHorizontal:20,
//         paddingVertical:9,
//     },
//     buttonText:     
//     {
//     color:"green",
//     fontWeight:"bold",
//     },
//     // pressed:{
//     //     opacity:0.4,
//     // }

// })

import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children, onPressFunction }) => {
  return (
    <Pressable
      onPress={() => {
        onPressFunction();
      }}
      android_ripple={{ color: "white" }}
      style={({ pressed }) =>
        pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonStyle
      }
    >
      <Text style={styles.buttonText}> {children} </Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.4,
  },
});
