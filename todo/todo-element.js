import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * `todo-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        task{
          display: flex,
          text-align: center
        }

        paper-input{
          display: inline-block 
        }
      </style>
      <h2>[[name]]</h2>
      <div class="todo-list">
      <dom-repeat items={{tasks}} as="task" filter="isNotDone" observe="done">
        <template>
          <div class="task">
            <paper-checkbox checked={{task.done}}></paper-checkbox>
            <paper-input label="Task: " value="{{task.task}}"></paper-input>
          </div>
        </template>
      </dom-repeat>
        
      <paper-button on-click="addTask">Add Task</paper-button>
      <h3>[[sub]]</h3>
      <dom-repeat items={{tasks}} as="task" filter="isDone" observe="done">
        <template>
          <div class="task">
            <paper-checkbox checked={{task.done}}></paper-checkbox>
            <paper-input label="Task: " value="{{task.task}}"></paper-input>
          </div>
        </template>
      </dom-repeat>
      </div>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'To-do App',
      },
      sub: {
        type: String,
        value: 'Completed'
      },
      tasks:{
        type: Array,
        value: () => [{done:false,task:'Add a Task'}]
      }
    };
  }

  addTask(){
    let oTask = {
      done: false,
      task: ''
    }
    this.push('tasks',oTask);
  }

  isNotDone(oTask){
    return !oTask.done;
  }

  isDone(oTask){
    return oTask.done;
  }
}

window.customElements.define('todo-element', TodoElement);
