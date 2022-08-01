import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'javaquiz',
    loadChildren: () => import('./javaquiz/javaquiz.module').then( m => m.JavaquizPageModule)
  },
  {
    path: 'cplusquiz',
    loadChildren: () => import('./cplusquiz/cplusquiz.module').then( m => m.CplusquizPageModule)
  },
  {
    path: 'pythonquiz',
    loadChildren: () => import('./pythonquiz/pythonquiz.module').then( m => m.PythonquizPageModule)
  },
  {
    path: 'htmlquiz',
    loadChildren: () => import('./htmlquiz/htmlquiz.module').then( m => m.HtmlquizPageModule)
  },
  {
    path: 'phpquiz',
    loadChildren: () => import('./phpquiz/phpquiz.module').then( m => m.PhpquizPageModule)
  },
  {
    path: 'csharpquiz',
    loadChildren: () => import('./csharpquiz/csharpquiz.module').then( m => m.CsharpquizPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
