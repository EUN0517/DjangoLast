import React from "react";
import { StyleSheet, Text, View, FlatList, AsyncStorage } from "react-native";
import Header from "./app/components/Header";
import Subtitle from "./app/components/Subtitle";
import Input from "./app/components/Input";
import Listitem from "./app/components/Listitem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: []
    };
  }
  componentWillMount() {
    this.getData();
  }
  storeData = () => {
    AsyncStorage.setItem("@todo:state", JSON.stringify(this.state));
  };
  getData = () => {
    AsyncStorage.getItem("@todo:state").then(state => {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    });
  };
  _makeTodoItem = ({ item, index }) => {
    return (
      <Listitem
        item={item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete = !newTodo[index].isComplete;
          this.setState({ todos: newTodo }, this.storeData);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({ todos: newTodo }, this.storeData);
        }}
      />
    );
  };
  _changeText = value => {
    this.setState({ inputValue: value });
  };
  _addTodoItem = () => {
    if (this.state.inputValue !== "") {
      const prevTodo = this.state.todos;
      const newTodo = { title: this.state.inputValue, isComplete: false };
      this.setState(
        {
          inputValue: "",
          todos: prevTodo.concat(newTodo) //concat:두 개의 리스트를 하나로 이어 붙이는 애
        },
        this.storeData
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header />
        </View>
        <View style={styles.subtitlePos}>
          <Subtitle title="Write ToDoList here" />
        </View>
        <View style={styles.inputPos}>
          <Input
            value={this.state.inputValue}
            changeText={this._changeText}
            addTodoItem={this._addTodoItem}
          />
        </View>
        <View style={styles.subtitlePos}>
          <Subtitle title="해야할 일" />
        </View>
        <View style={styles.subtitlePos}>
          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => "${index}"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headercenter: {
    alignItems: "center"
  },
  subtitlePos: {
    marginBottom: 5,
    marginLeft: 15
  },
  inputPos: {
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 15
  }
});
