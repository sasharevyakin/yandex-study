import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './popup.module.css';

function Popup({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.popup_overlay} onClick={onClose}>
      <div
        className={`${styles.popup_content} pt-10 pl-10 pr-10 pb-15`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.popup_close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Popup;
