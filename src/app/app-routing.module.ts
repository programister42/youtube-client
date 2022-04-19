import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'youtube', pathMatch: 'full' },
	{
		path: 'youtube',
		loadChildren: () =>
			import('./youtube/youtube.module').then((module) => module.YoutubeModule),
		canLoad: [AuthGuard],
		canActivate: [AuthGuard],
	},
	{
		path: 'login',
		loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
	},
	{ path: '**', component: NotFoundComponent },
	//TODO: move routing to core module
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
