import cls from './Form.module.css'

interface IProps {
  searchEmoji: (text: string) => void;
  searchText: string;
}

const Form = ({searchEmoji, searchText}: IProps) => {
  return (
    <div className={cls.input}>
      <input className={cls.input} value={searchText} onChange={(e) => searchEmoji(e.target.value)}/>
    </div>
  )
}

export default Form
