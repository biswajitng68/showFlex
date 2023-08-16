import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const Search = ({ navigation }) => {


    const [keyw, setkeyw] = useState();
    const [serchlist, setsearch] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzYmM1NjMzMGYyNjUxZjBmNjdkY2VkMDhlMGM4ZCIsInN1YiI6IjY0YjgxY2YzZDM5OWU2MDE0ZTVlMGI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcrmLtkzegVx-Qhs-ISYZ2SRNpUDNJlp_itEN6lk4wg'
        }
    };

    const list = () => {
        let rows = [];
        if (serchlist) {
            console.log(serchlist);
            for (let i = 0; i < serchlist.length; i++) {
                const imurl = serchlist[i].backdrop_path;
                const p = "https://image.tmdb.org/t/p/original" + imurl;
                if (serchlist[i].title) {
                    
                    rows.push(
                        <TouchableOpacity onPress={() => { navigation.navigate('Details', { id: serchlist[i].id }); }}>
                            <View style={{flexDirection:"row", padding: '2', margin: 5,justifyContent:'center'}}>
                            <Text style={{ color: 'white',width:'80%', }}>{serchlist[i].title} </Text>
                            <Image
                                source={{ uri: p }}
                                style={{objectFit:'contain',width:70,height:40,alignItems:'flex-end',}}
                                            
                            />
                            </View>
                           
                        </TouchableOpacity>

                    );
                }



            }

        }
        else {
            console.log("hi");
            rows.push(<Text style={{ color: 'white', padding: '5', margin: 5 }}>No results </Text>)
        }
        return rows;

    };

    const curr = async (val) => {
        // e.preventDefault();

        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${val}&include_adult=false&page=1`, options);
        const json = await response.json()

        //console.log(json.results);

        setsearch(json.results);


    }


    return (
        <>
            <View style={styles.container}>
                <View style={{ height: 40, width: '100%', backgroundColor: 'white', flexDirection: 'row', padding: 4, borderRadius: 20 }}>
                    <Icon name="search" style={{ color: 'black', width: '10%', paddingVertical: 6, padding: 6 }} size={20} />
                    <TextInput style={styles.input} value={keyw} placeholder='Search here' onChangeText={(e) => { setkeyw(e); console.log(e); curr(e); }} />
                </View>
                <ScrollView style={{ width: '99%' }} >
                    <View style={{ backgroundColor: 'black', paddingHorizontal: "5%", paddingVertical: 20 }}>
                        {
                            list()
                        }

                    </View>
                </ScrollView>



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
            backgroundColor: "black",
            paddingVertical: 20,
            paddingHorizontal: 12,


        },
        input: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            fontSize: 15,
            borderRadius: 1,
            paddingVertical: 3,
            paddingHorizontal: 10,




        },


    }
);

export default Search;