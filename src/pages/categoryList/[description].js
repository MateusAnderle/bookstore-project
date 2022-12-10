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

  return (
    <CentralizeCategoryContainer>
      <CategoryContainer>
        <Head>
          <title>Sebus</title>
        </Head>
        <BooksList title={category || 'Sebus'} bookData={BookData} />
      </CategoryContainer>
    </CentralizeCategoryContainer>
  )
}
