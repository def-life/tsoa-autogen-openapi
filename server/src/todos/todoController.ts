// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todos")
export class UsersController extends Controller {
    @Get("{todoId}")
    public async getTodo(
        @Path() todoId: string,

    ): Promise<Todo> {
        return new TodoService().get(todoId)
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createTodo(
        @Body() requestBody: TodoCreationParams
    ): Promise<Todo> {
        this.setStatus(201); // set return status 201
        const todo = new TodoService().create(requestBody);
        return todo;
    }
}