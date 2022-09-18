import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
export default function App() {
    return (
        <SafeAreaView>
            <Navbar />
            <View className='bg-[#f7f6fb] px-5'>
                <Searchbar />
                <Categories />
            </View>
        </SafeAreaView>
    )
}
