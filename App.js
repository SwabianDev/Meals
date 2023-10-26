import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import CategoriesScreen from './screens/categoriesScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen></CategoriesScreen>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
