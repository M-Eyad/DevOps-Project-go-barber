import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/api/v1/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu logon no GoBarber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);
          formRef.current?.setErrors(error);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Erro ao fazer o cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>! قم بالتسجيل</h1>
            <Input name="name" icon={FiUser} placeholder="الاسم" type="text" autoComplete="name" />
            <Input name="email" icon={FiMail} placeholder="البريد الإلكتروني" type="email" autoComplete="email" />
            <Input name="password" icon={FiLock} placeholder="كلمة المرور" type="password" autoComplete="current-password" />
            <Button type="submit">تسجيل</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            العودة إلى تسجيل الدخول
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
