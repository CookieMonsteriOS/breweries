import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from '../containers/App';

// App renders
test('it renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// Check placeholder text in search box
configure({adapter: new Adapter()});
test('brewery search box has correct placeholder text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.search-box').at(0).props().placeholder).toEqual('Find a brewery');
});

