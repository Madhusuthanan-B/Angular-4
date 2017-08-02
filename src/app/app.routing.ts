import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes, AboutRoutes, FocusDemoRoutes, GraphsDemoRoutes } from './pages/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...FocusDemoRoutes,
    ...GraphsDemoRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

