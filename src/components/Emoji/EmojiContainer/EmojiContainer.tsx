import { useState } from 'react'
import EmojiRow from '../EmojiRow/EmojiRow'
import Form from '../Form/Form'
import { emojies } from '../Emojies'

const EmojiContainer = () => {

  const [searchEmoji, setSeacrhEmoji] = useState<string>('')

  const changeEmoji = (titleEmoji: string) => {
    setSeacrhEmoji(titleEmoji)
  }

  const filteredEmojis = emojies.filter((emoji) => {
    const emojiLow = searchEmoji.toLowerCase()
    return (
      emoji.title.toLowerCase().includes(emojiLow) ||
      emoji.keywords.toLowerCase().includes(emojiLow)
    )
  })

  return (
    <div>
      <Form searchEmoji={changeEmoji} searchText={searchEmoji} />
      {filteredEmojis.map((emoji) => (
        <EmojiRow title={emoji.title} symbol={emoji.symbol} key={emoji.title} />
      ))}
    </div>
  )
}

export default EmojiContainer
