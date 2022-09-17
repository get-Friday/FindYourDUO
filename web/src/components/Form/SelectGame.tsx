import * as Select from '@radix-ui/react-select'
import { CaretDown, CaretUp } from 'phosphor-react'

interface Game {
  id: string
  title: string
}

interface Props {
  data: Game[]
}

export function SelectGame({ data }: Props) {
  return (
    <Select.Root name='game'>
      <Select.Trigger className='bg-zinc-900 inline-flex py-3 px-4 rounded text-sm  justify-between items-center [&[data-placeholder]]:text-zinc-500'>
        <Select.Value placeholder='Selecione o game que deseja jogar' className='placeholder:text-zinc-500'/>
        <Select.Icon> 
          <CaretDown size={24} className='placeholder:text-zinc-500'/>  
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className="bg-zinc-900 py-3 px-1 rounded text-sm text-white cursor-pointer">
        <Select.Content className='bg-zinc-900 rounded overflow-hidden'>
        <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-zinc-900 cursor-default">
          <CaretUp/>
        </Select.ScrollUpButton>
          <Select.Viewport className='p-1'>
            { data.map(game => {
              return(
                <Select.Item key={game.id} value={game.id} className="flex relative items-center hover:bg-violet-500 rounded h-6 p-2">
                  <Select.ItemText>
                    {game.title}
                  </Select.ItemText>
                </Select.Item>
              )
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-zinc-900 cursor-default">
            <CaretDown/>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}