import React, {useState} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import useCategories from '../../hooks/useCategories';
import {saveEntry} from '../../services/Entries';
import {setInitialized} from '../../services/Welcome';

import Colors from '../../styles/Colors';
import Logo from '../../assets/logo-white.png';

const Welcome = ({navigation}) => {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: parseFloat(amount),
      isInit: true,
      category: initCategories,
    });

    setInitialized();
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.background}
      />
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Welcome;
