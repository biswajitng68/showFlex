import { View, Text, SafeAreaView, ScrollView ,Image,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'

const Profdetail = ({route,navigation}) => {
    const {castid}=route.params;
    console.log(castid);
    const base="https://image.tmdb.org/t/p/original"
    useEffect(() => {
        moviedetail();
        prof();
    }, []);
    const [movie,setmovie]=useState([]);
    const [profile,setprof]=useState([]);
    const moviedetail = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/person/"+castid+"/combined_credits?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);
        const unique = json.cast.filter((obj, index) => {
            return index === json.cast.findIndex(o => obj.id === o.id);
        });
        setmovie(unique);

    }
    const prof = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/person/"+castid+"?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);

        setprof(json);

    }
  return (
    <SafeAreaView style={{backgroundColor:"#18263d",height:"100%"}}>
        <ScrollView>
            <View>
                <Image source={{uri:base+profile.profile_path}} style={{width:"100%",height:400}}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{profile.name}</Text>
                <Text style={styles.subtitle}>Known for: {profile.known_for_department}  Birth: {profile.birthday}</Text>
                <Text style={styles.gentext}>
                    {profile.biography}
                </Text>
                <View style={styles.line}>
                    <Text style={styles.heading}>Works</Text>
                    <FlatList
                        horizontal={true}
                        data={movie}
                        renderItem={(e) => {

                            const imurl = e.item.poster_path;
                            const p = "https://image.tmdb.org/t/p/original" + imurl;
                            // console.log(e.item.id);
                            if (imurl) {
                                return <View style={[styles.card, styles.shadowProp]}>
                                    <TouchableOpacity 
                                      onPress={()=>{e.item.media_type=="movie"?navigation.push('Details',{id:e.item.id}):navigation.push('tvdetail',{id:e.item.id});}
                                     
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
    </SafeAreaView>
  )
}

export default Profdetail

const styles = StyleSheet.create({
    container:{
        height:"100%",
        position: 'relative',
        bottom: 50,
        left:0,
        right:0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:"#18263d",
        opacity:0.8
    },
    title:{
        color:"#f5b567",
        fontSize:20,
        fontWeight:"600",
        textAlign:"center"
      },
    subtitle:{
        color:"#f5b567",
        fontSize:15,
        fontWeight:"600",
        textAlign:"center"
    },
      gentext:{
        color:"white",
        fontSize:14,
        fontFamily:"sans-serif",
        fontWeight:"300",
        padding:20,
        
      },
      line: {
        backgroundColor: "#18263d",
    
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
})