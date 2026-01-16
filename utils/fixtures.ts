import {test as base} from '@playwright/test';
import { RequestHandler } from './request-handler';

export type TestOptions = {
    api: RequestHandler
}

export const test = base.extend<TestOptions>({
    api: async({request}, use) => {
        const baseUrl = 'https://jacobtest-us.release.useindio.com/api'
        const requestHandler = new RequestHandler(request, baseUrl)
        await use(requestHandler)
    }
})

