import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import SongItem from "../../components/songItem";
import styles from "../../styles/pages/home/homeStyles";
import { SongsType } from "../../types/song";

const data = require("../../../assets/test.data.json");

const Home = ({ navigation }: any) => {
  const [songList] = useState<SongsType>(data);

  useEffect(() => {
    console.log(songList)
  }, [songList]);

  return (
    <View style={styles.homeContainer}>
      
      <ScrollView>
        {songList &&
          songList.songs &&
          songList.songs.map((song) => <SongItem key={ song.id}song={song}></SongItem>)}
      </ScrollView>
    </View>
  );
};

export default Home;
