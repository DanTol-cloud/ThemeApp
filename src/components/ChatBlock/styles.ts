import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageBlock: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 8,
  },
  messageText: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
});
