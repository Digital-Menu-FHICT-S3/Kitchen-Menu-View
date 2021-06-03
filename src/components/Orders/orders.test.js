import React from "react";
import ReactDOM from "react-dom";
import OrdersDone from './OrdersDone'
import OrdersCurrent from './OrdersCurrent'
import { statusEnum } from './statusEnum'

describe('renders without crashing', () => {
    test('OrdersDone', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OrdersDone />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('OrdersCurrent', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OrdersCurrent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})

describe('Enum value\'s correct', () => {
    test('ToDo = 1', () => {
        expect(statusEnum.ToDo.value).toBe(1)
    })

    test('InProgress = 2', () => {
        expect(statusEnum.InProgress.value).toBe(2)
    })

    test('Done = 3', () => {
        expect(statusEnum.Done.value).toBe(3)
    })
});