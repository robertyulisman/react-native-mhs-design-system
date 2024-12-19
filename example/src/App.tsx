import { StyleSheet, View } from 'react-native';
import { Button, Text, theme } from 'react-native-mhs-design-system';

const { COLORS } = theme;

export default function App() {
  return (
    <View style={styles.container}>
      <Text variant="heading-1" style={{ color: COLORS.primary['500'] }}>
        Result: {5}
      </Text>
      <Button title="tesad" primary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
