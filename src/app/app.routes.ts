import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { LobbyComponent } from './core/components/lobby.component';
import { AnimationComponent } from './core/components/animation.component';
import { AuthGuard }                from './core/guards/auth-guard.service';

export const ROUTES: Routes = [
    {path: '', component: LobbyComponent},
    {path: 'slots', component: LobbyComponent}
];
