import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3e5fc',
  },
  absoluteInput1: {
      position: 'absolute',
      top: 100, 
      left: 20,
      width: '80%',
  },
  absoluteInput2: {
    position: 'absolute',
    top: 150, 
    left: 20, 
    width: '80%',
  },
  absoluteInput3: {
    position: 'absolute',
    top: 200,
    left: 20,
    width: '80%',
  },
  absoluteInput4: {
    position: 'absolute',
    top: 250,
    left: 20,
    width: '80%',
  },
  absoluteInput5: {
    position: 'absolute',
    top: 300,
    left: 20,
    width: '80%',
  },
  input: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007bff',
    padding: 10,
  },
  logoutButton: {
    color: 'red',
    position: 'absolute',
    top: 10,
    right: 120
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    right: 55,
  },
  registerButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    
  },
  alertContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 999,
  },

});