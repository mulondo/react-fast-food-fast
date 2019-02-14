import { signUp} from '../../actions/signUpAction';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('signUp() action', () => {
afterEach(() => fetchMock.restore());

  it('returns errors given incorrect data', () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}/auth/signup`, {
      'Content-Type': 'application/json',
      body: {
        
          message: 'password'
        
      }
    });
    const invalidData = {
        name: 'mulondo',
        username: '888348934',
        password: 'wulojhb.'
      
    };
    const store = mockStore();
    const expectedActions = [];
    store
      .dispatch(signUp(invalidData))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
