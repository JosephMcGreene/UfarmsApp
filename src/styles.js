import { StyleSheet } from 'react-native'

export const landingStyles = StyleSheet.create({
  btnsContainer: {
    width: '100%'
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: '100%'
  },
  container: {
    backgroundColor: '#242424',
    padding: 12
  },
  form: {
    marginBottom: 20,
    marginTop: 20,
    width: '100%'
  },
  h1: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  h2: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  h3: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'grey',
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 16
  },
  label: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25
  }
})

export const modalStyles = StyleSheet.create({
  button: {
    borderWidth: 3,
    fontSize: 20,
    marginTop: 20,
    padding: 10,
    textAlign: 'center'
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    elevation: 5,
    margin: 15,
    marginTop: 45,
    padding: 20
  },
  p: {
    fontSize: 16
  }
})
