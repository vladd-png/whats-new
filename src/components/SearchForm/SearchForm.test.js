import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm'

describe('SearchForm', () => {

  it('should update its state when handleChange is fired on the button', () => {
    const mockUpdate = jest.fn();
    const mockEvent = {
      target: {
        value: 'Joker'
      }
    }
    const wrapper = shallow(<SearchForm
        updateNews = {mockUpdate}
      />)
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('input')).toEqual('Joker')
  });

});
