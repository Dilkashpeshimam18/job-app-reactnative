import React, { useState } from 'react'
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ['Full-time', 'Part-time', 'Contractor',]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dilkash!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>
        <View style={styles.searchBtn} onPress={() => { }}>
          <TouchableOpacity>
            <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
          renderItem={({data}) => (
            <TouchableOpacity style={styles.tab(activeJobType, data)} onPress={() => {
              setActiveJobType(data),
                router.push(`/search/${data}`)
            }}>
              <Text style={styles.tabText(activeJobType, data)}>{data}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={data=>data}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome