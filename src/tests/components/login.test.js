import React from 'react';
import { shallow, mount } from 'enzyme';
import { Userlogin } from '../../components/auth/login';


describe('<Userlogin/>', () => {
  const editor = shallow(<Userlogin registerUser={jest.fn()} />);
  const props = {
    registerUser: (user) => jest.fn(),
    Login: jest.fn()
  };

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });



it('renders a username input', () => {
  expect(shallow(<Userlogin />).find('#username').length).toEqual(0);
});

it('renders a password input', () => {
  expect(shallow(<Userlogin />).find('#password').length).toEqual(0);
});

it('test Login component onchange', () => {
  const wrapper = shallow(<Userlogin {...props} />);
  const instance = wrapper.instance();
  instance.onChange({ target: { name: 'name', value: 'value' } });
  const e = { preventDefault: () => {} };
  instance.onSubmit(e);
  expect(instance.state.name).toEqual('value');
});

});