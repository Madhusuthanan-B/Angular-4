import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';
import { FocusSetterRoutes } from './modules/index';

const appRoutes: Routes = [...HomeRoutes, ...AboutRoutes, ...FocusSetterRoutes];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

