import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AadminLayoutComponent } from './layout/aadmin-layout/aadmin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { FrontLivreurLayoutComponent } from './layout/front-livreur-layout/front-livreur-layout.component';
import { FrontProfileLayoutComponent } from './layout/front-profile-layout/front-profile-layout.component';
import { IntroHomeComponent } from './views/front/home/intro-home/intro-home.component';
import { LoginModule } from './views/front/login/login.module';
import { LoginComponent } from './views/front/login/login/login.component';
import { RegistreComponent } from './views/front/registre/foldercomponentREGISTRE/registre/registre.component';
import { RegistreModule } from './views/front/registre/registre.module';
import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';
import { GurduserGuard } from './views/srvices/guards/gurdauser.guard';
// import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';


const routes: Routes = [
  { path: '', component: FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'aide',loadChildren:()=>import('./views/front/aide/aide.module').then(m=>m.AideModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},


    

  ] },
  { path: 'client', component: FrontProfileLayoutComponent
  ,
  canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/front/client/client.module').then(m=>m.ClientModule)},
    {path:'client',loadChildren:()=>import('./views/front/client/client.module').then(m=>m.ClientModule)},

    {path:'createcmd',loadChildren:()=>import('./views/front/create-cmd/create-cmd.module').then(m=>m.CreateCmdModule)},

    {path:'livreur',loadChildren:()=>import('./views/front/livreur/livreur.module').then(m=>m.LivreurModule)},

    {path:'panier',loadChildren:()=>import('./views/front/panier/panier.module').then(m=>m.PanierModule)},
    {path:'compte',loadChildren:()=>import('./views/front/compte/compte.module').then(m=>m.CompteModule)},
    {path:'mescommande',loadChildren:()=>import('./views/front/mescommande/mescommande.module').then(m=>m.MescommandeModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},


    
    

  ] },




  { path: 'coursier', component: FrontLivreurLayoutComponent
  // ,
  // canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/coursier/home/home.module').then(m=>m.HomeModule)},

    {path:'home',loadChildren:()=>import('./views/coursier/home/home.module').then(m=>m.HomeModule)},
    

    {path:'allcommands',loadChildren:()=>import('./views/coursier/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'missions',loadChildren:()=>import('./views/coursier/missions/missions.module').then(m=>m.MissionsModule)},
    {path:'comptelivreur',loadChildren:()=>import('./views/coursier/compte-livreur/compte-livreur.module').then(m=>m.CompteLivreurModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'offres',loadChildren:()=>import('./views/coursier/offres/offres.module').then(m=>m.OffresModule)},


    
    
    

  ] },





  { path: 'admin', component: AadminLayoutComponent ,canActivate:[GurdadminGuard], children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'livreurs',loadChildren:()=>import('./views/admin/livreurs/livreurs.module').then(m=>m.LivreursModule)},
    {path:'commands',loadChildren:()=>import('./views/admin/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'offres',loadChildren:()=>import('./views/admin/offres/offres.module').then(m=>m.OffresModule)},
    {path:'moncompte',loadChildren:()=>import('./views/admin/moncompte/moncompte.module').then(m=>m.MoncompteModule)},
    {path:'client',loadChildren:()=>import('./views/admin/clientt/clientt.module').then(m=>m.ClienttModule)},
    {path:'details/:id',loadChildren:()=>import('./views/admin/details/details.module').then(m=>m.DetailsModule)},
    {path:'commands/open',loadChildren:()=>import('./views/admin/opencmd/opencmd.module').then(m=>m.OpencmdModule)},
    {path:'commands/close',loadChildren:()=>import('./views/admin/closecmdd/closecmdd.module').then(m=>m.ClosecmddModule)},
    {path:'commands/livre',loadChildren:()=>import('./views/admin/livre/livre.module').then(m=>m.LivreModule)},
    {path:'commands/attent',loadChildren:()=>import('./views/admin/attent/attent.module').then(m=>m.AttentModule)},
    {path:'messages',loadChildren:()=>import('./views/admin/messages/messages.module').then(m=>m.MessagesModule)},




  ]},
  
 
  {path:'intro',component:IntroHomeComponent},

  {path:'login',component:LoginComponent},
  {path:'registre',component:RegistreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
