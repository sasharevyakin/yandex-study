import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';

import styles from './ingredientlarge.module.css';

function IngredientLarge(props) {
  return (
    <div className={styles.ingredient}>
      <img className="mb-1 p-4" src={props.img} />
      <div className={`${styles.price} text text_type_digits-default mb-1`}>
        {props.price} <CurrencyIcon type="primary" />
      </div>
      <div className="text text_type_main-default">{props.title}</div>
      <div className={styles.counter}>
        <Counter count={props.counter} size="default" />
      </div>
    </div>
  );
}

export default IngredientLarge;
