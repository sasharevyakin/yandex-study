import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';

import styles from './ingredientlarge.module.css';

function IngredientLarge(props) {
  return (
    <div className={styles.ingredient}>
      <img src={props.img} />
      <div className={`${styles.price} mb-1`}>{props.price} <CurrencyIcon type="primary" /></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.counter}>
        <Counter count={props.counter} size="default" />
      </div>
    </div>
  );
}

export default IngredientLarge;
