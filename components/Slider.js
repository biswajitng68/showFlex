import React, { useEffect, useState,useRef } from "react";
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const Slider = () => {
    const [data, setdata] = useState([1, 2, 3, 4,5,6,7]);
    const [indexpos,setindex]=useState(0);
    const[pos,setpos]=useState(0);

const flatListRef = useRef(null)
let index=0;
const totalIndex = data.length;
//var interval=11111;
const [interval,setint]=useState(111);
let val=false;


function callSetinterval(){
    // call PrintFunction at an interval of 2 seconds
      console.log(val);
               if(val)
               {
                console.log("Clearing id: "+ interval);
                   clearInterval(interval);
               }

               let   inter= setInterval(PrintFunction, 5000);
                console.log("setInterval Id:"+inter);
                setint(inter);
                //callClearinterval()
            }

function callClearinterval(){
                console.log("Current id: "+ interval)
                clearInterval(interval);
            }
 function PrintFunction(){
    console.log("id "+interval);
    setpos((pos+1)%totalIndex);
    index=(index+1)%totalIndex;
    console.log(index);
    flatListRef.current.scrollToIndex({animated: true, index: index})
            }          
  useEffect (() => {
    callSetinterval()

  }, []);

    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <View style={{height: height / 2}}>                   

                    <FlatList
                        horizontal
                        pagingEnabled
                        data={data}
                        ref={flatListRef}
                        onScrollBeginDrag={(e)=>{
                           // console.log("manual scrolling "+interval);
                            val=true;
                            callSetinterval();
                        }}
                        onScroll={(e)=>{setindex(Math.ceil((e.nativeEvent.contentOffset.x)/width));
                        //console.log("scrolling");
                        //callClearinterval();
                        //console.log("automatic scrolling "+interval);
                        index=Math.ceil((e.nativeEvent.contentOffset.x)/width);
                        }}
                        renderItem={({ item, index }) => {
                            return (<View style={{ height: height / 2, width: width, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: "90%", width: "90%", backgroundColor: "green",borderRadius:5 }}>
                                    <Text>{item}</Text>
                                </View>

                            </View>);
                        }}
                    />
                    <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center' }}>{data.map((item, ind) => {
                       
                        return (
                            
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: ind==indexpos?'green': 'white', marginLeft: 8 }}></View>
                        )
                    })}</View>
                </View>

            </View>

        </>
    );
};

export default Slider;
