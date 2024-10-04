import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './customer/signup/signup.component';
import { NotFoundError } from 'rxjs';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: HomeComponent },

  { path: 'my-profile', component: UserProfileComponent },

  { path: 'contact-us', component: ContactUsComponent },

  //admin routes
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminLoginComponent,
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'admin-dashbord',
        component: AdminDashbordComponent,
      },
      {
        path: 'admin/user',
        component: UserCrudComponent,
      },
      { path: 'admin/product', component: ProductComponent },
    ],
  },
  {
    path:'',children:[{
      path:'signin',component:SignupComponent},

      {path:'signup',component:SignupComponent},
    ]
  },
  {
    path:'**',component:PageNotFoundComponent
  }

];
