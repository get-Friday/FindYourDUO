import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background'
import { styles } from './styles'
import { GameParams } from '../../@types/navigation'
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { useState, useEffect } from 'react'
import { DuoMatch } from '../../components/DuoMatch'

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.4.9:3333/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.4.9:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data))
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading title={game.title} subtitle='Conecte-se e começe a jogar!' />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyListContent}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Não há anúncions publicados ainda.</Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  )
}