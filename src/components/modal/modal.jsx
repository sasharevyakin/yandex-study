import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '@/components/modal-overlay/modal-overlay';

import styles from './modal.module.css';

function Modal({ onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modalRoot = document.getElementById('modals');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={`${styles.popup_content} pt-10 pl-10 pr-10 pb-15`}>
        <div className={styles.popup_header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={styles.popup_close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
