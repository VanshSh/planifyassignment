import { View, Text } from 'react-native'
import React from 'react'
import {
    RocketLaunchIcon,
    BuildingStorefrontIcon,
    ShoppingBagIcon,
    MagnifyingGlassCircleIcon,
    ArchiveBoxIcon,
} from 'react-native-heroicons/outline'

const Footer = () => {
    return (
        <View className='bg-white flex flex-row  justify-around items-center '>
            <RocketLaunchIcon size={35} color={'red'} />
            <BuildingStorefrontIcon size={35} color={'gray'} />
            <View className='bg-[#e90075] rounded-full p-3 '>
                <ShoppingBagIcon size={35} color={'white'} />
            </View>

            <MagnifyingGlassCircleIcon size={35} color={'gray'} />
            <ArchiveBoxIcon size={35} color={'gray'} />
        </View>
    )
}

export default Footer
