import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'

const CompanyData = [
    {
        id: 1,
        company_name: 'Bazar India',
        price: '₹ 100',
        image: '../assets/comp1.jpg',
        tags: [{ name: 'Equity' }, { name: 'DMat' }, { name: 'Pvt Ltd.' }],
        description:
            ' Bazar India The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move..  ',
        to_Raised: '₹ 15,00,00,000',
        launch_date: '24 days left',
        percenteage_completed: '67%',
        raised: '₹ 336,679',
        equity: '17.42%',
        investors: '175',
    },
    {
        id: 2,
        company_name: 'Madbow',
        price: '₹ 60',
        image: '../assets/comp2.jpg',
        tags: [{ name: 'Equity' }, { name: 'DMat' }, { name: 'Pvt Ltd.' }],
        description:
            ' Madbow Ventures limited The computer wouldnt start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. ..  ',
        to_Raised: '₹ 15,00,00,000',
        launch_date: '24 days left',
        percenteage_completed: '100%',
        raised: '₹ 426,679',
        equity: '20.42%',
        investors: '125',
    },
    {
        id: 3,
        company_name: 'Motor India',
        price: '₹ 80',
        image: '../assets/comp3.jpg',
        tags: [{ name: 'Equity' }, { name: 'DMat' }, { name: 'Pvt Ltd.' }],
        description:
            ' The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkards grave, dead of hepatic cirrhosis,it informed me virtuously as it returned my ID card.',
        to_Raised: '₹ 14, 30, 00, 000',
        launch_date: '23 days left',
        percenteage_completed: '54%',
        raised: '₹ 225,689',
        equity: '39.46%',
        investors: '199',
    },
]

const CompanyCard = () => {
    const renderItem = ({ item }) => (
        <View className='my-3 bg-white rounded p-5'>
            <View className='flex flex-row justify-between  '>
                <Image
                    source={require('../assets/comp3.jpg')}
                    className='h-16 w-16 rounded-full'
                />
                <View className='flex justify-around mx-3'>
                    <Text className='text-lg font-bold'>
                        {item.company_name}
                    </Text>
                    <View className='flex flex-row  '>
                        {item.tags.map((item) => (
                            <Text className='bg-[#f0f0f0] mr-3 p-1 text-gray-800 '>
                                {item.name}
                            </Text>
                        ))}
                    </View>
                </View>

                <Text className='font-semibold text-lg'>{item.price}</Text>
            </View>
            <Text className='my-3 text-md'>{item.description}</Text>

            <View className='flex flex-row border-b-[1px] pb-3 border-gray-500 items-center justify-between my-2'>
                <View>
                    <Text className='text-gray-500 my-2'>To Raised</Text>
                    <Text className='text-md font-bold'>{item.to_Raised}</Text>
                </View>
                <View>
                    <Text className='text-gray-500 my-2'>Launch Date</Text>
                    <Text className='text-md font-bold'>
                        {item.launch_date}
                    </Text>
                </View>
                <View className=' rounded-full border-4 px-5 py-6 item-center border-[#e90075]'>
                    <Text>{item.percenteage_completed}</Text>
                </View>
            </View>
            <View className='flex flex-row justify-between items-center my-2'>
                <View>
                    <Text className='text-md font-bold'>{item.raised}</Text>
                    <Text className='text-gray-500 my-2'>Raised</Text>
                </View>
                <View>
                    <Text className='text-md font-bold'>{item.equity}</Text>
                    <Text className='text-gray-500 my-2'>Equity</Text>
                </View>
                <View>
                    <Text className='text-md font-bold'>{item.investors}</Text>
                    <Text className='text-gray-500 my-2'>Investors</Text>
                </View>
            </View>
        </View>
    )
    return (
        <FlatList
            data={CompanyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default CompanyCard
