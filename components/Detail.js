import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

export default function Detail() {
    const base="https://image.tmdb.org/t/p/original"
    useEffect(() => {
        moviedetail();
    }, []);
    const [movie, setmovie] = useState([]);
    const moviedetail = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/movie/5?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);

        setmovie(json);
        console.log(movie.poster_path);

    }
  return (
    <SafeAreaView style={{backgroundColor:"black",height:"100%"}}>
        <ScrollView>
            {movie&&
            <View style={styles.container}>
                <Image source={{uri:base+movie.backdrop_path}} style={styles.mainimage}/>
            </View>}
            <View style={{alignItems:"center"}}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.gentext}>{movie.runtime} min</Text>
                <Text style={styles.gentext}>Overview: {movie.overview}</Text>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
        
    },
    mainimage:{
        width:"100%",
        height:250
    },
    overlay: {
    position: 'relative',
    bottom: 30,
    left:0,
    right:0,
    backgroundColor:"#1d4d5e",
    borderRadius:5,
    width:"90%",
    padding:5,
     // Adjust this value to control the height of the transparent area
   // Change the last value (0.5) to adjust the opacity
  },
  title:{
    color:"white",
    fontSize:20,
    fontWeight:"600",
    
  },
  gentext:{
    fontSize:15,
    fontWeight:"500"
  }
})