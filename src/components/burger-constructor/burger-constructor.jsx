import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
//import { useRef } from 'react';
//import { useDrag, useDrop } from 'react-dnd';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_constructor}>
      {ingredients.map((ingredient, index) => (
        <div className={styles.flex} key={ingredient._id}>
          <li>
            <DragIcon
              type="primary"
              //ref={ref} Делаем заготовкку под useDrag и useDrop
            />
          </li>
          <ConstructorElement
            extraClass={styles.flex_grow_0}
            handleClose={
              {
                /*function fee(){}*/
              }
            }
            type={
              index === 0
                ? 'top'
                : index === ingredients.length - 1
                  ? 'bottom'
                  : 'normal'
            }
            text={
              index === 0
                ? ingredient.name + ' (верх)'
                : index === ingredients.length - 1
                  ? ingredient.name + ' (низ)'
                  : ingredient.name
            }
            price={ingredient.price}
            thumbnail={ingredient.image_mobile}
            isLocked={index === 0 || index === ingredients.length - 1 ? true : undefined}
          />
        </div>
      ))}
      <div className={`${styles.total_price} mt-10`}>
        <div className={styles.flex}>
          <span className="text text_type_digits-medium">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={function fee() {
            /* empty */
          }}
          size="large"
          type="primary"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
