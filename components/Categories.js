import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'

const CategoryList = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Startup',
    },
    {
        id: 3,
        name: 'Early Revenue',
    },
    {
        id: 4,
        name: 'Idea',
    },
    {
        id: 5,
        name: 'Growth',
    },
    {
        id: 6,
        name: 'Launching soon',
    },
    {
        id: 7,
        name: 'Most Funded',
    },
    {
        id: 8,
        name: 'Certified',
    },
    {
        id: 9,
        name: 'Funded Companies',
    },
]

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: 10,
            }}
        >
            {CategoryList.map((category, index) => (
                <View key={index}>
                    <Text className='border bg-white text-gray-500 rounded-3xl text-lg  mr-3 px-5 py-1 border-gray-400'>
                        {category.name}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default Categories
