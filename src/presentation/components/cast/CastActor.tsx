import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: actor.avatar}} style={styles.avatar} />

      <View style={styles.actorInfo}>
        <Text style={styles.textName}>{actor.name}</Text>
        <Text style={styles.textCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  avatar: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textCharacter: {
    fontSize: 12,
    opacity: 0.7,
  },
});
