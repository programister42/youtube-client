import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: AuthPageComponent }];

@NgModule({
	declarations: [AuthCardComponent, AuthPageComponent, AuthFormComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AuthModule {}
