import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';
export default GoalInput = (props) => {
  const { addGoalHandler, visible, endGoal } = props;
  const [enteredGoalText, setenteredGoalText] = useState('');
  function goalInputHandler(text) {
    setenteredGoalText(text);
  }
  function addGoal() {
    addGoalHandler(enteredGoalText);
    setenteredGoalText('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/Goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal'
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoal} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button color='#f31282' title='Cancel' onPress={endGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
