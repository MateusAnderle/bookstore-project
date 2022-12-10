import {
  CentralizeContainerLogin,
  LoginContainer,
  LoginContent,
  SubmitButton,
  TextInput,
} from '../../styles/pages/login'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import LoginImage from '../../assets/loginImage.png'
import Link from 'next/link'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => console.log(data)

  return (
    <CentralizeContainerLogin>
      <LoginContainer>
        <LoginContent>
          <Image
            src={LoginImage}
            width={320}
            alt=""
            style={{ borderRadius: '10px' }}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="login"
              type="email"
              placeholder="Digite seu login ou e-mail"
              {...register('login', { required: true })}
            />

            <TextInput
              name="password"
              type="password"
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />

            <SubmitButton type="submit" value="Login" />

            {errors.login && <span>{errors?.login?.message}</span>}
            {errors.password && <span>{errors.password.message}</span>}
          </form>

          <span>
            Ainda não tem cadastro?{' '}
            <Link href="/registration">Clique aqui!</Link>
          </span>
        </LoginContent>
      </LoginContainer>
    </CentralizeContainerLogin>
  )
}
