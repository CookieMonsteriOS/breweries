import React from 'react';
import { Nav, NavItem,  NavLink } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Find out more</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Who are we?</NavLink>
                </NavItem>
            </Nav>
            <hr />
        </div>
    );
}

export default Example;