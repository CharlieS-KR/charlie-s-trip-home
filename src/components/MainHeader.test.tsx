import React from 'react';
import MainHeader from './MainHeader';
import { shallow } from 'enzyme';
import Toolbar from '@material-ui/core/Toolbar';

describe('our main header', () => {
    let wrapper = shallow(<MainHeader />);

    it('renders without crashing', () => {
        expect(
            wrapper.contains(<Toolbar></Toolbar>)
        );
    });
});
