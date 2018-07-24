import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import AuthorLink from '../AuthorLink';

describe('AuthorLink', () => {
  it('renders first_name and last_name with affiliations', () => {
    const author = fromJS({
      full_name: 'Name, Full',
      first_name: 'Full',
      last_name: 'Name',
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink author={author} recordId={12345} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full_name with affiliations', () => {
    const author = fromJS({
      full_name: 'Name, Full',
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink author={author} recordId={12345} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full_name with first_name missing', () => {
    const author = fromJS({
      full_name: 'Name Full',
      last_name: 'Last Name',
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink author={author} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders first_name with last_name missing', () => {
    const author = fromJS({
      full_name: 'Name Full',
      first_name: 'Name Full',
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink author={author} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full_name if first_name and last_name missing', () => {
    const author = fromJS({
      full_name: 'Name Full',
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink author={author} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders first_name and last_name', () => {
    const author = fromJS({
      full_name: 'Name, Full',
      first_name: 'Full',
      last_name: 'Name',
    });
    const wrapper = shallow(<AuthorLink recordId={12345} author={author} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders first_name and last_name of editor', () => {
    const author = fromJS({
      full_name: 'Name, Full',
      first_name: 'Full',
      last_name: 'Name',
      inspire_roles: ['editor'],
      affiliations: [
        {
          value: 'Affiliation',
        },
      ],
    });
    const wrapper = shallow(<AuthorLink recordId={12345} author={author} />);
    expect(wrapper).toMatchSnapshot();
  });
});
