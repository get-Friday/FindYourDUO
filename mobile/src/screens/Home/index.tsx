import { useEffect, useState } from 'react'
import { Image, View, FlatList } from 'react-native'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Home(){
    const [games, setGames] = useState<GameCardProps[]>([])
    useEffect(() => {
        fetch('http://192.168.4.9:3333/games')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={logoImg} 
                style={styles.logo}
            />
            <Heading 
                title='Encontre seu duo!'
                subtitle='Selecione o game que deseja jogar...'
            />
            <FlatList
                data={games}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <GameCard data={item}/>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </SafeAreaView>
    )
}