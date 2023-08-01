import { View, Text, SafeAreaView, ScrollView ,Image} from 'react-native'
import React, { useState,useEffect } from 'react'

const Profdetail = ({route,navigation}) => {
    const {castid}=route.params;
    console.log(castid);
    const base="https://image.tmdb.org/t/p/original"
    useEffect(() => {
        // moviedetail();
        prof();
    }, []);
    const [movie,setmovie]=useState([]);
    const [profile,setprof]=useState([]);
    const moviedetail = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/person/"+castid+"/combined_credits?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);

        setmovie(json);

    }
    const prof = async (e) => {
        // e.preventDefault();

        const response = await fetch("https://api.themoviedb.org/3/person/"+castid+"?api_key=03c3bc56330f2651f0f67dced08e0c8d");
        const json = await response.json()

        console.log(json);

        setprof(json);

    }
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Image source={{uri:base+profile.profile_path}} style={{width:"100%",height:300}}/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profdetail