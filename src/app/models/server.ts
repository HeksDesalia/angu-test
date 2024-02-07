import { Instance } from './instance';

export class Server {
  id: number;
  name: string;
  vlan: string;
  instances: Instance[];

  constructor(id: number, name: string, vlan: string, instances: Instance[]) {
    this.id = id;
    this.name = name;
    this.vlan = vlan;
    this.instances = instances;
  }
}
