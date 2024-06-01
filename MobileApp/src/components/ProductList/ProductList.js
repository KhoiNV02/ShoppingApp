import React from 'react';
import {Alert} from 'react-native';
import { memo } from 'react';

import {useDispatch,useSelector} from 'react-redux';

import {deleteProduct} from '../../store/actions/actions';
import {deleteProductConfig} from '../../services/api/productServices';
import i18n from '../../common/utils/multiLanguages/multilanguages';
import ProductListUI from './ProductListUI';
function ProductList({
  horizontal,
  data,
  option,
  isLoading,
  loadMoreData,
  setDeleteProductId,
}) {

  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.language);

  let row = [];
  let prevOpenedRow;
  function closeRow(index) {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  }

  function closeDeleteRow(id) {
    Alert.alert(
      i18n.t('Delete confirm'),
      i18n.t('Delete Product Text'),
      [
        {
          text: i18n.t('Cancel'),
        },
        {
          text: i18n.t('OK'),
          onPress: () => {
            const deleteConfig = deleteProductConfig(id);
            dispatch(deleteProduct(deleteConfig));
            setDeleteProductId(id);
          },
        },
      ],
      {cancelable: false},
    );
    prevOpenedRow.close();
  }

  return (
    <>
      <ProductListUI
        closeDeleteRow={closeDeleteRow}
        closeRow={closeRow}
        data={data}
        horizontal={horizontal}
        loadMoreData={loadMoreData}
        option={option}
        row={row}
        isLoading={isLoading}></ProductListUI>
    </>
  );
}

export default memo(ProductList);
