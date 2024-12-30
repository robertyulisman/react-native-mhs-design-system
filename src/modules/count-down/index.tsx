/* eslint-disable react-native/no-inline-styles */
import React, { type ComponentType } from 'react';
import { AppState, StyleSheet, TouchableOpacity, View } from 'react-native';
import { sprintf } from 'sprintf-js';
import { Text } from '../../component';
import type { ICountDownProps, ICountDownState } from './type';

const DEFAULT_DIGIT_STYLE = { backgroundColor: '#FAB913' };
const DEFAULT_DIGIT_TXT_STYLE = { color: '#000' };
const DEFAULT_TIME_LABEL_STYLE = { color: '#000' };
const DEFAULT_SEPARATOR_STYLE = { color: '#000' };
const DEFAULT_TIME_TO_SHOW = ['D', 'H', 'M', 'S'];
const DEFAULT_TIME_LABELS = {
  d: 'Days',
  h: 'Hours',
  m: 'Minutes',
  s: 'Seconds',
};

class CountDown extends React.Component<ICountDownProps, ICountDownState> {
  static defaultProps = {
    digitStyle: DEFAULT_DIGIT_STYLE,
    digitTxtStyle: DEFAULT_DIGIT_TXT_STYLE,
    timeLabelStyle: DEFAULT_TIME_LABEL_STYLE,
    timeLabels: DEFAULT_TIME_LABELS,
    separatorStyle: DEFAULT_SEPARATOR_STYLE,
    timeToShow: DEFAULT_TIME_TO_SHOW,
    showSeparator: false,
    until: 0,
    size: 15,
    running: true,
  };

  state: ICountDownState = {
    until: Math.max(this.props.until || 0, 0),
    lastUntil: null,
    wentBackgroundAt: null,
  };

  private timer: NodeJS.Timeout;
  private appStateSubscription: { remove: () => void } | null = null;

  constructor(props: ICountDownProps) {
    super(props);
    this.timer = setInterval(this.updateTimer, 1000);
  }

  componentDidMount() {
    this.appStateSubscription = AppState.addEventListener(
      'change',
      this._handleAppStateChange
    );
  }

  componentWillUnmount() {
    if (this.appStateSubscription) {
      this.appStateSubscription.remove();
    }
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps: ICountDownProps) {
    if (
      this.props.until !== prevProps.until ||
      this.props.id !== prevProps.id
    ) {
      this.setState({
        lastUntil: prevProps.until,
        until: Math.max(this.props.until || 0, 0),
      });
    }
  }

  _handleAppStateChange = (currentAppState: string) => {
    const { until, wentBackgroundAt } = this.state;
    if (
      currentAppState === 'active' &&
      wentBackgroundAt &&
      this.props.running
    ) {
      const diff = (Date.now() - wentBackgroundAt) / 1000.0;
      this.setState({
        lastUntil: until,
        until: Math.max(0, until - diff),
      });
    }
    if (currentAppState === 'background') {
      this.setState({ wentBackgroundAt: Date.now() });
    }
  };

  getTimeLeft = () => {
    const { until } = this.state;
    return {
      seconds: until % 60,
      minutes: Math.floor(until / 60) % 60,
      hours: Math.floor(until / (60 * 60)) % 24,
      days: Math.floor(until / (60 * 60 * 24)),
    };
  };

  updateTimer = () => {
    if (this.state.lastUntil === this.state.until || !this.props.running) {
      return;
    }
    if (
      this.state.until === 1 ||
      (this.state.until === 0 && this.state.lastUntil !== 1)
    ) {
      this.props.onFinish?.();
      this.props.onChange?.(this.state.until);
    }

    if (this.state.until === 0) {
      this.setState({ lastUntil: 0, until: 0 });
    } else {
      this.props.onChange?.(this.state.until);
      this.setState((prevState) => ({
        lastUntil: prevState.until,
        until: Math.max(0, prevState.until - 1),
      }));
    }
  };

  renderDigit = (d: string) => {
    const { digitStyle, digitTxtStyle, size } = this.props;
    return (
      <View
        style={[
          styles.digitCont,
          { width: size! * 2.3, height: size! * 2.6 },
          digitStyle,
        ]}
      >
        <Text style={[styles.digitTxt, { fontSize: size }, digitTxtStyle]}>
          {d}
        </Text>
      </View>
    );
  };

  renderLabel = (label: string) => {
    const { timeLabelStyle, size } = this.props;
    if (label) {
      return (
        <Text
          style={[styles.timeTxt, { fontSize: size! / 1.8 }, timeLabelStyle]}
        >
          {label}
        </Text>
      );
    }

    return '';
  };

  renderDoubleDigits = (label: string, digits: string) => {
    return (
      <View style={styles.doubleDigitCont}>
        <View style={styles.timeInnerCont}>{this.renderDigit(digits)}</View>
        {this.renderLabel(label)}
      </View>
    );
  };

  renderSeparator = () => {
    const { separatorStyle, size } = this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={[
            styles.separatorTxt,
            { fontSize: size! * 1.2 },
            separatorStyle,
          ]}
        >
          {':'}
        </Text>
      </View>
    );
  };

  renderCountDown = () => {
    const {
      timeToShow,
      timeLabels = DEFAULT_TIME_LABELS,
      showSeparator,
    } = this.props;
    // const { until } = this.state;
    const { days, hours, minutes, seconds } = this.getTimeLeft();
    const newTime = sprintf(
      '%02d:%02d:%02d:%02d',
      days,
      hours,
      minutes,
      seconds
    ).split(':');
    const Component: ComponentType<any> = this.props.onPress
      ? TouchableOpacity
      : View;

    return (
      <Component style={styles.timeCont} onPress={this.props.onPress}>
        {timeToShow?.includes('D')
          ? this.renderDoubleDigits(timeLabels.d, newTime[0] || '00')
          : null}
        {showSeparator && timeToShow?.includes('D') && timeToShow?.includes('H')
          ? this.renderSeparator()
          : null}
        {timeToShow?.includes('H')
          ? this.renderDoubleDigits(timeLabels!.h, newTime[1] || '00')
          : null}
        {showSeparator && timeToShow?.includes('H') && timeToShow?.includes('M')
          ? this.renderSeparator()
          : null}
        {timeToShow?.includes('M')
          ? this.renderDoubleDigits(timeLabels!.m, newTime[2] || '00')
          : null}
        {showSeparator && timeToShow?.includes('M') && timeToShow?.includes('S')
          ? this.renderSeparator()
          : null}
        {timeToShow?.includes('S')
          ? this.renderDoubleDigits(timeLabels!.s, newTime[3] || '00')
          : null}
      </Component>
    );
  };

  render() {
    return (
      <View
        style={[
          this.props.style,
          { alignSelf: 'center', flexDirection: 'row', alignItems: 'center' },
        ]}
      >
        <Text>{this.props.showBracket && '('}</Text>
        {this.renderCountDown()}
        <Text>{this.props.showBracket && ')'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeCont: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeTxt: {
    color: 'white',
    marginVertical: 2,
    backgroundColor: 'transparent',
  },
  timeInnerCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitCont: {
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleDigitCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  separatorTxt: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

export default CountDown;
export { CountDown };
