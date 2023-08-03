import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { blue300 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

export default function Detailtv({route,navigation}) {
    const base="https://image.tmdb.org/t/p/original"
    const {id}=route.params
    useEffect(() => {
        tvdetail();
        castdetail();
        simdetail();
    }, []);
    const [tv, settv] = useState([]);
    const [cast,setcast]=useState([]);
    const [similar,setsim]=useState([]);
    const tvdetail = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/tv/"+id+"?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);

        settv(json);
        console.log(tv.poster_path);

    }
    const castdetail = async (e) => {
      // e.preventDefault();

      const response = await fetch("https://api.themoviedb.org/3/tv/"+id+"/credits?api_key=03c3bc56330f2651f0f67dced08e0c8d");
      const json = await response.json()

      console.log(json);

      setcast(json);

  }

  const simdetail = async (e) => {
    // e.preventDefault();

    const response = await fetch("https://api.themoviedb.org/3/tv/"+id+"/similar?api_key=03c3bc56330f2651f0f67dced08e0c8d");
    const json = await response.json()

    console.log(json);

    setsim(json.results);

}
  return (
    <SafeAreaView style={{backgroundColor:"#18263d",height:"100%"}}>
        <ScrollView>
            {tv&&<>
            <View style={styles.container}>
                <Image source={{uri:base+(tv.backdrop_path?tv.backdrop_path:tv.poster_path)}} style={styles.mainimage}/>
            </View>
            <View style={{alignItems:"center"}}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{tv.name}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.gentext}>{tv.status}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.gentext}>Total Season: {tv.number_of_seasons}</Text>
                <Text style={styles.gentext}>Total episodes: {tv.number_of_episodes}</Text>
                </View>
                
                <View style={{flexDirection:"row"}}>
                {tv.genres&&
                  (()=>{
                    var genre=[]
                    for(let i=0;i<tv.genres.length;i++){
                      genre.push(
                        
                        <Text style={styles.gentext} key={i}>{tv.genres[i].name}</Text>
                      
                      )
                    }
                    return genre;
                  })()
                }
                </View>
                <Text style={styles.gentext}>Overview: {tv.overview}</Text>
                <Text style={{fontWeight:"900",fontSize:17,margin:5,color:"#a30ee8"}}>Cast</Text>
                <View style={{flexDirection:"row"}}>
                {cast.cast&&(()=>{
                    var castar=[]
                    let i=0,j=0;
                    var idarr=[];
                    while(i<4&&j<cast.cast.length){
                      if(cast.cast[i].profile_path){
                        console.log("cst: "+cast.cast[i].id);
                        let castid=cast.cast[i].id;
                      castar.push(
                        <TouchableOpacity 
                        key={cast.cast[i].id}
                        
                        onPress={(e)=>{console.log(castid);navigation.push('profile',{castid:castid});}
                       
                        }
                        
                      >
                        <View style={{width:68,height:68,backgroundColor:"#28d7fa",borderRadius:50,margin:4}} >
                          <Image source={{uri:base+cast.cast[i].profile_path}} style={{width:66,height:66,backgroundColor:"white",borderRadius:50}}/>
                        </View>
                      </TouchableOpacity>
                      )
                    i++;}
                    j++;
                    }
                    return castar;
                  })()}
                </View>
            </View>
            </View></>}
            <View style={styles.line}>
                    <Text style={styles.heading}>Similar</Text>
                    <FlatList
                        horizontal={true}
                        data={similar}
                        renderItem={(e) => {

                            const imurl = e.item.poster_path;
                            const p = "https://image.tmdb.org/t/p/original" + imurl;
                            if (imurl) {
                                return <View style={[styles.card, styles.shadowProp]}>
                                    <TouchableOpacity 
                                      onPress={()=>{navigation.push('tvdetail',{id:e.item.id});}
                                     
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
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#544d38"
        
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
    backgroundColor:"#140224",
    borderRadius:5,
    width:"90%",
    padding:10,
    elevation:30,
    shadowColor:"white"
     // Adjust this value to control the height of the transparent area
   // Change the last value (0.5) to adjust the opacity
  },
  title:{
    color:"#f5b567",
    fontSize:20,
    fontWeight:"600",
    
  },
  gentext:{
    color:"white",
    fontSize:14,
    fontFamily:"sans-serif",
    fontWeight:"300",
    padding:5
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