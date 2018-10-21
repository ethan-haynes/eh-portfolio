import { white, gray } from '../shared/styles/colors'

export const app = {
  height: '95vh',
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  padding: 30,
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: gray.dark,
  color: white,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(to bottom right, ${gray.light}, ${gray.dark})`
}
