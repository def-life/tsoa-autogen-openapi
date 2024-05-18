/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pick_Todo_title_or_description_ } from '../models/Pick_Todo_title_or_description_';
import type { Todo } from '../models/Todo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param todoId
     * @returns Todo Ok
     * @throws ApiError
     */
    public static getTodo(
        todoId: string,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todos/{todoId}',
            path: {
                'todoId': todoId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns Todo Created
     * @throws ApiError
     */
    public static createTodo(
        requestBody: Pick_Todo_title_or_description_,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/todos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
