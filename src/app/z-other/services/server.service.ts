import { Injectable } from '@angular/core';
import { SERVEUR_VLANS } from '../../app.constants';
import { Server } from '../models/server';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor() {}

  servers: Server[] = [
    {
      id: 1,
      name: 'Server 1',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
          application: {
            id: 10,
            name: 'APP - xyz.exemple1',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Server 2',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
          application: {
            id: 10,
            name: 'APP - xyz.exemple1',
          },
        },
      ],
    },
    {
      id: 3,
      name: 'Server 3',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
          application: {
            id: 10,
            name: 'APP - xyz.exemple1',
          },
        },
      ],
    },
    {
      id: 4,
      name: 'Server 4',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
          application: {
            id: 10,
            name: 'APP - xyz.exemple1',
          },
        },
      ],
    },
    {
      id: 5,
      name: 'Server 5',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
        },
      ],
    },
    {
      id: 6,
      name: 'Server 6',
      vlan: SERVEUR_VLANS.DEFAULT,
      instances: [
        {
          id: 1,
          name: 'Instance 1',
          application: {
            id: 1,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 2,
          name: 'Instance 2',
          application: {
            id: 2,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 3,
          name: 'Instance 3',
          application: {
            id: 3,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 4,
          name: 'Instance 4',
          application: {
            id: 4,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 5,
          name: 'Instance 5',
          application: {
            id: 5,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 6,
          name: 'Instance 6',
          application: {
            id: 6,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 7,
          name: 'Instance 7',
          application: {
            id: 7,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 8,
          name: 'Instance 8',
          application: {
            id: 8,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 9,
          name: 'Instance 9',
          application: {
            id: 9,
            name: 'APP - xyz.exemple1',
          },
        },
        {
          id: 10,
          name: 'Instance 10',
          application: {
            id: 10,
            name: 'APP - xyz.exemple1',
          },
        },
      ],
    },
  ];

  getServers(): Observable<Server[]> {
    return of(this.servers);
  }
}
