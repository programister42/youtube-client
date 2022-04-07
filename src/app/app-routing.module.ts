import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{
		path: 'main',
		loadChildren: () => import('./search/search.module').then((module) => module.SearchModule),
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
	},
	{ path: '**', component: NotFoundComponent },
	// { path: 'simple', component: SimpleRedicrectComponent },
	// {
	// 	path: 'user/:id',
	// 	component: UserPageComponent,
	// 	resolve: {
	// 		user: DataResolver
	// 	},
	// 	data: {
	// 		smth: true,
	// 	}
	// },
	// // http://localhost:4200/user/123
	//
	// { path: 'lazy-loaded', loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule) },
	//
	// {
	// 	path: 'parent',
	// 	component: TabsComponent,
	// 	children: [
	// 		{ path: '', redirectTo: 'left', pathMatch: 'full' },
	// 		{ path: 'left', component: LeftTabComponent },
	// 		{ path: 'right', component: RightTabComponent },
	// 	]
	// },
	//
	// {
	// 	path: 'admin',
	// 	component: AdminPageComponent,
	// 	canActivate: [AuthGuard],
	// 	data: {
	// 		requiredRoles: ['Admin', 'Moderator']
	// 	}
	// },
	//
	// {
	// 	path: 'another',
	// 	loadChildren: () => import('./another-module/another.module').then(m => m.AnotherModule),
	// 	canActivate: [AuthGuard],
	// 	canLoad: [LoadingGuard],
	// },
	//
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
