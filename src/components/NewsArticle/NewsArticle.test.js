import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {

  it('should be an instance of NewsArticle component', () => {
    const wrapper = shallow(<NewsArticle
        props={[
          {headline: 'Spiderman Two', body:'Spidermans A Fraud', img:'url.link', link:'url.link'},
          {headline: 'Giant Chicken', body: 'Sits at Denver Museum', img:'url.link', link:'url.link'}
        ]}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
