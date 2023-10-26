import { View, StyleSheet, Pressable, Text } from 'react-native'

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.buttonStyle}>
        <View styles={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 5,
    elevation: 10,
  },
  innerContainer: {
    color: 'white',
    borderRadius: 10,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
})
