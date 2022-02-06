import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase'

import { ItemContext } from '../../context';
import * as S from './elements'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const { setUserId } = useContext(ItemContext)

  const loginFirebase = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        setPassword('')
        setEmail('')
        setUserId(user.uid)
        navigate(`/home`)
      })
      .catch(() => {
        setError(true)
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid)
        navigate(`/home`)
      }
    });
    // eslint-disable-next-line
  }, [])

  return (
    <S.Container onSubmit={loginFirebase}>
      <S.Title>Lista de Compras</S.Title>
      <S.Input
        placeholder='Digite seu Email'
        type='text'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setError(false)
        }}
      />
      <S.Input
        placeholder='Digite sua Senha'
        type='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setError(false)
        }}
      />
      <S.Erro>
        {error === true
          &&
          <>
            <S.ErroIcon />
            <p>Email ou senha inválido</p>
          </>
        }
      </S.Erro>
      <S.Button type='submit'> Login</S.Button>
      <S.Registration>
        {`Não tem registro? `}
        <span
          onClick={() => navigate('signup')}
        >
          Cadastre-se agora...
        </span>
      </S.Registration>
    </S.Container>
  );
};

export default Login;
