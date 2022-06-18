import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

import strings from './strings';

const checkPermission = async () => {
  try {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  } catch (error) {
    throw error;
  }
};

const getToken = async () => {
  try {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  } catch (error) {
    throw error;
  }
};

const requestPermission = async () => {
  try {
    await messaging().requestPermission();
    getToken();
  } catch (error) {
    throw error;
  }
};

const createNotificationListeners = async () => {
  try {
    // // Triggered when a particular notification has been received in foreground
    // notificationListener = firebase
    //   .notifications()
    //   .onNotification(notification => {
    //     const {title, body} = notification;
    //     showAlert(title, body);
    //   });
    // // If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    // notificationOpenedListener = firebase
    //   .notifications()
    //   .onNotificationOpened(notificationOpen => {
    //     const {title, body} = notificationOpen.notification;
    //     showAlert(title, body);
    //   });
    // // If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    // const notificationOpen = await firebase
    //   .notifications()
    //   .getInitialNotification();
    // if (notificationOpen) {
    //   const {title, body} = notificationOpen.notification;
    //   showAlert(title, body);
    // }
    // // Triggered for data only payload in foreground
    // this.messageListener = messaging().onMessage(message => {
    //   //process data message
    //   console.log(JSON.stringify(message));
    // });
  } catch (error) {
    throw error;
  }
};

const showAlert = (title, body) => {
  Alert.alert(
    title,
    body,
    [{text: strings.ok, onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

export {checkPermission, createNotificationListeners};
