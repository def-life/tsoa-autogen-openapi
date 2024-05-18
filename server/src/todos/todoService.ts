import { Todo } from "./todo";


export type TodoCreationParams = Pick<Todo, "title" | "description">


export class TodoService {

    get(todoId: string): Todo {
        return {
            id: '1',
            title: "title",
            description: "description",
            done: true
        }
    }


    create(params: TodoCreationParams): Todo {
        console.log('fake create')
        return { id: "asdf", ...params, done: false }
    }

    // more such services

}