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
    <SafeAreaView>
        <ScrollView>
            {movie&&
            <View style={styles.container}>
                <Image source={{uri:base+movie.backdrop_path}} style={styles.mainimage}/>
            </View>}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black"
    },
    mainimage:{
        width:"100%",
        height:200
    }
})