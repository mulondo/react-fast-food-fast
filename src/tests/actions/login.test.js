import { Login } from '../../actions/login';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Login() action', () => {
afterEach(() => fetchMock.restore());

  it('returns errors given incorrect data', () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}/auth/login`, {
      'Content-Type': 'application/json',
      body: {
        
          message: 'user logining '
        
      }
    });
    const invalidData = {
      
   
        username: 'mulondo',
        password: 'ghvdsjcsdh'
      
    };
    const store = mockStore();
    const expectedActions = [
      {
      
        payload: {
          
            message: 'password should be have a uppercase and digit'
          
        }
      }
    ];
    store
      .dispatch(Login(invalidData))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});




