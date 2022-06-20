import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server } from 'ws';
  
  @WebSocketGateway(8000)
  export class TradeGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    onEvent(client: any, data: any): Observable<WsResponse<number>> {
      console.log('1111111111')
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  }