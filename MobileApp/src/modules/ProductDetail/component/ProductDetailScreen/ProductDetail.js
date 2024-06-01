import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateProductConfig} from '../../../../services/api/productServices';
import {updateProduct} from '../../../../store/actions/actions';
import {getProductByProductIdConfig} from '../../../../services/api/productServices';
import {getProductByProductId} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import ProductDetailUI from './ProductDetailUI';

function ProductDetail({route, navigation}) {

  const {productInforFromProductCard} = route.params;
  const [productInfor, setProductInfor] = useState(() => ({
    ...productInforFromProductCard,
    viewed: productInforFromProductCard.viewed + 1,
  }));

  const productDetail = useSelector(state => state.product.productDetail);

  i18n.locale = useSelector(state => state.language.language);
  const [activeImg, setActiveImg] = useState({
    id: 0,
    url: productInfor.images[0].imageUrl,
    descript: productInfor.images[0].imageDescription,
  });
  const [activePopUp, setActivePopUp] = useState(false);
  const [fullDescriptDisplay, setFullDescriptDisplay] = useState(false);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const shoes = [...productInfor.images];

  useEffect(() => {
    if (
      productDetail !== '' &&
      productDetail != null &&
      productDetail.viewed >= productInfor.viewed
    ) {
      setProductInfor(productDetail);
    }

    setRefreshing(false);
  }, [productDetail]);

  useEffect(() => {
    const configProduct = updateProductConfig(
      productInfor._id,
      parseInt(productInfor.viewed),
      parseInt(productInfor.sold),
      'view',
    );
    dispatch(updateProduct(configProduct));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    const getProductByIdConfig = getProductByProductIdConfig(productInfor._id);
    dispatch(getProductByProductId(getProductByIdConfig));
  };

  return (
    <ProductDetailUI
      productInfor={productInfor}
      refreshing={refreshing}
      onRefresh={onRefresh}
      setActivePopUp={setActivePopUp}
      activePopUp={activePopUp}
      activeImg={activeImg}
      setActiveImg={setActiveImg}
      shoes={shoes}
      fullDescriptDisplay={fullDescriptDisplay}
      setFullDescriptDisplay={setFullDescriptDisplay}
    />
  );
}
export default ProductDetail;
