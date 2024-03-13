import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View styles = {styles.container}>
      <Title title="Today is a good day" />
    </View>
  )
}