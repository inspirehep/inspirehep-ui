import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import URLLink from './URLLink';
import InlineList from '../../common/components/InlineList';

class URLList extends Component {
  static renderURLItem(url) {
    return (
      <span>
        <URLLink>{url.get('value')}</URLLink>
      </span>
    );
  }

  render() {
    const { urls } = this.props;

    return (
      <InlineList
        items={urls}
        extractKey={url => url.get('value')}
        renderItem={url => URLList.renderURLItem(url)}
      />
    );
  }
}

URLList.propTypes = {
  urls: PropTypes.instanceOf(List),
};

URLList.defaultProps = {
  urls: null,
};

export default URLList;
