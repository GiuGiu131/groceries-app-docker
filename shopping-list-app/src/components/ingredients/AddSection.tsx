import React, { useEffect, useRef } from "react";
import { Text, TextInput, TouchableOpacity, Keyboard, Animated, TouchableWithoutFeedback, View } from "react-native";
import { IngredientsListStyles } from "../../styles/GlobalStyles";

export const AddSection = ({ quantity, setQuantity, onAdd }: { quantity: string; setQuantity: (q: string) => void; onAdd: () => void }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardWillShow", e => {
      Animated.timing(slideAnim, {
        toValue: -e.endCoordinates.height,
        duration: 250,
        useNativeDriver: false
      }).start();
    });

    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [slideAnim]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <Animated.View style={[IngredientsListStyles.addSection, { marginBottom: slideAnim }]}>
          <Text style={IngredientsListStyles.label}>Qnt</Text>
          <TextInput style={IngredientsListStyles.input} placeholder="1" keyboardType="numeric" value={quantity} onChangeText={setQuantity} onSubmitEditing={() => Keyboard.dismiss()} onBlur={() => Keyboard.dismiss()} />
          <TouchableOpacity style={IngredientsListStyles.addBtn} onPress={onAdd}>
            <Text style={IngredientsListStyles.addBtnText}>Add to Shopping List</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
