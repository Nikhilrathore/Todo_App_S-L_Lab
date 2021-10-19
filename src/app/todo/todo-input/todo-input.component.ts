import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent  {
  list:any[]=[];
  public answer: number;

  todoinputComponent(){
    this.answer = 10
  }
  addTask(item:string){

    this.list.push({id:this.list.length,name:item})
    this.answer=this.list.length;
    console.log(this.list.length);
    console.warn(this.list);
  }

  removeTask(id:number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id);
    this.answer=this.list.length;
  }


}
