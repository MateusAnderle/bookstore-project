import { styled } from '..'

export const SectionContainer = styled('section', {
  marginTop: '50px',

  h2: {
    marginBottom: '20px',
  },

  p: {
    marginBottom: '40px',
  },
})

export const ProductWrapperList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gridGap: '20px',
  alignItems: 'center',
  marginBottom: '50px',
})
