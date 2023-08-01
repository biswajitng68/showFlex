import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Movies({navigation}) {
  useEffect(() => {
    trendinnow();
    topratedmovie();
    curr();
    
}, []);
const [movie, setmovie] = useState([]);
const [topmovie, settopmovie] = useState([]);
const [toprate, settoprated] = useState([]);



const trendinnow = async (e) => {
    // e.preventDefault();

    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=03c3bc56330f2651f0f67dced08e0c8d");
    const json = await response.json()

    //console.log(json.results);

    setmovie(json.results);


}


const topratedmovie = async (e) => {
    // e.preventDefault();

    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=03c3bc56330f2651f0f67dced08e0c8d");
    const json = await response.json()

    //console.log(json.results);

    settoprated(json.results);


}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzYmM1NjMzMGYyNjUxZjBmNjdkY2VkMDhlMGM4ZCIsInN1YiI6IjY0YjgxY2YzZDM5OWU2MDE0ZTVlMGI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcrmLtkzegVx-Qhs-ISYZ2SRNpUDNJlp_itEN6lk4wg'
    }
};







// upcoming regional india
const curr = async (e) => {
    // e.preventDefault();

    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?region=in', options);
    const json = await response.json()

    //console.log(json.results);

    settopmovie(json.results);


}





return (

    <ScrollView>
        <View style={styles.container}>

        <View style={styles.line}>
                <Text style={styles.heading}>Trending</Text>
                <FlatList
                    horizontal={true}
                    data={movie}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                                 <TouchableOpacity 
                                      onPress={()=>{navigation.navigate('Details',{id:e.item.id});}
                                     
                                      }
                                    >
                                <View style={{ height: '100%', width: '100%' }}>
                                    <Image
                                        source={{ uri: p }}

                                        style={styles.img}
                                    />
                                </View>
                                </TouchableOpacity>
                               
                            </View>
                        }
                    }}
                />
            </View>
            <View style={styles.line}>
                <Text style={styles.heading}>Top Rated</Text>
                <FlatList
                    horizontal={true}
                    data={toprate}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                            <TouchableOpacity 
                            onPress={()=>{navigation.navigate('Details',{id:e.item.id});}
                           
                            }
                          >
                                <View style={{ height: '100%', width: '100%' }}>
                                    <Image
                                        source={{ uri: p }}

                                        style={styles.img}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                        }
                    }}
                />
            </View>
            <View style={styles.line}>
                <Text style={styles.heading}>Upcoming</Text>
                <FlatList
                    horizontal={true}
                    data={topmovie}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                               <TouchableOpacity 
                            onPress={()=>{navigation.navigate('Details',{id:e.item.id});}
                           
                            }
                          >
                                <View style={{ height: '100%', width: '100%' }}>
                                    <Image
                                        source={{ uri: p }}

                                        style={styles.img}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                        }
                    }}
                />
            </View>

            


        </View>

    </ScrollView>





)

};
const styles = StyleSheet.create(
{
    container: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: "#0e1012",
        padding: 10,


    },
    line: {
        backgroundColor: "#0e1012",

        margin: 10, width: '100%', height: 250
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: "#092847",
        width: 150,
        margin: 10,
        borderRadius: 5,

    },
    img: {
        objectFit: 'contain',
        height: '100%',
        width: '100%',
        borderRadius: 5,
    },
    shadowProp: {
        elevation: 5,
        shadowColor: 'white',
        shadowOpacity: 0.03,
        shadowRadius: 2,
    },

}
);


