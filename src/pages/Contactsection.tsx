import styles from './ContactSection.module.css'; // Importa los estilos

export default function ContactSection() {
const alerta = () => alert('Esto es un formulario ficticio, si quieres contactar conmigo, prueba en  "https://my-portfolio-topaz-two-53.vercel.app/"');

  return (
    <div className={styles.contactContainer}>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Your message"></textarea>
        </div>
        <button onClick={alerta} type="button" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
}
