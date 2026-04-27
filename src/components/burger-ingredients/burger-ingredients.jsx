/* eslint-disable react/jsx-key */
import { Tab } from '@krgaa/react-developer-burger-ui-components';

// eslint-disable-next-line import/no-unresolved
import Headline from '@components/headline/headline';
import IngredientLarge from '@components/ingredientlarge/ingredientlarge';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  console.log(ingredients);
  const bun = ingredients.flatMap(elem => elem.type === 'bun' ? [elem] : []);
  const sauce = ingredients.flatMap(elem => elem.type === 'sauce' ? [elem] : []);
  const main = ingredients.flatMap(elem => elem.type === 'main' ? [elem] : []);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>

      <Headline name="Булки" />
      <div className={styles.flex}>
        {bun.map((elem, index) => (
          <IngredientLarge
            key={elem.id}
            img={elem.image}
            price={elem.price}
            title={elem.name}
            counter="1"
          />
        ))}
      </div>
      <Headline name="Начинки" />
      <div className={styles.flex}>
        {main.map((elem, index) => (
          <IngredientLarge
            key={elem.id}
            img={elem.image}
            price={elem.price}
            title={elem.name}
            counter="1"
          />
        ))}
      </div>
      <Headline name="Соусы" />
      <div className={styles.flex}>
        {sauce.map((elem, index) => (
          <IngredientLarge
            key={elem.id}
            img={elem.image}
            price={elem.price}
            title={elem.name}
            counter="1"
          />
        ))}
      </div>
    </section>
  );
};
