import { Injectable, EventEmitter } from '@angular/core';
import { CONNREFUSED } from 'dns';
let content = require('../../drawer-config.json');
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public onJsonUpdate = new EventEmitter();
  constructor() { 
    this.updateJSON(content);
  }
  public updateJSON(json:any){
    content = json;
    this.onJsonUpdate.emit(content);
  }
}
