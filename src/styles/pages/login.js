import { styled } from '..'

export const CentralizeContainerLogin = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

export const LoginContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '1180px',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
  marginBottom: '50px',
  background: '$white',
  width: '400px',
  height: '450px',
  borderRadius: '10px',
  padding: '20px',
  justifyContent: 'center',
  alignItems: 'center',

  span: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    marginTop: '40px',
  },
})

export const TextInput = styled('input', {
  display: 'block',
  border: '1px solid #ccc',
  height: '40px',
  width: '320px',
  borderRadius: '8px',
  marginTop: '20px',
  padding: '5px 15px',
  fontFamily: 'sans-serif',
  fontSize: '14px',
})

export const SubmitButton = styled('input', {
  marginTop: '40px',
  display: 'block',
  border: 'none',
  height: '40px',
  width: '320px',
  borderRadius: '8px',
  padding: '5px 15px',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '$black',
  background: '$lightGray',

  '&:hover': {
    background: '$red',
    color: '$white',
    cursor: 'pointer',
  },
})
