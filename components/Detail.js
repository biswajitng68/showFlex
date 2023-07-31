import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { blue300 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

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
            {movie&&<>
            <View style={styles.container}>
                <Image source={{uri:base+movie.backdrop_path}} style={styles.mainimage}/>
            </View>
            <View style={{alignItems:"center"}}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.gentext}>{movie.status}</Text>
                <Text style={styles.gentext}>{movie.runtime} min</Text>
                </View>
                
                <View style={{flexDirection:"row"}}>
                {movie.genres&&
                  (()=>{
                    var genre=[]
                    for(let i=0;i<movie.genres.length;i++){
                      genre.push(
                        
                        <Text style={styles.gentext} key={i}>{movie.genres[i].name}</Text>
                      
                      )
                    }
                    return genre;
                  })()
                }
                </View>
                <Text style={styles.gentext}>Overview: {movie.overview}</Text>
            </View>
            </View></>}
            <View style={{width:100,height:100,backgroundColor:"white"}}></View>
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
    backgroundColor:"#b5d7f5",
    borderRadius:5,
    width:"90%",
    padding:5,
    elevation:30,
    shadowColor:"white"
     // Adjust this value to control the height of the transparent area
   // Change the last value (0.5) to adjust the opacity
  },
  title:{
    color:"black",
    fontSize:20,
    fontWeight:"600",
    
  },
  gentext:{
    color:"black",
    fontSize:15,
    fontWeight:"500",
    padding:5
  }
})