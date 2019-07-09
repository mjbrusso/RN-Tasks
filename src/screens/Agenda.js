import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native"
import moment from "moment"
import "moment/locale/pt-br"
import todayImage from "../../assets/imgs/today.jpg"
import CommonStyles from "../CommonStyles"
import Task from "../components/Task"
import Icon from "react-native-vector-icons/FontAwesome"

export default class Agenda extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        description: "Iniciar o curso de React Native",
        estimatedDate: new Date(),
        doneOn: new Date()
      },
      {
        id: Math.random(),
        description: "Concluir o curso",
        estimatedDate: new Date(),
        doneOn: null
      },
      {
        id: Math.random(),
        description: "Iniciar o curso de React Native",
        estimatedDate: new Date(),
        doneOn: new Date()
      },
      {
        id: Math.random(),
        description: "Concluir o curso",
        estimatedDate: new Date(),
        doneOn: null
      },
      {
        id: Math.random(),
        description: "Iniciar o curso de React Native",
        estimatedDate: new Date(),
        doneOn: new Date()
      },
      {
        id: Math.random(),
        description: "Concluir o curso",
        estimatedDate: new Date(),
        doneOn: null
      },
      {
        id: Math.random(),
        description: "Iniciar o curso de React Native",
        estimatedDate: new Date(),
        doneOn: new Date()
      },
      {
        id: Math.random(),
        description: "Concluir o curso",
        estimatedDate: new Date(),
        doneOn: null
      },
      {
        id: Math.random(),
        description: "Iniciar o curso de React Native",
        estimatedDate: new Date(),
        doneOn: new Date()
      },
      {
        id: Math.random(),
        description: "Concluir o curso",
        estimatedDate: new Date(),
        doneOn: null
      }
    ],
    visibleTasks: [],
    isDoneTasksVisible: true
  }

  toogleTask = id => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task = { ...task }
        task.doneOn = task.doneOn ? null : new Date()
      }
      return task
    })
    this.setState({ tasks }, this.filterTasks)
  }

  filterTasks = () => {
    const visibleTasks = this.state.isDoneTasksVisible
      ? [...this.state.tasks]
      : this.state.tasks.filter(task => task.doneOn === null)
    this.setState({ visibleTasks })
  }

  toogleFilter = () => {
    this.setState(
      { isDoneTasksVisible: !this.state.isDoneTasksVisible },
      this.filterTasks
    )
  }

  componentDidMount = () => {
    this.filterTasks()
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toogleFilter}>
              <Icon
                name={this.state.isDoneTasksVisible ? "eye" : "eye-slash"}
                size={20}
                color={CommonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment()
                .locale("pt-br")
                .format("ddd, D [de] MMMM")}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskContainer}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <Task {...item} onToogleTask={this.toogleTask} />
            )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 3 },
  titleBar: { flex: 1, justifyContent: "flex-end" },
  title: {
    fontFamily: CommonStyles.fontFamily,
    color: CommonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: CommonStyles.fontFamily,
    color: CommonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  taskContainer: { flex: 7 },
  iconBar: {
    marginTop: Platform.OS === "ios" ? 30 : 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
})
