import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { Server } from 'ws';
import { TradeService } from './trade.service';
  
  @WebSocketGateway(8000)
  export class TradeGateway {
    constructor(private readonly tradeService: TradeService) {}
    
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    onEvent(client: any, data: any) {
      console.log('1111111111', client, data)
      return this.tradeService.findByClient(client);
    }
  }