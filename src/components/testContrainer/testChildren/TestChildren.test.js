import React from "react";
import { shallow } from "enzyme";
import { TestChildren } from "./TestChildren";


describe('children component', () => {
    const data =  [{name: "alex"}]

    const component = shallow(<TestChildren data={data}/>)

    it('render 1 user', () => {
        expect(component.find('div.item')).toHaveLength(1)
    })

    it('name', () => {
        expect(component.find('p').first().text()).toEqual('alex')
    })


})