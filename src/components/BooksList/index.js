import {
  ProductWrapperList,
  SectionContainer,
} from '../../styles/components/bookList'
import ProductCard from '../ProductCard'
import Pagination from './components/pagination'

export default function BooksList({ title = '', bookData }) {
  const titleFiltered = bookData ? title : 'Nenhum livro encontrado...'
  return (
    <SectionContainer>
      <h2>{titleFiltered}</h2>

      {bookData ? (
        <>
          <ProductWrapperList>
            {bookData?.map((book) => {
              return <ProductCard key={book.id} data={book} />
            })}
          </ProductWrapperList>

          <Pagination />
        </>
      ) : (
        <p>Tente novamente ou procure em outra página</p>
      )}
    </SectionContainer>
  )
}
