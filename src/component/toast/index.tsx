import { Component } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { ICONS } from '../../assets/icon';
import { COLORS, SIZE } from '../../design-system';
import Text from '../text';
import type { ToastProps, ToastState } from './type';

export class Toast extends Component<{}, ToastState> {
  static myComponentInstance: Toast;
  animatedValue: Animated.Value;

  constructor(props: {}) {
    super(props);

    this.state = {
      text: '',
      modalShown: false,
      type: 'default',
    };

    this.animatedValue = new Animated.Value(0);
    Toast.myComponentInstance = this;
  }

  static show({ text = '', type = 'default' }: Partial<ToastProps>) {
    Toast.myComponentInstance._show(
      text,
      type as 'success' | 'error' | 'warning' | 'default'
    );
  }

  // Ensure text is a string when showing the toast
  _show(text: string, type: 'success' | 'error' | 'warning' | 'default') {
    this.setState({ text, type }, () => this.callToast());
  }

  callToast() {
    if (this.state.modalShown) return;

    this.setState({ modalShown: true });

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 250,
      delay: this.state.type === 'error' ? 1000 : 0,
      useNativeDriver: true,
    }).start(() => this.closeToast());
  }

  closeToast() {
    setTimeout(() => {
      this.setState({ modalShown: false });

      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 250,
        delay: this.state.type === 'error' ? 1000 : 0,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }

  render() {
    const { text, type } = this.state;

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });

    const animation = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [SIZE.height, 0, 0],
    });

    const renderIcon = () => {
      const iconMap: { [key: string]: any } = {
        success: ICONS.toast.success,
        error: ICONS.toast.error,
        warning: ICONS.toast.warning,
        default: ICONS.toast.default,
      };
      return iconMap[type] || iconMap.default; // Fallback to default icon if type is not found
    };

    return (
      <Animated.View
        style={[
          styles.overlay,
          { opacity, transform: [{ translateY: animation }] },
        ]}
      >
        <Animated.View
          style={[
            styles.toastContainer,
            { opacity, transform: [{ translateY: animation }] },
          ]}
        >
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={renderIcon()}
          />
          <Text style={styles.text} variant="label-2">
            {text}
          </Text>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blackTransparent[50],
  },
  toastContainer: {
    borderRadius: 11,
    alignSelf: 'center',
    backgroundColor: COLORS.light['50'],
    width: 220,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
  text: {
    color: COLORS.dark[500],
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Toast;
