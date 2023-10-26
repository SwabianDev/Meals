import { Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: 'ccc' }}
        style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}>
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
    opacity: 1,
    borderWidth: 1,
    elevation: 10,
    shadowColor: '',
  },
  innerContainer: {
    borderRadius: 10,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  text: {
    color: 'black',
  },
})
