import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from './components/Categories'
import CompanyCard from './components/CompanyCard'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
export default function App() {
    return (
        <SafeAreaView className='bg-[#f7f6fb]'>
            <Navbar />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: '90%',
                }}
                showsVerticalScrollIndicator={false}
                className='mx-4  flex-1'
            >
                <Searchbar />
                <Categories />
                <CompanyCard />
            </ScrollView>
        </SafeAreaView>
    )
}
