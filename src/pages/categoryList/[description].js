import Head from 'next/head'
import BooksList from '../../components/BooksList'
import {
  CategoryContainer,
  CentralizeCategoryContainer,
} from '../../styles/pages/categoryList'
import { BookData } from '../../utils/jsonServer'
import { useRouter } from 'next/router'

export default function CategoryList() {
  const router = useRouter()
  const category = router.query.description

  const filteredList = BookData.filter((item) => item.id > 3) // LEMBRAR DE APAGAR ESSA LISTA CONSOLE.LOG()

  return (
    <CentralizeCategoryContainer>
      <CategoryContainer>
        <Head>
          <title>Sebus</title>
        </Head>
        <BooksList
          title={category || 'Sebus'}
          bookData={category === 'Mais vendidos' ? filteredList : BookData} // LEMBRAR DE APAGAR ESSA LISTA CONSOLE.LOG()
        />
      </CategoryContainer>
    </CentralizeCategoryContainer>
  )
}
