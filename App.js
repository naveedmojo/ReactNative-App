import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoalsList, setcourseGoalsList] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    setcourseGoalsList((currentgoalslist) => {
      return [
        ...currentgoalslist,
        { text: enteredGoalText, id: Math.random().toString() },
      ];
    });
    endGoal();
  }
  function endGoal() {
    setisModalVisible(false);
  }
  function deleteitem(id) {
    setcourseGoalsList((currentgoalslist) => {
      return currentgoalslist.filter((item) => id != item.id);
    });
  }
  function addnewgoal() {
    setisModalVisible(true);
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appcontainer}>
        <Button color='#5e08cc' title='Add New Goal' onPress={addnewgoal} />
        {isModalVisible && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            visible={isModalVisible}
            endGoal={endGoal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoalsList}
            alwaysBounceVertical={false}
            renderItem={({ item }) => {
              return (
                <GoalItem
                  text={item.text}
                  id={item.id}
                  deleteitem={deleteitem}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
