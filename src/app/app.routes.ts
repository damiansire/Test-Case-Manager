import { Routes } from '@angular/router';
import { TestsVerificationComponent } from './pages/tests-verification/tests-verification.component';
import { DataImporterComponent } from './pages/data-importer/data-importer.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/importer",
        pathMatch: 'full' 
    },
    {
        path: "tests-verification",
        component: TestsVerificationComponent
    },
    {
        path: "importer",
        component: DataImporterComponent
    }
];
