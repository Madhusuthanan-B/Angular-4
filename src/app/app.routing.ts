import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes, AboutRoutes, FocusSetterRoutes, ModalRoutes } from './pages/index';

const appRoutes: Routes = [
    ...HomeRoutes, ...AboutRoutes,
    ...FocusSetterRoutes, ...ModalRoutes];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

