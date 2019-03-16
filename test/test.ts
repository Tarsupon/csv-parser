import {assert, expect} from 'chai';
import 'mocha';
import {validate} from "../src/validation";

const array =[
    {
        ID: 10001,
        Name: "Alex",
        Surname: "Navalny",
        Mail: "navlex@mail.ru",
        Date: "01.05.2018",
        Phone: "375 33 2352356",
    },
    {
        ID: 1001,
        Name: "Alexthebesthumanintheworld",
        Surname: "Navalny",
        Mail: "navlex@mail.ru",
        Date: "01.05.2018",
        Phone: "375 33 2352356",
    },
    {
        ID: 1001,
        Name: "Alex",
        Surname: "Navalny",
        Mail: "navlex@mail.ru",
        Date: "01.05.2018",
        Phone: "375 33 23523566565",
    },
];

const array1 = [
    {
        ID: 1001,
        Name: "Alex",
        Surname: "Navalny",
        Mail: "navlex@mail.ru",
        Date: "01.05.2018",
        Phone: "375 33 2352356",
    },
];

describe('validate', () => {
    it('Return empty array if invalid', () => {
        let empty = [];
       expect(validate(array).length).to.equal(empty.length);
    });
})

describe('validate', () => {
    it('Return valid array if valid', () => {
        expect(validate(array1).length).to.equal(1);
    });
})