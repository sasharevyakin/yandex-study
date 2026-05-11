import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

//import { useRef } from 'react';
//import { useDrag, useDrop } from 'react-dnd';
import Popup from '@components/popup/popup';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handleIngredientClick() {
    setPopupOpen(true);
  }

  const ingredient_first = ingredients.flatMap((ingredient, index) =>
    index === 0 ? [ingredient] : []
  );
  const ingredients_other = ingredients.flatMap((ingredient) =>
    ingredient.type != 'bun' ? [ingredient] : []
  );

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
        <Button onClick={() => handleIngredientClick()} size="large" type="primary">
          Оформить заказ
        </Button>
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
          <div className="text text_type_digits-large pt-20 mb-8">034536</div>
          <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
          <img src="/dun_icon.svg" alt="Done icon" />
          <div className="text text_type_main-default mt-15 mb-2">
            Ваш заказ начали готовить
          </div>
          <div className="text text_type_main-default text_color_inactive pb-15">
            Дождитесь готовности на орбитальной станции
          </div>
        </Popup>
      </div>
    </section>
  );
};
