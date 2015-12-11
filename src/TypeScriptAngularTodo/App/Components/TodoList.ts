import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'todo-list'
})

@View({
    template: "Todo"
})

export default class TodoList {
    title: string;

    constructor() {
        this.title = "Angular2 Todo"
    }
}