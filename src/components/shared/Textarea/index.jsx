import styles from './styles.module.css'

function Textarea(props) {
   return (
      <textarea
         className={`${styles.textarea} ${props.className}`}
         {...props}
      />
   )
}

export default Textarea
