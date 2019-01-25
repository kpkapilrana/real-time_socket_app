import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'real-app';
  constructor(
    private socketService:SocketService
  ){

  }
  
  ngOnInit(){
      this.listen();
      // this.socketService.isUpdate$()
      // .subscribe(res =>{
      //     if(res){
      //       alert("Data Update received");
      //     }
      // })
  }

  add(){
        this.sendAndUpdate();
  }

  sendAndUpdate(){
        this.socketService.sendMessage();
  }

  listen(){
    this.socketService.receiveMsg()
    .subscribe(value =>{
        if(value == true){
          alert("New data Occured");
        }
    })
  }
}
