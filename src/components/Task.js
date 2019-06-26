import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import moment from "moment"
import "moment/locale/pt-br"
import CommonStyles from "../CommonStyles"

export default props => {
  const check =
    props.doneOn !== null ? (
      <View style={styles.done}>
        <Icon name="check" size={20} style={CommonStyles.colors.secondary} />
        {/* <Text style={CommonStyles.colors.secondary}>✓</Text> */}
      </View>
    ) : (
      <View style={styles.pending} />
    )

  const deskStyle =
    props.doneOn !== null ? { textDecorationLine: "line-through" } : {}

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{check}</View>
      <View>
        <Text style={[styles.description, deskStyle]}>{props.description}</Text>
        <Text style={styles.date}>
          {moment(props.estimatedDate)
            .locale("pt-br")
            .format("ddd, D [de] MMMM")}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#AAA"
  },
  checkContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%"
  },
  done: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#4D7031",
    alignItems: "center",
    justifyContent: "center"
  },
  pending: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#555"
  },
  description: {
    fontFamily: CommonStyles.fontFamily,
    color: CommonStyles.colors.mainText,
    fontSize: 15
  },
  date: {
    fontFamily: CommonStyles.fontFamily,
    color: CommonStyles.colors.subText,
    fontSize: 12
  }
})
