import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { GameListComponentComponent } from './components/game-list-component/game-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { RoutingEnum } from './class/Routing-Enum';
import { LoginComponent } from './components/login/login.component';
import { RouteGuard } from './class/RouteGuard';

const heroesRoutes: Routes = [
    {path: RoutingEnum.login, component: LoginComponent},
    {path: RoutingEnum.home, component: HomeComponentComponent, canActivate:[RouteGuard]},
    {path: RoutingEnum.lista, component: GameListComponentComponent, canActivate:[RouteGuard]},
    {path: RoutingEnum.dettaglio, component: GameDetailComponentComponent, canActivate:[RouteGuard]},
    {path: RoutingEnum.modifica, component: EditGameComponentComponent, canActivate:[RouteGuard]},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({

    imports: [
        RouterModule.forRoot(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }