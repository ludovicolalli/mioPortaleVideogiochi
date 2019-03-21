import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { GameListComponentComponent } from './components/game-list-component/game-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { RoutingEnum } from './class/Routing-Enum';
import { LoginComponent } from './components/login/login.component';

const heroesRoutes: Routes = [
    {path: RoutingEnum.login, component: LoginComponent},
    {path: RoutingEnum.home, component: HomeComponentComponent},
    {path: RoutingEnum.lista, component: GameListComponentComponent},
    {path: RoutingEnum.dettaglio, component: GameDetailComponentComponent},
    {path: RoutingEnum.modifica, component: EditGameComponentComponent},
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