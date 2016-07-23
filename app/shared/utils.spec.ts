import * as utils from './utils'

describe('Test Utils', () => {
    it('IsNullOrEmptyString', () => {
        let testCases: any = [
            [null, true],
            [undefined, true],
            ['', true],
            ['0', false],
            ['false', false],
            ['1', false],
            ['true', false],
        ];
        testCases.forEach((testCase) => {
            let testValue = testCase[0];
            let expectedResult = testCase[1];
            expect(utils.isNullOrEmptyString(testValue)).toEqual(expectedResult);
        })
    })

    it('IsNotEmptyString', () => {
        let testCases: any = [
            [null, false],
            [undefined, false],
            ['', false],
            ['0', true],
            ['false', true],
            ['1', true],
            ['true', true],
        ];
        testCases.forEach((testCase) => {
            let testValue = testCase[0];
            let expectedResult = testCase[1];
            expect(utils.isNotEmptyString(testValue)).toEqual(expectedResult);
        })
    })
});