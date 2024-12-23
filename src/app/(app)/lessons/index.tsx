import { View } from 'react-native'
import React from 'react'
import CategoriesList from '@/features/lessons/components/categories-list'

const LessonsRoute = () => {
  return (
    <View className='flex-1'>
      <CategoriesList />
    </View>
  )
}

export default LessonsRoute