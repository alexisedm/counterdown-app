import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('Contador en 0');
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 63,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
