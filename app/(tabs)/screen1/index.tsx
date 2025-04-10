import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from 'expo-router';


export default function Tab() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button onPress={() => navigation.navigate('next')}>
        Next
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
