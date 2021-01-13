import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChannelComponent } from './channel/channel.component';
import { RoleComponent } from './role/role.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', 
    component: SidebarComponent,
    children: [
      { path: 'channel', component: ChannelComponent },
      { path: 'role', component: RoleComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]},
  {
    path: 'dashboard', 
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
