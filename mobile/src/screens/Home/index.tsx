import { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const Navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    Navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.4.9:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
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
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />


      </SafeAreaView>
    </Background>
  )
}