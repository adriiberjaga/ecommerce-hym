import styles from './DarkMode.module.css';


interface DarkModeProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

export const DarkMode: React.FC<DarkModeProps> = ({ handleChange, isChecked }) => {
    return (
        <>
         <label className={styles.switch}>
            <input className={styles.input} type="checkbox" onChange={handleChange} checked={isChecked} />
            <span className={styles.slider}></span>
        </label>
        
        </>
       
    );
}
