/* eslint-disable no-unused-expressions */
import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  AppName,
  Title,
  Picker,
  BackToSignIn,
  BackToSignInText,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  country: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const [provinces, setProvinces] = useState([]);
  const [provinceInput, setProvinceInput] = useState(null);

  useEffect(() => {
    api
      .get('/help/countries', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key':
            'ee2a440104mshf0fc2d4112946a2p196e67jsn8b4373c311f5',
        },
      })
      .then(response => {
        setProvinces(response.data);
      })
      .catch(err => {
        if (err) {
          console.log("Ops, I think it's connecting with the API");
        }
      });
  }, [provinces]);

  const provinceNames = provinces.map(province => province.name);
  const provinceOption = provinceNames.map(option => ({
    label: option,
    value: option,
  }));

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string()
            .required('E-mail obrigatório.')
            .email('Digite um e-mail válido.'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then(authenticate => {
            return authenticate.user.updateProfile({
              displayName: data.name,
            });
          })
          .catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });

        console.log(data);
        Alert.alert('Cadastro realizado!');
      } catch (err) {
        console.log(formRef);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <AppName>Covid APP</AppName>
            <View>
              <Title>Create your account</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Name"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Input
                ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Picker>
                <RNPickerSelect
                  onValueChange={value => setProvinceInput(value)}
                  placeholder={{
                    label: 'Select a country...',
                    color: '#fff',
                    value: null,
                  }}
                  style={{ ...pickerSelectStyles }}
                  items={provinceOption}
                />
              </Picker>

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Password"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Create
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#000" />
        <BackToSignInText>Back to Login</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: '#000',
  },
  inputAndroid: {
    fontSize: 16,
    color: '#000',
  },
});
