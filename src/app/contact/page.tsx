import styles from "./styles.module.scss";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__card}>
        <p className={styles.contact__eyebrow}>Let us connect</p>
        <h1 className={styles.contact__title}>Contact</h1>
        <p className={styles.contact__subtitle}>
          Share a bit about your project and I will reach out soon.
        </p>

        <form className={styles.form}>
          <label className={styles.form__label}>
            Name
            <input className={styles.form__input} type="text" name="name" />
          </label>

          <label className={styles.form__label}>
            Email
            <input className={styles.form__input} type="email" name="email" />
          </label>

          <label className={styles.form__label}>
            Message
            <textarea className={styles.form__textarea} name="message" rows={6} />
          </label>

          <button className={styles.form__button} type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
