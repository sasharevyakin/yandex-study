import styles from './modal-overlay.module.css';

function ModalOverlay({ onClick }) {
  return <div className={styles.popup_overlay} onClick={onClick} />;
}

export default ModalOverlay;
