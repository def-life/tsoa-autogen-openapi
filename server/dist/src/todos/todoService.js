"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: '1',
            title: "title",
            description: "description",
            done: true
        };
    }
    create(params) {
        console.log('fake create');
        return Object.assign(Object.assign({ id: "asdf" }, params), { done: false });
    }
}
exports.TodoService = TodoService;
