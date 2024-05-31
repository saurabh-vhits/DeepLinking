import color from '@theme/color';
import React, {FC, memo, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import RNText from '../rnText/RNText';
import {styles} from './inputBox.style';
import {InputBoxProps} from './inputBoxProps';

const InputBox: FC<InputBoxProps> = ({
  containerStyle,
  label,
  inputContainerStyle,
  placeholder,
  placeholderTextColor,
  error,
  value,
  onChangeText,
  keyboardType,
  multiline,
  numberOfLines,
  maxLength,
  editable,
}) => {
  const inputRef: any = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const checkIsFocusedHandler = () => {
    setTimeout(() => {
      let result = inputRef?.current?.isFocused();
      setIsFocused(result);
    }, 0);
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <RNText style={styles.labelText}>{label}</RNText>}
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          {
            borderColor: error
              ? color.warning
              : !isFocused
              ? color.lightgray
              : color.primary,
            borderWidth: !isFocused && !error ? 1 : 1.5,
          },
        ]}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onFocus={checkIsFocusedHandler}
          onEndEditing={checkIsFocusedHandler}
          secureTextEntry={false}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          editable={editable}
          cursorColor={color.black}
          allowFontScaling={false}
        />
      </View>
      <View style={styles.errorView}>
        {error && (
          <RNText numberOfLines={1} style={styles.errorText}>
            {error}
          </RNText>
        )}
      </View>
    </View>
  );
};

export default memo(InputBox);
