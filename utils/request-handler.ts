import { APIRequestContext, expect } from "@playwright/test"

export class RequestHandler {
    private request: APIRequestContext
    private baseUrl: string = ''
    private defaultBaseUrl: string = ''
    private apiPath: string = ''
    private queryParams: object = {}
    private apiHeaders: Record<string, string> = {}
    private apiBody: object = {}

    constructor(request: APIRequestContext, apiBaseUrl: string) {
        this.baseUrl = apiBaseUrl
        this.request = request
    }

    url(url: string) {
        this.baseUrl = url
        return this;
    }

    path(path: string) {
        this.apiPath = path
        return this;
    }

    params(params: object) {
        this.queryParams = params
        return this;
    }

    headers(headers: Record<string, string>) {
        this.apiHeaders = headers
        return this;
    }

    body(body: object) {
        this.apiBody = body
        return this;
    }

    async getRequest(statusCode: Number) {
        const url = this.getUrl()
        const response = await this.request.get(url, {
            headers: this.apiHeaders,
        })
        expect(response.status()).toEqual(statusCode)
        const responseJSON = await response.json()

        return responseJSON
    }

    async postRequest(statusCode: Number) {
        const url = this.getUrl()
        const response = await this.request.post(url, {
            headers: this.apiHeaders,
            data: this.apiBody
        })
        expect(response.status()).toEqual(statusCode)
        const responseJSON = await response.json()

        return responseJSON
    }

    async putRequest(statusCode: Number) {
        const url = this.getUrl()
        const response = await this.request.put(url, {
            headers: this.apiHeaders,
            data: this.apiBody
        })
        expect(response.status()).toEqual(statusCode)
        const responseJSON = await response.json()

        return responseJSON
    }

    async deleteRequest(statusCode: Number) {
        const url = this.getUrl()
        const response = await this.request.delete(url, {
            headers: this.apiHeaders
        })
        expect(response.status()).toEqual(statusCode)
    }

    private getUrl() {
        const url = new URL(`${this.baseUrl ?? this.defaultBaseUrl}${this.apiPath}`)
        for (const [key,value] of Object.entries(this.queryParams)){
            url.searchParams.append(key, value)
        }
        return url.toString()
    }

}