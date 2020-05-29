import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class PingService {

  constructor(private socket: Socket) { }

  sendPing(date: Date) {
    this.socket.emit('events', date);
  }

  getPong() {

    return this.socket.fromEvent('events');
  }
}
