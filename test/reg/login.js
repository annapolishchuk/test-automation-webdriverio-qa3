import assert from 'assert';

let maxLength = 45;

describe('Login', function () {

    describe('Email', function () {

        it('Max Characters', function () {
            browser.url('/');
            let input = $('#email');
            input.addValue('j'.repeat(maxLength));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, maxLength);
        })

        it('Max Characters + 1', function () {
            browser.url('/');
            let input = $('#email');
            input.addValue('j'.repeat(maxLength + 1));
            let actual = input.getValue().length;
            //console.log('EXPECT', 'j'.repeat(maxLength + 1).length);
            //console.log('ACTUAL', actual);
            assert.equal(actual, maxLength);
        })
    });
});
