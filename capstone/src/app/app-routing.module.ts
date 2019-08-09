import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolveService } from './resolver/data-resolve.service';
import { AccountsResolveService } from './resolver/accounts-resolve.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    resolve: {
      items: DataResolveService
    },
    pathMatch: 'full'
  },
  {
    path: 'home',
    resolve: {
      items: DataResolveService
    },
    loadChildren: './home/home.module#HomePageModule'
  },

  { path: 'accounts',
    resolve: {
      users: AccountsResolveService
     }, 
    loadChildren: './accounts/accounts.module#AccountsPageModule' },

  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details', loadChildren: './item-details/item-details.module#ItemDetailsPageModule' },
  { path: 'details/:id', loadChildren: './item-details/item-details.module#ItemDetailsPageModule' },
  { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule' },
  
  { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsPageModule' },
  { path: 'user-details/:id', loadChildren: './user-details/user-details.module#UserDetailsPageModule' },
  { path: 'accountsettings', loadChildren: './accountsettings/accountsettings.module#AccountsettingsPageModule' },
  { path: 'itemloading', loadChildren: './itemloading/itemloading.module#ItemloadingPageModule' },
  
  { path: 'refreshmedia', loadChildren: './refreshmedia/refreshmedia.module#RefreshmediaPageModule' },
  { path: 'refreshmedia/:id', loadChildren: './refreshmedia/refreshmedia.module#RefreshmediaPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
