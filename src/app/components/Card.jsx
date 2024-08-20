import styles from '@/app/styles/card.module.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
