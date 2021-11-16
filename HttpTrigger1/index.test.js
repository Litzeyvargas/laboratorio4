const functions = require('./index');
const context = require('../testing/Context');
//const { test } = require('@jest/globals');

test('Http trigger Example', async () => {
    const request = {
        query: { name: 'Litzeyv' }
    };

    await httpFunctions(context, request);
    expect(context.res.body).toContain('W');
    expect(context.res.body).toEqual('Welcome, Litzeyv');
    expect(context.log.mock.calls.length).toBe(2);

});