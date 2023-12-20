
export class Task {
  public name: string;
  public description: string;
  public imagePath: string;
  public task: Task[]; // Use the 'Task' interface

  constructor(name: string, desc: string, imagePath: string, tasks: Task[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.task = tasks;
  }
}

export interface Task {
  tasks: any;
  id: number;
  company: string;
  date: string;
  type: string;
  price: string;
  category: string;

//   constructor(company: string = '', date: string = '', type: string = '', price: string = '', category = '') {
//     this.company = company;
//     this.date = date;
//     this.type = type;
//     this.price = price;
//     this.category = category;
//  }
}
