module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
    'react/react-in-jsx-scope': 0,
    //if we want to group imports can use below.
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^react'],
        ['^antd'],
        ['^@?\\w'],
        ['@/(.*)'],
        ['^[./]'],
      ],
    }],
  },
};
