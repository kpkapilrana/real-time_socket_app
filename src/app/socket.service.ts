import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private isUpdate=new BehaviorSubject(false);
  public isUpdate$=this.isUpdate.asObservable();
  constructor(
    private socket:Socket
  ) { }

  sendMessage(){
      this.socket.emit('add');
  }

  receiveMsg(): Observable<boolean>{

      return new Observable(observer => {
          this.socket.on('documents', (data) =>{
            observer.next(data);
            // this.isUpdate.next(data);
          });
          return () =>{
            this.socket.disconnect();
          }
      })
  }
}
