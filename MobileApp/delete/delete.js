import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import GetRatingItem from '../src/components/GetRatingItem/GetRatingItem.js';
import {useEffect, useState} from 'react';
import React from 'react';
import CustomButton from '../src/components/CustomButton/CustomButton.js';
import ProductCardLoading from '../src/components/ProductCardLoading/ProductCardLoading.js';
import VNDFormat from '../src/common/utils/formatCurrency/VNDFormat.js';
function Delete() {
  return <Text>{VNDFormat('1000đ')}</Text>
}

export default Delete;
