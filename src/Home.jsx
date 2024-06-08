import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  const navigation=useNavigation()
  
    useLayoutEffect(()=>{
       navigation.setOptions({
        headerShown:false
       })
    },[])  


  return (
    <SafeAreaView style={styles.container} className="flex-1 bg-jim">
       <View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis vero eligendi dignissimos doloremque. Ipsa, quod? Aperiam laborum, ipsum vitae fugiat ab, qui veritatis iure  ddd corrupti, at error tempora. Molestiae eos harum, error expedita iusto earum quae fugiat corrupti totam.</Text>
      <AntDesign name="home" size={24} color="white" />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      paddingTop: Constants.statusBarHeight,
  },
})