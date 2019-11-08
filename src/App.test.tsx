import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MainHeader from './components/MainHeader';

describe('our outermost App component', () => {
  let wrapper = shallow(<App />);

  it(`Should render our 'MainHeader' component`, () => {
    expect(
      wrapper.contains(<MainHeader />)
    ).toBe(true);
  });
});


