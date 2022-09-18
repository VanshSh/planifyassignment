import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
const Searchbar = () => {
    return (
        <View className='flex flex-row border rounded bg-white border-gray-200 p-2 mt-3 '>
            <MagnifyingGlassIcon color={'gray'} size={30} />
            <TextInput
                className='text-gray-500 mx-5 text-lg'
                placeholder='Search'
                keyboardType='default'
            />
        </View>
    )
}

export default Searchbar
