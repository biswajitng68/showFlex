import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';


export default function Tv({navigation}) {
  useEffect(() => {    
    tvshows();
    populartvshows();
    todayairshows();
}, []);

const [show,setshow]=useState([]);
const [popshow,setpopshow]=useState([]);
const [todayair,settodayair]=useState([]);







const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzYmM1NjMzMGYyNjUxZjBmNjdkY2VkMDhlMGM4ZCIsInN1YiI6IjY0YjgxY2YzZDM5OWU2MDE0ZTVlMGI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcrmLtkzegVx-Qhs-ISYZ2SRNpUDNJlp_itEN6lk4wg'
  }
};


const tvshows = async (e) => {
  const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=hindi', options);
  const json = await response.json()
 setshow(json.results);
}



const optionspopular = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzYmM1NjMzMGYyNjUxZjBmNjdkY2VkMDhlMGM4ZCIsInN1YiI6IjY0YjgxY2YzZDM5OWU2MDE0ZTVlMGI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcrmLtkzegVx-Qhs-ISYZ2SRNpUDNJlp_itEN6lk4wg'
  }
};

const populartvshows = async (e) => {
  const response = await fetch('https://api.themoviedb.org/3/tv/popular', optionspopular);
  const json = await response.json()
 setpopshow(json.results);
}



  const optionsair = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzYmM1NjMzMGYyNjUxZjBmNjdkY2VkMDhlMGM4ZCIsInN1YiI6IjY0YjgxY2YzZDM5OWU2MDE0ZTVlMGI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcrmLtkzegVx-Qhs-ISYZ2SRNpUDNJlp_itEN6lk4wg'
    }
  };
  


    const todayairshows = async (e) => {
      const response = await fetch('https://api.themoviedb.org/3/tv/airing_today', optionsair);
      const json = await response.json()
     settodayair(json.results);
    }




return (

    <ScrollView>
        <View style={styles.container}>

       

            <View style={styles.line}>
                <Text style={styles.heading}>Trending TV Shows</Text>
                <FlatList
                    horizontal={true}
                    data={show}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                              <TouchableOpacity 
                            onPress={()=>{navigation.navigate('tvdetail',{id:e.item.id});}
                           
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
                <Text style={styles.heading}>Popular TV Shows</Text>
                <FlatList
                    horizontal={true}
                    data={popshow}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                              <TouchableOpacity 
                            onPress={()=>{navigation.navigate('tvdetail',{id:e.item.id});}
                           
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
                <Text style={styles.heading}>Airing Today</Text>
                <FlatList
                    horizontal={true}
                    
                    data={todayair}
                    renderItem={(e) => {

                        const imurl = e.item.poster_path;
                        const p = "https://image.tmdb.org/t/p/original" + imurl;
                        if (imurl) {
                            return <View style={[styles.card, styles.shadowProp]}>
                             <TouchableOpacity 
                            onPress={()=>{navigation.navigate('tvdetail',{id:e.item.id});}
                           
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

}

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