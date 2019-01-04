import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
  {path: '', component: FirstComponent, pathMatch: 'full'},
  {path: 'devfestfl', children: [
    {path: 'sessions', children: [
      {path: 'my-ally-cli', component: FirstComponent},
      {path: 'become-angular-tailer', component: FirstComponent},
      {path: 'material-design', component: FirstComponent},
      {path: 'what-up-web', component: FirstComponent}
    ]},
    {path: 'speakers', children: [
      {path: 'michael-prentice', children: [
        {path: 'material-design', component: FirstComponent}
      ]},
      {path: 'stephen-fluin', children: [
        {path: 'what-up-web', component: FirstComponent}
      ]},
      {path: 'mike-brocchi', children: [
        {path: 'my-ally-cli', component: FirstComponent},
        {path: 'become-angular-tailer', component: FirstComponent}
      ]},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
