import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {path: '', component: ShellComponent, children: [
    {path: 'accounts', loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
