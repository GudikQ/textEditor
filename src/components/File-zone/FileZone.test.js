import React from 'react';
import {FileZone} from './FileZone';
import {shallow, mount} from "enzyme";


describe("fileZone", () => {
    it("should render snapshot", () => {
        const component = shallow(<FileZone string="test" addWord={jest.fn()}/>);
        // expect(component).toMatchSnapshot();
    })

    it("should be call method adWord", () => {
        const props = {string: "text", addWord: () => jest.fn()}
        const component = shallow(<FileZone {...props} />);
        const text = component.find("#text")
        console.log(text.debug());
        expect(text.text()).toBe("text")
    })

    it("should be a new text", () => {
        const component = shallow(<FileZone string="" addWord={jest.fn()}/>);
        //component.find('.input').simulate("change", {target: {value: "newText"}})
        component.find('.input').props().onChange({target: {value: "newText"}})
        const text = component.find("#text");
        expect(text.text()).toBe("newText");
    })

    it('should be button disable', () => {
        const component = shallow(<FileZone string=" " addWord={jest.fn()}/>)
        const button = component.find('.btn');
        expect(button.props().disabled).toBeTruthy();
    })

    it('should be button enabled', () => {
        const component = shallow(<FileZone string="QQQ" addWord={jest.fn()}/>)
        const button = component.find('.btn');
        expect(button.props().disabled).toBeFalsy();
    })

    it('should be launch the method', () => {
        const props = {string: "PPP", addWord: jest.fn()}
        const component = shallow(<FileZone {...props} />)
        component.find('.btn').simulate('click');
        component.find('.btn').simulate('click');
        expect(props.addWord).toHaveBeenCalled(2)
    })
});