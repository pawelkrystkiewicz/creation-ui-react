import { propsGuard } from '../props-guard';
import { describe, expect, test } from 'vitest';
const PROPS = {
    loading: false,
    disabled: true,
    title: 'My Title',
    extra: 'should be removed',
    emptyProp: '',
    nullProp: null,
};
describe('[propsGuard]', () => {
    ;
    [
        {
            description: 'should filter out undefined, null and empty values while keeping allowed props',
            input: { propsList: ['loading', 'disabled', 'title'], props: PROPS },
            expected: {
                //
                disabled: true,
                title: 'My Title',
                extra: 'should be removed',
                emptyProp: '',
                nullProp: null,
            },
        },
        {
            description: 'should ignore props not in propsList',
            input: { propsList: ['title'], props: { title: 'Test Title', label: 'value' } },
            expected: { title: 'Test Title', label: 'value' },
        },
        {
            description: 'should handle boolean values correctly',
            input: { propsList: ['loading'], props: { loading: false, extra: true } },
            expected: { extra: true },
        },
        {
            description: 'should return an empty object when no valid props are provided',
            input: { propsList: ['loading'], props: { extra: 'not allowed' } },
            expected: { extra: 'not allowed' },
        },
        {
            description: 'should allow valid non-boolean values',
            input: {
                propsList: ['count'],
                props: {
                    count: 5,
                    children: {
                        type: 'string',
                        value: 'Button',
                        $$typeof: Symbol.for('react.element'),
                    },
                },
            },
            expected: {
                count: 5,
                children: {
                    type: 'string',
                    value: 'Button',
                    $$typeof: Symbol.for('react.element'),
                },
            },
        },
        {
            description: 'button example 1',
            input: {
                propsList: ['variant', 'color', 'loading', 'disabled', 'uppercase', 'fullWidth', 'loaderColor'],
                props: {
                    children: {
                        type: 'string',
                        value: 'Button',
                        $$typeof: Symbol.for('react.element'),
                    },
                    variant: 'contained',
                    color: 'error',
                    loading: false,
                    disabled: true,
                    uppercase: true,
                    fullWidth: true,
                    circle: true,
                    loaderColor: 'error',
                },
            },
            expected: {
                children: {
                    type: 'string',
                    value: 'Button',
                    $$typeof: Symbol.for('react.element'),
                },
                variant: 'contained',
                color: 'error',
                disabled: true,
                uppercase: true,
                fullWidth: true,
                circle: true,
                loaderColor: 'error',
            },
        },
    ].forEach(({ description, input, expected }) => {
        test(description, () => {
            const result = propsGuard(input.propsList, input.props);
            expect(result).toEqual(expected);
        });
    });
});
