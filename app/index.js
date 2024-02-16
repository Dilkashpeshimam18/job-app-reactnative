import { View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react';
import { COLORS, SIZES, icons, images } from '../constants'
import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn } from '../components'
import { useRouter, Stack } from 'expo-router'

const Home = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: '1', backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn dimension="60%" iconUrl={icons.menu} />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn dimension="100%" iconUrl={images.profile} />
                ),
                headerTitle: ''
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: '1', padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home