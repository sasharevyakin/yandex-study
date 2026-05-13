import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import Ingredient from '@/components/ingredient/ingredient';
import IngredientDetails from '@/components/ingredientdetails/ingredientdetails';
import Modal from '@/components/modal/modal';
import Headline from '@components/headline/headline';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  console.log(ingredients);

  const bun = ingredients.flatMap((ingredient) =>
    ingredient.type === 'bun' ? [ingredient] : []
  );
  const sauce = ingredients.flatMap((ingredient) =>
    ingredient.type === 'sauce' ? [ingredient] : []
  );
  const main = ingredients.flatMap((ingredient) =>
    ingredient.type === 'main' ? [ingredient] : []
  );

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setPopupOpen(true);
  };

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

      <div className={styles.scroll_y}>
        <Headline name="Булки" />
        <div className={`${styles.flex} pl-4 pr-4`}>
          {bun.map((ingredient) => (
            <Ingredient
              key={ingredient._id}
              img={ingredient.image}
              price={ingredient.price}
              title={ingredient.name}
              counter="1"
              click={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
        <Headline name="Начинки" />
        <div className={styles.flex}>
          {main.map((ingredient) => (
            <Ingredient
              key={ingredient._id}
              img={ingredient.image}
              price={ingredient.price}
              title={ingredient.name}
              counter="1"
              click={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
        <Headline name="Соусы" />
        <div className={styles.flex}>
          {sauce.map((ingredient) => (
            <Ingredient
              key={ingredient._id}
              img={ingredient.image}
              price={ingredient.price}
              title={ingredient.name}
              counter="1"
              click={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
      </div>
      <Modal
        title="Детали ингредиента"
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      >
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </section>
  );
};
