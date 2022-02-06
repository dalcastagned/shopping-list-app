import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase'

import loading from '../../images/loading.gif'
import { ItemContext } from '../../context';
import * as S from './elements'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const navigate = useNavigate();
  const { setUserId } = useContext(ItemContext)

  const loginFirebase = (event) => {
    event.preventDefault();
    setLoggingIn(true)
    if (password1 !== password2) {
      setLoggingIn(false)
      setErrorPassword(true)
      return
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password1)
        .then((userCredential) => {
          let user = userCredential.user;
          setLoggingIn(false)
          setPassword1('')
          setPassword2('')
          setEmail('')
          setUserId(user.uid)
          navigate(`/home`)
        })
        .catch(() => {
          setLoggingIn(false)
          setError(true)
        });
    }
  }

  if (window.innerWidth > 580) {
    return (
      <S.ContainerInfo>
        <h1>Olá, esse site foi feito apenas para celulares por isso não aparecerá em dispositivos acima de 580px de largura. Obrigado pela visita!</h1>
      </S.ContainerInfo>
    )
  } else {
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
        <S.Button type='submit'>
          {loggingIn
            ? <img src={loading} width={40} alt='loading' />
            : 'Cadastrar'
          }
        </S.Button>
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
  }
};

export default SignUp;
