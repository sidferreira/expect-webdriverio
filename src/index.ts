import { expect as expectLib } from 'expect'

import _matchers from './matchers.js'
import { DEFAULT_OPTIONS } from './constants.js'

export const matchers = _matchers;
expectLib.extend({ ...matchers })
export const expect = expectLib
export const getConfig = (): any => DEFAULT_OPTIONS
export const setDefaultOptions = (options = {}): void => {
    Object.entries(options).forEach(([key, value]) => {
        if (key in DEFAULT_OPTIONS) {
            // @ts-ignore
            DEFAULT_OPTIONS[key] = value
        }
    })
}
export const setOptions = setDefaultOptions
