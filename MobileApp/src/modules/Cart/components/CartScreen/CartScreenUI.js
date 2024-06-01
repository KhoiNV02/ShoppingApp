import {SafeAreaView, Text, View, Image} from 'react-native';

import {useSelector} from 'react-redux';

import CartList from '../../../../components/CartList/CartList';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import VNDFormat from '../../../../common/utils/formatCurrency/VNDFormat';
import EmptyItemArea from '../../../../components/EmptyItemArea/EmptyItemArea';
import CartScreenStyle from './CartScreenStyle';

export default function CartScreenUI({
  cartItems,
  handlePurchaseCartItem,
  total,
  totalSelect,
}) {
  i18n.locale = useSelector(state => state.language.language);

  return (
    <SafeAreaView style={CartScreenStyle.viewContainer}>
      {cartItems.length ? (
        <View style={CartScreenStyle.viewContainer}>
          <CartList data={cartItems}></CartList>
        </View>
      ) : (
        <EmptyItemArea />
      )}

      <View style={CartScreenStyle.viewFooter}>
        <View style={CartScreenStyle.viewSelected}>
          <Image
            style={CartScreenStyle.icon}
            source={require('../../../../assets/Icon/check_blue.png')}></Image>
          <Text style={CartScreenStyle.titleSelected}>
            {' '}
            {i18n.t('Selected')}
          </Text>
          <Text style={CartScreenStyle.textSelected}>{totalSelect}</Text>
        </View>
        <View style={CartScreenStyle.viewPurchase}>
          <View>
            <Text style={CartScreenStyle.textTotal}>{i18n.t('Total')}:</Text>
            <Text style={CartScreenStyle.textMoney}>{VNDFormat(total)}</Text>
          </View>

          <View style={CartScreenStyle.viewBtnPurchase}>
            <CustomButton
              onPress={() => {
                handlePurchaseCartItem();
              }}>
              {i18n.t('Purchase')}
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
