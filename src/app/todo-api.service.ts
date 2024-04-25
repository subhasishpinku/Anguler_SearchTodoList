import { Injectable } from '@angular/core';
// Import HttClient :
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http:HttpClient) { }
  private Base_Url:any='https://todolist-api.glitch.me';
  getAllTods(){
    return this.http.get(`${this.Base_Url}/api/todos`);
  }
  getDate(){
    let dt=new Date();
    let d=dt.getDate();
    let m=dt.getMonth()+1;
    let y=dt.getFullYear();
    let h=dt.getHours();
    let min=dt.getMinutes();
    let sec=dt.getSeconds();
    let ft = '';
    if(h>=12){
      h -= 12;
      ft='PM'
    }else{
      ft='AM'
    }
    let currentTimeStamp=d+'-'+m+'-'+y+' '+h+':'+min+':'+sec+ ''+ft;
    return currentTimeStamp;
  }
  AddNewTodo(data:any){
    return this.http.post(`${this.Base_Url}/api/todo`,data);
  }
  //Update todo in Database
  updateTodo(id:any,data:any){
    return this.http.put(`${this.Base_Url}/api/todo/`+id,data);
  }
  // Deleting Todo From Data
  TodoDelete(id:any){
    return this.http.delete(`${this.Base_Url}/api/todo/`+id);
  }

 
}
