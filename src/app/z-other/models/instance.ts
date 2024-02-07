import { Application } from './application';

export class Instance {
  id: number;
  name: string;
  application?: Application;
  constructor(id: number, name: string, application?: Application) {
    this.id = id;
    this.name = name;
    this.application = application;
  }
}
