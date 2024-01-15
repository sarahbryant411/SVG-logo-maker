const { Square, Triangle, Circle } = require('./shapes');

describe ('Square', () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = '<' + 'circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />';
        ") 