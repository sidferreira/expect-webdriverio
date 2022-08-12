import { browser } from '@wdio/globals'

import { executeCommandBe } from '../../utils.js'

export function toBeEnabled(received: WebdriverIO.Element | WebdriverIO.ElementArray, options: ExpectWebdriverIO.CommandOptions = {}): any {
    this.expectation = this.expectation || 'enabled'

    return browser.call(async () => {
        const result = await executeCommandBe.call(this, received, el => el.isEnabled(), options)
        return result
    })
}
