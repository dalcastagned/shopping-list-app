import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase'

import { ItemContext } from '../../context';
import * as S from './elements'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const navigate = useNavigate();
  const { setUserId } = useContext(ItemContext)

  const loginFirebase = (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      setErrorPassword(true)
      return
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password1)
        .then((userCredential) => {
          let user = userCredential.user;
          setPassword1('')
          setPassword2('')
          setEmail('')
          setUserId(user.uid)
          navigate(`/home`)
        })
        .catch(() => {
          setError(true)
        });
    }
  }

  return (
    <S.Container onSubmit={loginFirebase}>
      <S.Title>Cadastro de Usuário</S.Title>
      <S.Input
        placeholder='Digite seu Email'
        type='text'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setError(false)
          setErrorPassword(false)
        }}
      />
      <S.Input
        placeholder='Digite sua Senha'
        type='password'
        value={password1}
        onChange={(e) => {
          setPassword1(e.target.value)
          setError(false)
          setErrorPassword(false)
        }}
      />
      <S.Input
        placeholder='Confirme sua Senha'
        type='password'
        value={password2}
        onChange={(e) => {
          setPassword2(e.target.value)
          setError(false)
          setErrorPassword(false)
        }}
      />
      <S.Erro>
        {error === true
          &&
          <>
            <S.ErroIcon />
            <p>Email já cadastrado</p>
          </>
        }
        {errorPassword === true
          &&
          <>
            <S.ErroIcon />
            <p>Senhas Diferentes</p>
          </>
        }
      </S.Erro>
      <S.Button type='submit'>Cadastrar</S.Button>
      <S.Registration>
        {`Já possui registro? `}
        <span
          onClick={() => navigate('/')}
        >
          Faça login agora...
        </span>
      </S.Registration>
    </S.Container>
  );
};

export default SignUp;
