import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../app/(tabs)/index';

test('renders correctly', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});