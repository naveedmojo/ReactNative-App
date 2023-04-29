import { StyleSheet, Text, View, Pressable } from 'react-native';
export default GoalItem = (props) => {
  const { text, id, deleteitem } = props;
  function delet() {
    deleteitem(id);
  }
  return (
    <View style={styles.goalitem}>
      <Pressable onPress={delet} android_ripple={{ color: '#dddddd' }}>
        <Text style={styles.textstyle}>{text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',

    color: 'white',
  },
  textstyle: {
    color: 'white',
    padding: 8,
  },
});
