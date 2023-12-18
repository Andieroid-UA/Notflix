export class Task {
  company: string;
  date: string;
  type: string;
  price: string;
  category: string;

  constructor(company: string = '', date: string = '', type: string = '', price: string = '', category = '') {
    this.company = company;
    this.date = date;
    this.type = type;
    this.price = price;
    this.category = category;
 }
}
