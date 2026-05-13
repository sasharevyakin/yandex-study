import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

//import { useRef } from 'react';
//import { useDrag, useDrop } from 'react-dnd';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/orderdetails/orderdetails';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  const ingredient_first = ingredients.flatMap((ingredient, index) =>
    index === 0 ? [ingredient] : []
  );
  const ingredients_other = ingredients.flatMap((ingredient) =>
    ingredient.type != 'bun' ? [ingredient] : []
  );

  const [orderNumber, setOrderNumber] = useState(null);

  const handleOpenOrderMock = () => {
    setOrderNumber('034536'); // фиктивный номер
  };

  {
    /*const handleCloseOrder = () => {
    setOrderNumber(null);
  };*/
  }

  return (
    <section className={styles.burger_constructor}>
      {ingredient_first.map((ingredient) => (
        <div className={styles.flex} key={ingredient._id}>
          <ConstructorElement
            extraClass={styles.flex_grow_0}
            //handleClose={() => (function fee() {})()}
            type={'top'}
            text={ingredient.name + ' (верх)'}
            price={ingredient.price}
            thumbnail={ingredient.image_mobile}
            isLocked={true}
          />
        </div>
      ))}
      <div className={styles.custom_scroll}>
        {ingredients_other.map((ingredient) => (
          <div className={styles.flex} key={ingredient._id}>
            <li>
              <DragIcon
                type="primary"
                //ref={ref} Делаем заготовкку под useDrag и useDrop
              />
            </li>
            <ConstructorElement
              extraClass={styles.flex_grow_0}
              //handleClose={() => (function fee() {})()}
              type={'normal'}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
              isLocked={undefined}
            />
          </div>
        ))}
      </div>
      {ingredient_first.map((ingredient) => (
        <div className={styles.flex} key={ingredient._id}>
          <ConstructorElement
            extraClass={styles.flex_grow_0}
            //handleClose={() => (function fee() {})()}
            type={'bottom'}
            text={ingredient.name + ' (низ)'}
            price={ingredient.price}
            thumbnail={ingredient.image_mobile}
            isLocked={true}
          />
        </div>
      ))}
      <div className={`${styles.total_price} mt-10`}>
        <div className={styles.flex}>
          <span className="text text_type_digits-medium">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button title="" onClick={handleOpenOrderMock} size="large" type="primary">
          Оформить заказ
        </Button>
        <Modal isOpen={!!orderNumber} onClose={() => setOrderNumber(null)} title="">
          {orderNumber && <OrderDetails orderNumber={orderNumber} />}
        </Modal>
      </div>
    </section>
  );
};
