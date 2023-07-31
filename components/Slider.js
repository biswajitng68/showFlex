import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity,Dimensions } from 'react-native';
const {height,width}=Dimensions.get('window');
const Slider =()=>{


    return (
     <>
     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
     <View >
     <View style={{width:90,hieght:90,backgroundColor:'green'}}>

     </View>
        <Text>hi</Text>
        <FlatList
         data={[1,1,1,1]}
         renderItem={({item,index})=>{
         return (<View style={{height:100,width:100}}>
            
              
            <View style={{height:90,width:90,backgroundColor:"black"}}></View>
            
         </View>);
         }}
        />

     </View>
     </View>
     
     </>
    );
};

export default Slider;
