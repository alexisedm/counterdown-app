import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Timer = ({initialMins = 0, initialSecs = 0}) => {
  const [mins, setMinutes] = useState(initialMins);
  const [secs, setSeconds] = useState(initialSecs);

  useEffect(() => {
    let interval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(interval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={styles.container}>
      {mins === 0 && secs === 0 ? null : (
        <Text>
          {' '}
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
