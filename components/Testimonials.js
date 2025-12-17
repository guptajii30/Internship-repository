import { useState } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Cloud Engineer at Google',
      company: 'Google',
      testimonial: 'learnBetter transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google. The program is worth every penny!',
      image: '👩‍💻',
    },
    {
      name: 'Amit Patel',
      role: 'AI Engineer at Microsoft',
      company: 'Microsoft',
      testimonial: 'The curriculum is perfectly aligned with industry needs. I learned cutting-edge technologies and the placement support was exceptional. Got placed with a 40 LPA package!',
      image: '👨‍💻',
    },
    {
      name: 'Neha Gupta',
      role: 'Solutions Architect at Amazon',
      company: 'Amazon',
      testimonial: 'Best decision of my career! The live classes, doubt support, and real-world projects gave me confidence to crack tough interviews. Highly recommended!',
      image: '👩‍💼',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.testimonials} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.title}>Student Success Stories</h2>
        <p className={styles.subtitle}>
          Hear from our graduates who transformed their careers
        </p>

        <div className={styles.testimonialWrapper}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${
                index === currentIndex ? styles.active : ''
              }`}
            >
              <div className={styles.cardContent}>
                <div className={styles.testimonialImage}>{testimonial.image}</div>
                <p className={styles.testimonialText}>{testimonial.testimonial}</p>
                <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                <p className={styles.testimonialRole}>{testimonial.role}</p>
                <div className={styles.companyLogo}>{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
