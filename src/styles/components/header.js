import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: '$red',
  alignItems: 'center',
})

export const MainHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '1180px',
  background: '$red',
  justifyContent: 'space-between',
  height: '120px',
  alignItems: 'center',
})

export const LogoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#FBEFE3',

  svg: {
    marginRight: '20px',
    background: '$lightYellow',
    color: '$black',
    borderRadius: 10,
    height: 50,
    width: 50,
    padding: 5,
  },
})

export const InputAndIcons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  input: {
    height: '35px',
    width: '450px',
    border: 'none',
    fontFamily: 'sans-serif',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    background: '#FBEFE3',
    outline: 'none',
    padding: '5px 20px',
    fontSize: '18px',
    alignItems: 'center',
  },

  button: {
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    height: '35px',
    width: '80px',
    background: '$lightYellow',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: '20px',

    '&:hover': {
      cursor: 'pointer',
      background: '#BFB88B',
    },
  },

  svg: {
    marginLeft: '20px',
    background: '$lightYellow',
    color: '$black',
    borderRadius: 20,
    height: 40,
    width: 42,
    padding: 10,

    '&:hover': {
      background: '#BFB88B',
      cursor: 'pointer',
    },
  },
})

export const NavContainer = styled('nav', {
  display: 'flex',
  width: '100%',
  background: '$lightYellow',
  justifyContent: 'center',
})

export const NavHeader = styled('ul', {
  display: 'flex',
  flexDirection: 'row',
  width: '1180px',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyleType: 'none',

  li: {
    display: 'flex',
    height: '50px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '16px',

    '&:hover': {
      background: '#BFB88B',
      cursor: 'pointer',
    },
  },
})
