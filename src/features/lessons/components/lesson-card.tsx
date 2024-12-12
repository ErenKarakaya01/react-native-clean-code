import { View, Text } from 'react-native'
import React from 'react'

export type LessonCardProps = {
  image: string
  title: string
  total: number
  completed: number
}

const LessonCard = () => {
  return (
    <View>
      <Text>LessonCard</Text>
    </View>
  )
}

export default LessonCard