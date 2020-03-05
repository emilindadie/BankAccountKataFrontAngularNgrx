import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'users'},
  {path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
  {path: 'home', loadChildren: () => import('../shell/shell.module').then(m => m.ShellModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
