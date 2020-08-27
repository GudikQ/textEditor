import React from 'react';
import {shallow} from "enzyme";
import {Test} from "./Test";
import {TestChildren} from "./testChildren/TestChildren";

describe('test component', () => {
    const props = {
        name: "Alex",
    }

    it('render component with data', () => {
        const component = shallow(<Test {...props}/>)
        //console.log(component.debug())
        expect(component.find('p').text()).toEqual(props.name);
    })

    it('Loading', () => {
        const newProps = {
            firstname: "alex"
        }
        const newsComponent = shallow(<Test {...newProps}/>)
        expect(newsComponent.find('p').text()).toEqual('Loading...')
    })

    it('TestChildren Component', () => {
        const newsComponent = shallow(<Test {...props} />)
        console.log(newsComponent.debug())
        expect(newsComponent.find(TestChildren)).toHaveLength(1)
    })

    // it('button click', () => {
    //     const newsComponent = shallow(<Test {...props} />)
    //     newsComponent.find(".btn").simulate('click')
    //     expect(clickHandler).toHaveBeenCalledTimes(1)
    // })
})