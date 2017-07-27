import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes, AboutRoutes, FocusDemoRoutes, ModalRoutes } from './pages/index';

const appRoutes: Routes = [
    ...HomeRoutes, ...AboutRoutes,
    ...FocusDemoRoutes, ...ModalRoutes];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

