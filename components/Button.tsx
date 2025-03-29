import React from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '@/style/colors';


type ButtonProps = {
    title?: string,
    icon?: string,
    onClick: Function,
    color?: string
}

const Button = (props: ButtonProps) => {
  const handlePress = ()=>{
    props.onClick()
  }
    return (
      <Pressable onPressIn={handlePress}>
        <Animated.View style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>{props.title}</Text>
          <FontAwesomeIcon name={props.icon} size={20} color={props.color||Colors.white} />
        </Animated.View>
      </Pressable>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent:'center',
      height:50,
      width:50
    },
    buttonText: {
      color: Colors.black,
      fontSize: 20,
    },
  });

export default Button;