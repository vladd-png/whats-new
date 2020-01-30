import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {

  it('should be an instance of NewsContainer component', () => {
    const wrapper = shallow(<NewsContainer
        newsType={[{
          headline: 'Ramen',
          description: 'Oriental Chicken Flavor',
          url: 'url.link',
          id: 7,
          img: 'ur.link',
        }]}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
