import styles from './Mentors.module.css';

export default function Mentors() {
  const mentors = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Cloud Architect',
      company: 'Google',
      bio: '15+ years in cloud computing, Former AWS Solutions Architect',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Williams',
      role: 'AI/ML Lead',
      company: 'Microsoft',
      bio: 'PhD in AI, Published researcher with 50+ papers',
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'System Design Expert',
      company: 'Amazon',
      bio: 'Built large-scale systems handling 100M+ users',
      image: '👨‍🏫',
    },
  ];

  return (
    <section className={styles.mentors} id="mentors">
      <div className={styles.container}>
        <h2 className={styles.title}>Learn from Industry Experts</h2>
        <p className={styles.subtitle}>
          Get mentored by professionals from top tech companies
        </p>

        <div className={styles.grid}>
          {mentors.map((mentor, index) => (
            <div key={index} className={styles.mentorCard}>
              <div className={styles.mentorImage}>{mentor.image}</div>
              <h3 className={styles.mentorName}>{mentor.name}</h3>
              <p className={styles.mentorRole}>{mentor.role}</p>
              <p className={styles.mentorCompany}>{mentor.company}</p>
              <p className={styles.mentorBio}>{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
