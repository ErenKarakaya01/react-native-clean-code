import React from 'react'
import { Stack } from 'expo-router'

const WordLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[word]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default WordLayout