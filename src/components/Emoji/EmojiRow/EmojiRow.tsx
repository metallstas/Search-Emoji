import cls from './EmojiRow.module.css'

interface IProps {
  title: string;
  symbol: string;
}
const EmojiRow = ({title, symbol}: IProps) => {

  return (
    <div className={cls.emojiWrap}>
      <span>{symbol}</span>
      <span>{title}</span>
    </div>
  )
}

export default EmojiRow
