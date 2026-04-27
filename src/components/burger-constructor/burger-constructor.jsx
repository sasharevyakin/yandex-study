import {
  //BurgerIcon,
  //ListIcon,
  //ProfileIcon,
  //Logo,
  Button,
  CurrencyIcon,
  ConstructorElement,
} from '@krgaa/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_constructor}>
      {ingredients.map((elem, index) => (
        <ConstructorElement
          extraClass={styles.flex_grow_0}
          key={elem.key}
          handleClose={function fee(){}}
          type={index === 0 ? "top" : index === ingredients.length - 1 ? "bottom" : "normal" }
          text={elem.name}
          price={elem.price}
          thumbnail={elem.image_mobile}
          isLocked={index === 0 || index === ingredients.length - 1 ? true : undefined }
        />
      ))}
      <div className={`${styles.total_price} mt-10`}>
        <div className={styles.flex}><span className="text text_type_digits-medium">610</span><CurrencyIcon type="primary" /></div>
        <Button
          onClick={function fee(){}}
          size="large"
          type="primary"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

/*
export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <a href="/" className={`${styles.link} ${styles.link_active}`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </a>
          <a href="/feed" className={`${styles.link} ml-10`}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </a>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <a href="/profile" className={`${styles.link} ${styles.link_position_last}`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </a>
      </nav>
    </header>
  );
};*/
