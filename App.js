import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from './components/Categories'
import CompanyCard from './components/CompanyCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
export default function App() {
    return (
        <SafeAreaView className='bg-[#f7f6fb] flex  flex-col justify-around '>
            <Navbar />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: '10%',
                }}
                showsVerticalScrollIndicator={false}
                className='mx-4'
            >
                <Searchbar />
                <Categories />
                <CompanyCard />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
