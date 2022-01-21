import styles from '../../styles/Input.module.css'

export interface InputType {
  value: number | string
  title: string
  type: 'number' | 'text' | 'date'
  onChange: (e: number | string) => void
}

const Input: React.FC<InputType> = props => {
  const type = props.type
  const title = props.title

  return (
    <div className={`${styles.container} ${styles.scale_up_center}`}>
      <label>{title}</label>
      <br />
      <input
        type={type}
        id={title}
        name={title}
        //@ts-ignore
        onInput={e => props.onChange(e.target.value)}
      ></input>
    </div>
  )
}

export default Input
