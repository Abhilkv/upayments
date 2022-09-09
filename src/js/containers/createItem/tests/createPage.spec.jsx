import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import CreatePage from '../createPage';
import { Button } from '../../../components';

configure({ adapter: new Adapter() });

const mockClick = jest.fn();


describe('components/homePage', () => {
  it('Renders default options', () => {
    const component = shallow(
      <CreatePage />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
  it('Renders with click function and message', () => {
    const dummyData = [];
    const component = shallow(
      <CreatePage sumbitDetails={mockClick} categories={dummyData} />
    );
    component.find(Button).props().onClick();
    expect(mockClick).toHaveBeenCalled();
  });
});
