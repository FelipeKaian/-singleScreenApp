import { View } from 'react-native';

export const Divider = ({ vertical, color, size }) => {
  return vertical ? (
    <View style={{ width: 2, backgroundColor: color, height: size }} />
  ) : (
    <View style={{ height: 2, backgroundColor: color, width: size }} />
  );
};
