import Toast from "react-native-toast-message";
export default function ToastMessage({message,type}) {
  Toast.show({
    type: type,
    text2: message,
    text2Style:{
      fontSize:14
    },
    visibilityTime:2000,
    swipeable:true,
  });
}

