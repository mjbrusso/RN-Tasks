import React, { Component } from "react"
import { StyleSheet, Text, View, ImageBackground, FlatList } from "react-native"
import moment from "moment"
import "moment/locale/pt-br"
import todayImage from "../../assets/imgs/today.jpg"
import CommonStyles from "../CommonStyles"
import Task from "../components/Task"

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
    ]
  }

  toogleTask = id => {
    const newtasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task = { ...task }
        task.doneOn = task.doneOn ? null : new Date()
      }
      return task
    })
    this.setState({ tasks: newtasks })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
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
            data={this.state.tasks}
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
  taskContainer: { flex: 7 }
})
