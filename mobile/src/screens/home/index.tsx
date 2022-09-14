import { Image, View, FlatList } from 'react-native'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/heading'
import { GameCard } from '../../components/gameCard'
import { GAMES } from '../../utils/games'

export function Home(){
    return (
        <View style={styles.container}>
            <Image 
                source={logoImg} 
                style={styles.logo}
            />
            <Heading 
                title='Encontre seu duo!'
                subtitle='Selecione o game que deseja jogar...'
            />
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <GameCard data={item}/>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </View>
    )
}