import {
  //BurgerIcon,
  //ListIcon,
  //ProfileIcon,
  //Logo,
  Button,
  CurrencyIcon,
  ConstructorElement,
} from '@krgaa/react-developer-burger-ui-components';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_constructor}>
      {ingredients.map((elem, index) => (
        <ConstructorElement
          extraClass={styles.flex_grow_0}
          key={elem._id}
          handleClose={
            {
              /*function fee(){}*/
            }
          }
          type={
            index === 0 ? 'top' : index === ingredients.length - 1 ? 'bottom' : 'normal'
          }
          text={elem.name}
          price={elem.price}
          thumbnail={elem.image_mobile}
          isLocked={index === 0 || index === ingredients.length - 1 ? true : undefined}
        />
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
