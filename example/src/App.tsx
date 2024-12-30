import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, theme } from 'react-native-mhs-design-system';

interface IAppProps {}

// const { GIFFS, ICONS, IMAGES, FONTS_TYPE, LOTTIES_FILE } = assets;

// FONTS_TYPE.Bold;

const App: FC<IAppProps> = () => {
  return (
    <View style={styles.container}>
      <Text variant="heading-1" style={{ color: theme.COLORS.dark['400'] }}>
        test
      </Text>
      <Button title="tesad" primary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
