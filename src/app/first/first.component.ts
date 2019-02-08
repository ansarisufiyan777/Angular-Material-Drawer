import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ConfigService } from '../utils/config.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  public navData: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(public configService: ConfigService) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code'; //set only one mode
    this.configService.onJsonUpdate.subscribe(res => {
      this.navData = res;
    })

  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  getData($event) {
    console.log($event)
    this.configService.updateJSON($event);
  }
}