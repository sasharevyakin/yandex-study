import styles from './ingredientdetails.module.css';

function IngredientDetails({ ingredient }) {
  if (!ingredient) return null;

  return (
    <>
      <img src={ingredient.image_large} alt={ingredient.name} className="mb-4" />
      <div className="text text_type_main-medium mb-8">{ingredient.name}</div>
      <div
        className={`${styles.popup_flex} text text_type_main-default text_color_inactive`}
      >
        <div>
          <div>Калории, ккал</div>
          <div className="text text_type_digits-default">{ingredient.calories}</div>
        </div>
        <div>
          <div>Белки, г</div>
          <div className="text text_type_digits-default">{ingredient.proteins}</div>
        </div>
        <div>
          <div>Жиры, г</div>
          <div className="text text_type_digits-default">{ingredient.fat}</div>
        </div>
        <div>
          <div>Углеводы, г</div>
          <div className="text text_type_digits-default">{ingredient.carbohydrates}</div>
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
