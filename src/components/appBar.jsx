import { SafeAreaView } from 'react-native-safe-area-context';
import LogoSvg from '../assets/logo.svg';
import { StyleSheet } from 'react-native';

export const AppBar = () => {
  return (
    <SafeAreaView style={styles.appbar}>
      <LogoSvg style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#525251',
    paddingTop: 10,
    paddingBottom: 24,
    marginBottom: 18,
    display: 'flex',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {
    alignSelf: 'center',
  },
});
