import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './core/guard/login.guard';
import { LayoutComponent } from './feature/layout/layout.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('../app/feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'inicio',
    canActivate: [loginGuard],
    component: LayoutComponent,
    loadChildren: () => import('../app/feature/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
