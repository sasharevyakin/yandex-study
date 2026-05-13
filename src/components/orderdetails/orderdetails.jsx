//import styles from './order-details.module.css';

function OrderDetails({ orderNumber }) {
  return (
    <>
      <div className="text text_type_digits-large pt-20 mb-8">{orderNumber}</div>
      <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
      <img src="/dun_icon.svg" alt="Done icon" />
      <div className="text text_type_main-default mt-15 mb-2">
        Ваш заказ начали готовить
      </div>
      <div className="text text_type_main-default text_color_inactive pb-15">
        Дождитесь готовности на орбитальной станции
      </div>
    </>
  );
}

export default OrderDetails;
