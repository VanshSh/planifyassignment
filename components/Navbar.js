import { View, Text, Image } from 'react-native'
import React from 'react'
import { Bars4Icon, ChartBarSquareIcon } from 'react-native-heroicons/solid'

import {
    PhoneIcon,
    BellIcon,
    MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'

const Navbar = () => {
    return (
        <View className=' py-5 drop-shadow-lg px-3 flex flex-1 flex-row justify-between items-center'>
            <View className='flex flex-row'>
                <Bars4Icon color={'gray'} size={25} />
                <View className=' flex flex-row items-center justify-center   ml-3'>
                    <ChartBarSquareIcon color={'#985090'} size={30} />
                    <Text className='text-sm font-bold text-[#985090]'>
                        {' '}
                        Planify
                    </Text>
                </View>
            </View>
            <View className='flex flex-row justify-evenly items-center'>
                <View className='mx-3'>
                    <PhoneIcon color={'gray'} size={25} />
                </View>
                <View className='mx-3'>
                    <MagnifyingGlassIcon color={'gray'} size={25} />
                </View>
                <View className='mx-3'>
                    <BellIcon color={'gray'} size={25} />
                </View>

                <Image
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/51.jpg',
                    }}
                    className='h-10 w-10 rounded-full'
                />
            </View>
        </View>
    )
}

export default Navbar
