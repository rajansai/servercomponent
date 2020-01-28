import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [{type:'server', name:'Testserver', content:'Just a test'}];

 onServerAdded(serverData:{serverName:string, serverContent:string}) {
  this.severElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  )};

 
}

onBlueprintAdded() {
  this.severElements.push({
    type: 'blueprint',
    name: this.newServerName,
    content: this.newServerContent
  )};

}

}
