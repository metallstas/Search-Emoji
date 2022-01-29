import cls from './Form.module.css'

interface IProps {
  searchEmoji: (text: string) => void;
  emojiTitle: string;
}

const Form = ({searchEmoji, emojiTitle}: IProps) => {
  return (
    <div className={cls.input}>
      <input className={cls.input} value={emojiTitle} onChange={(e) => searchEmoji(e.target.value)}/>
    </div>
  );
};

export default Form;