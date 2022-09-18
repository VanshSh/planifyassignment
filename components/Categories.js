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
            contentContainerStyle={{ paddingVertical: 20 }}
        >
            {CategoryList.map((category) => (
                <Pressable>
                    <Text className='border bg-white text-gray-500 rounded-3xl text-lg px-5 py-1 mr-3 border-gray-400'>
                        {category.name}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default Categories
