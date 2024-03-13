import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Profile() {
  return (
    <View styles = {styles.container}>
      <Title title ="Today is a good day" />
    </View>
  )
}