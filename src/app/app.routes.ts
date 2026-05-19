import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'viajes',
        loadChildren: () =>
            import('./features/viajes/routes')
                .then(r => r.VIAJES_ROUTES)
    },
    {
        path: 'movimiento_regular',
        loadChildren: () =>
            import('./features/movregular/routes')
                .then(r => r.MOVREGULAR_ROUTES)
    }
];
