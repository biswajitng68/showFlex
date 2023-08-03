import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
const Search=()=>{


    return(
        <>
        <View style={styles.container}>
            <View style={{height:40,width:'100%',backgroundColor:'white',flexDirection:'row',padding:4,borderRadius:20}}>
            <Icon name="search" style={{color:'black',width:'10%',paddingVertical:6,padding:6}} size={20} />
            <TextInput style={styles.input}  placeholder='Search here'/>  
            </View>

            <View style={{height:"50%",width:'97%',backgroundColor:'#14114FFF',paddingHorizontal:"10%",paddingVertical:20}}>
             <Text style={{color:'white',padding:'5',margin:5}}>Lorem ipsum dolor sit,amet consec </Text>
             <Text style={{color:'white',padding:'5',margin:5}}>Exercitationem incidunt reiciendis</Text>
             <Text style={{color:'white',padding:'5',margin:5}}>minima assumenda in minus aperiam </Text>
            </View>
            

        </View>
        
        
        </>
    )
};
const styles = StyleSheet.create(
    {
        container: {

            flex: 1,
            alignItems: 'center',
            // backgroundColor: "#0e1012",
            backgroundColor: "#18263d",
            paddingVertical: 20,
            paddingHorizontal:12,


        },
        input:{
            width:'80%',
            justifyContent:'center',
            alignItems:'center',
            color:'black',
            fontSize:15,
            borderRadius:1,
            paddingVertical:3,
            paddingHorizontal:10,
            
            

            
        },

        
    }
);

export default Search;