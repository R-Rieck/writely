import React from "react";
import { View, Text } from "react-native";
import { SongType } from "../types/song";

type SongItemPropsType = {
  song: SongType;
};

const SongItem = (props: SongItemPropsType) => {
  const { song } = props;
  return (
    <View>
      <Text>{song.title}</Text>
    </View>
  );
};

export default SongItem;