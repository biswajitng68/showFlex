
import React, { useEffect, useState,useRef } from "react";
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Home = ({navigation}) => {
    // https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg
    useEffect(() => {
        trendinnow();
        topratedmovie();
        curr();
        // callSetinterval();
    }, []);
    const [movie, setmovie] = useState([]);
    const [topmovie, settopmovie] = useState([]);
    const [toprate, settoprated] = useState([]);

//  #########################################################################################################

    const [data, setdata] = useState([1, 2, 3, 4,5,6,7]);
    const [indexpos,setindex]=useState(0);
    const[pos,setpos]=useState(0);

const flatListRef = useRef(null)
let index=0;
const totalIndex = data.length;
const [interval,setint]=useState(111);
let val=false;


function callSetinterval(){
               if(val)
               {
                   clearInterval(interval);
               }

               let   inter= setInterval(PrintFunction, 5000);
                setint(inter);

            }

function callClearinterval(){
                //console.log("Current id: "+ interval)
                clearInterval(interval);
            }
 function PrintFunction(){
    //console.log("id "+interval);
    setpos((pos+1)%totalIndex);
    index=(index+1)%totalIndex;
   // console.log(index);
    flatListRef.current.scrollToIndex({animated: true, index: index})
            }  

// #####################################################################################################################


    const trendinnow = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        //console.log(json.results);

        setmovie(json.results);


    }
    //  https://image.tmdb.org/t/p/original/cHRitjn1hJgz00jOkF7PRGkn9kY.jpg

    const topratedmovie = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        //console.log(json.results);

        settoprated(json.results);
        // setdata(json.results);


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
            <View style={{height: height / 3}}>                   

<FlatList
    horizontal
    pagingEnabled
    data={data}
    ref={flatListRef}
    
    onScrollEndDrag={(e)=>{
       
        val=true;
        callSetinterval();
    }}
    onScroll={(e)=>{setindex(Math.ceil((e.nativeEvent.contentOffset.x)/width));
    
    index=Math.ceil((e.nativeEvent.contentOffset.x)/width);
    }}
    renderItem={({ item, index }) => {
      const imurl = item.backdrop_path;
      const p = "https://image.tmdb.org/t/p/original" + imurl;
        return (<View style={{ height: height / 3, width: width, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: "90%", width: "90%", backgroundColor: "green",borderRadius:5 }}>
            <Image
                                            source={{ uri: p }}

                                            style={{objectFit:'contain',height:'100%',width:'100%'}}
                                        />
            </View>

        </View>);
    }}
/>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center' }}>{data.map((item, ind) => {
 
   
    return (
        
        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: ind==indexpos?'green': 'white', marginLeft: 8 }}>
          
        </View>
    )
})}</View>
</View>

            <View style={styles.line}>
                    <Text style={styles.heading}>Top Rated</Text>
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
export default Home;