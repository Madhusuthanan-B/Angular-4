import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';
import { FocusSetterRoutes } from './focus-setter/index';

const appRoutes: Routes = [...HomeRoutes, ...AboutRoutes, ...FocusSetterRoutes];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

