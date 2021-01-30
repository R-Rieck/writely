import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import SongItem from "../../components/songItem";
import styles from "../../styles/pages/home/homeStyles";
import { SongsType } from "../../types/song";

const data = require("../../../assets/test.data.json");

const Home = ({ navigation }: any) => {
  const [songs] = useState<SongsType>(data);

  useEffect(() => {
    console.log(songs)
  }, []);

  return (
    <View style={styles.homeContainer}>
      <Text style={{color: 'white', fontSize: 70}}>Hallo</Text>
      {/* <ScrollView>
        {songs &&
          songs.songList &&
          songs.songList.map((song) => <SongItem song={song}></SongItem>)}
      </ScrollView> */}
    </View>
  );
};

export default Home;
