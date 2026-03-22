"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";
import styles from "./styles.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from("contact_messages")
        .insert([formData]);

      if (error) throw error;

      setMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "object" && error !== null) {
        // Handle Supabase errors and other objects
        errorMessage = (error as any).message || JSON.stringify(error);
      }
      
      setMessage("Error sending message. Please try again.");
      console.error("Error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__card}>
        <p className={styles.contact__eyebrow}>Like what you see?</p>
        <h1 className={styles.contact__title}>Get in touch</h1>
        <p className={styles.contact__subtitle}>
          Drop a few details about your vision—I&apos;d love to help you bring
          it to life.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.form__label}>
            Name
            <input
              className={styles.form__input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.form__label}>
            Email
            <input
              className={styles.form__input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.form__label}>
            Message
            <textarea
              className={styles.form__textarea}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            />
          </label>

          <button
            className={styles.form__button}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>

        {message && <p className={styles.form__message}>{message}</p>}
      </div>
    </section>
  );
}
