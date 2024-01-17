import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 30,
  },

  titleSection: {
    marginBottom: 12,
  },

  childrenSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  }

});
