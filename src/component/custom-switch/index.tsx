import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../design-system';
import { Switch } from '../../modules/switch';
import type { ICustomSwitch } from './type';

const CustomSwitch: FC<ICustomSwitch> = ({ ...rest }) => {
  return (
    <Switch
      containerStyle={styles.container}
      disabled={false}
      circleSize={22}
      barHeight={25}
      circleBorderWidth={2}
      backgroundActive={COLORS.primary[500]}
      backgroundInactive={COLORS.dark[200]}
      circleActiveColor={COLORS.light[50]}
      circleInActiveColor={COLORS.light[50]}
      circleBorderActiveColor={COLORS.primary[500]}
      circleBorderInactiveColor={COLORS.dark[200]}
      changeValueImmediately={true}
      innerCircleStyle={styles.innerCircle}
      outerCircleStyle={styles.outerCircle}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  innerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outerCircle: {
    borderColor: COLORS.primary[500],
  },
});

export default CustomSwitch;
