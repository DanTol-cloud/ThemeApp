import { Text, View } from 'react-native';

import { UseFontSizeContext } from '../../context/FontSizeContext.tsx';
import { UseThemeContext } from '../../context/ThemeContext.tsx';
import { messageInterface, messages } from './data.ts';
import { styles } from './styles.ts';


//block to show how theme and font size changes
const ChatBlock = () => {
  const {blackTheme, whiteTheme} = UseThemeContext();
  const {fontSize} = UseFontSizeContext();

  return (
    <View style={styles.chatContainer}>
        {messages.map((item: messageInterface) => (
          <View key={item.id} style={[styles.messageBlock, {
            alignSelf: item.type === 'sender' ? 'flex-end' : 'flex-start',
            backgroundColor: whiteTheme,
            borderColor: blackTheme,
            marginVertical: fontSize / 2,
          }]}>
          <Text style={[styles.messageText, {color: blackTheme, fontSize}]}>{item.text}</Text>
          </View>
        ))}


    </View>
  );
};

export default ChatBlock;
