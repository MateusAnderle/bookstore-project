import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  CentralizeContainerRegistrationSuccess,
  RegistrationContainerSuccess,
} from '../../styles/pages/registrationSuccess'
import SucessoImage from '../../assets/sucesso.png'
import Image from 'next/image'

export default function RegistrationSucess() {
  const router = useRouter()
  const rawCpfFormData = router.query.cpfFormData
  const formData = JSON.parse(rawCpfFormData)
  console.log(formData) // Tirar esse dados do front-end

  return (
    <CentralizeContainerRegistrationSuccess>
      <RegistrationContainerSuccess>
        <Head>
          <title>Sebus</title>
        </Head>
        <Image src={SucessoImage} width={360} alt="" />
        <h2>Cadastro efetuado com sucesso!</h2>
        <Link href={`/`}>
          <p>Continue navegando em nosso site!</p>
        </Link>
      </RegistrationContainerSuccess>
    </CentralizeContainerRegistrationSuccess>
  )
}
