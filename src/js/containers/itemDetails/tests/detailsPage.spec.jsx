import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import DetailsPage from '../detailsPage';

configure({ adapter: new Adapter() });

describe('components/detailsPage', () => {
  it('Renders default options', () => {
    const component = shallow(
      <DetailsPage productData={{}} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
