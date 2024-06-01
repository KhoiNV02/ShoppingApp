import {useState, useEffect} from 'react';
import {memo} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {addNewCartItem} from '../../store/actions/actions';
import {addNewCartItemConfig} from '../../services/api/cartItemServices';

import PurchaseConfirmationPopupUI from './PurchaseConfirmationPopupUI';

function PurchaseConfirmationPopup({
  productName,
  productImage,
  productPrice,
  setActivePopUp,
  idProduct,
}) {
  const userId = useSelector(state => state.login._id);
  const [quantityPurchase, setQuantityPurchase] = useState(1);
  const dispatch = useDispatch();
  const [minus, setMinus] = useState(() => {
    if (quantityPurchase == 1) {
      return false;
    } else {
      return true;
    }
  });

  const [plus, setPlus] = useState(() => {
    if (quantityPurchase == 999) {
      return false;
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (quantityPurchase <= 1) {
      setMinus(false);
    } else {
      setMinus(true);
    }
    if (quantityPurchase == 999) {
      setPlus(false);
    } else {
      setPlus(true);
    }
  }, [quantityPurchase]);

  function handleSubmitQuantity() {
    if (quantityPurchase == 0 || quantityPurchase == '') {
      setQuantityPurchase(1);
    }
  }

  const closePopUp = () => {
    setActivePopUp(false);
  };

  const handleBuyProduct = async () => {
    const data = {
      user: userId,
      product: idProduct,
      quantity: quantityPurchase,
    };
    const configCartItem = addNewCartItemConfig(data);
    dispatch(addNewCartItem(configCartItem));
    closePopUp();
  };

  const handleDecreaseQuatityPurchase = () => {
    setMinus(false);
    setQuantityPurchase(parseInt(quantityPurchase, 10) - 1);
    if (quantityPurchase == 1) {
      setMinus(false);
    } else {
      setMinus(true);
    }
  };

  const handleIncreaseQuatityPurchase = () => {
    setQuantityPurchase(parseInt(quantityPurchase, 10) + 1);
    if (quantityPurchase == 999) {
      setPlus(false);
    } else {
      setPlus(true);
    }
  };

  const handleInputQuantityPurchase = value => {
    const result = value.replace(/\D/g, '');
    setQuantityPurchase(result);
  };
  return (
    <PurchaseConfirmationPopupUI
      productName={productName}
      productImage={productImage}
      productPrice={productPrice}
      minus={minus}
      plus={plus}
      quantityPurchase={quantityPurchase}
      setQuantityPurchase={setQuantityPurchase}
      closePopUp={closePopUp}
      handleSubmitQuantity={handleSubmitQuantity}
      handleBuyProduct={handleBuyProduct}
      handleDecreaseQuatityPurchase={handleDecreaseQuatityPurchase}
      handleIncreaseQuatityPurchase={handleIncreaseQuatityPurchase}
      handleInputQuantityPurchase={handleInputQuantityPurchase}
    />
  );
}

export default memo(PurchaseConfirmationPopup);
