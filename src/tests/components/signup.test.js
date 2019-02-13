import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Register } from '../../components/auth/Signup';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Register/>', () => {
  const editor = shallow(<Register registerUser={jest.fn()} />);
  const props = {
    registerUser: (user) => jest.fn(),
    signUp: jest.fn()
  };

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });

  it('test component on submit', () => {
    const wrapper = mount(<Register {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {}};
    instance.onSubmit(e);
  });

});