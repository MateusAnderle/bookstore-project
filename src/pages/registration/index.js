import {
  CentralizeContainerRegistration,
  Form,
  RegistrationContainer,
  TwoInputsContainer,
} from '../../styles/pages/registration'
import { useForm } from 'react-hook-form'
import { zipCodeApi } from '../../utils/api'
import RegistroImage from '../../assets/registro.png'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Registration() {
  const [registeredCpf, setRegisteredCpf] = useState()
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const router = useRouter()
  const customersCPF = [
    { id: 1, cpf: '08048892952' },
    { id: 2, cpf: '08048892951' },
    { id: 3, cpf: '08048892950' },
    { id: 4, cpf: '12345678910' },
    // tirar verificação do front-end
  ]

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const cpfData = JSON.stringify(data)
    router.push(`/registrationSuccess/${cpfData}`)
    // Tirar senha via route (segurança)
  }

  async function fetchZipCode(code) {
    const zipCodeFiltered = code.target.value
    if (zipCodeFiltered.length < 8 || zipCodeFiltered.length > 8) {
      return
    }
    const response = await zipCodeApi.get(`/${zipCodeFiltered}/json/`)

    setValue('address', response.data.logradouro)
    setValue('district', response.data.bairro)
    setValue('city', response.data.localidade)
  }

  function checkCpf(cpf) {
    const cpfValue = cpf.target.value
    if (cpfValue.length < 11 || cpfValue.length > 11) {
      return
    }
    const [cpfFiltered] = customersCPF.filter((item) => item.cpf === cpfValue)
    setRegisteredCpf(cpfFiltered)
  }

  return (
    <CentralizeContainerRegistration>
      <Head>
        <title>Sebus</title>
      </Head>
      <RegistrationContainer>
        <Image
          src={RegistroImage}
          width={400}
          alt=""
          style={{ borderRadius: '10px' }}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome completo:
            <input
              name="name"
              type="text"
              placeholder="Digite aqui seu nome completo"
              {...register('name', { required: 'Nome obrigatório' })}
            />
            {errors.name && (
              <span style={{ color: '#f00', fontStyle: 'italic' }}>
                {errors.name.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              CEP (apenas números):
              <input
                name="zipCode"
                type="number"
                placeholder="Digite aqui seu CEP"
                {...register('zipCode', {
                  required: 'CEP obrigatório',
                  onBlur: fetchZipCode,
                  minLength: {
                    value: 8,
                    message: 'Digite no mínimo 8 números',
                  },
                  maxLength: {
                    value: 8,
                    message: 'Digite no máximo 8 números',
                  },
                })}
              />
              {errors.zipCode && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.zipCode.message}
                </span>
              )}
            </label>

            <label>
              Telefone (com DDD):
              <input
                name="phone"
                type="number"
                placeholder="Digite aqui seu telefone"
                {...register('phone', {
                  required: 'Telefone obrigatório',
                  minLength: {
                    value: 10,
                    message: 'Digite no mínimo 10 números',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Digite no máximo 11 números',
                  },
                })}
              />
              {errors.phone && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.phone.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          <label>
            Endereço:
            <input
              name="address"
              type="text"
              placeholder="Digite aqui seu endereço"
              {...register('address', {
                required: 'Endereço obrigatório',
              })}
            />
            {errors.address && (
              <span style={{ color: '#f00', fontStyle: 'italic' }}>
                {errors.address.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              Bairro:
              <input
                name="district"
                type="text"
                placeholder="Digite aqui seu bairro"
                {...register('district', {
                  required: 'Bairro obrigatório',
                })}
              />
              {errors.district && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.district.message}
                </span>
              )}
            </label>

            <label>
              Cidade:
              <input
                name="city"
                type="text"
                placeholder="Digite aqui sua cidade"
                {...register('city', {
                  required: 'Cidade obrigatória',
                })}
              />
              {errors.city && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.city.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          <label>
            CPF (apenas números):
            <input
              name="cpf"
              type="number"
              placeholder="Digite aqui seu CPF"
              {...register('cpf', {
                required: 'CPF obrigatório',
                minLength: {
                  value: 11,
                  message: 'Digite no mínimo 11 números',
                },
                maxLength: {
                  value: 11,
                  message: 'Digite no máximo 11 números',
                },
                onChange: checkCpf,
              })}
            />
            {errors.cpf && (
              <span style={{ color: '#f00', fontStyle: 'italic' }}>
                {errors.cpf.message}
              </span>
            )}
            {!!registeredCpf && (
              <span style={{ color: '#f00', fontStyle: 'italic' }}>
                CPF já cadastrado no sistema
              </span>
            )}
          </label>

          <label>
            E-mail:
            <input
              name="email"
              type="email"
              placeholder="Digite aqui seu melhor e-mail"
              {...register('email', { required: 'E-mail obrigatório' })}
            />
            {errors.email && (
              <span style={{ color: '#f00', fontStyle: 'italic' }}>
                {errors.email.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              Crie uma senha:
              <input
                name="password"
                type="password"
                placeholder="Nova senha"
                {...register('password', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 6,
                    message: 'No mínimo 6 dígitos',
                  },
                  onChange: setPassword,
                })}
              />
              {errors.password && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.password.message}
                </span>
              )}
            </label>

            <label>
              Repita a senha:
              <input
                name="repeatPassword"
                type="password"
                placeholder="Repita a senha anterior"
                {...register('repeatPassword', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 6,
                    message: 'No mínimo 6 dígitos',
                  },
                  onChange: setNewPassword,
                })}
              />
              {errors.repeatPassword && (
                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                  {errors.repeatPassword.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          {password && newPassword && (
            <span style={{ color: '#f00', fontStyle: 'italic' }}>
              {password.target.value === newPassword.target.value
                ? null
                : 'As senhas devem ser iguais'}
            </span>
          )}

          <input
            type="submit"
            value="Cadastrar"
            disabled={!!registeredCpf}
            style={{ cursor: registeredCpf ? 'not-allowed' : 'pointer' }}
          />
        </Form>
      </RegistrationContainer>
    </CentralizeContainerRegistration>
  )
}
