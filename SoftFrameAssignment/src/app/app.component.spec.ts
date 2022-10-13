import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

describe('AppComponent', () => {
  const routes: Routes = [
    {path: 'login', component: LoginComponent}, 
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]}, 
    {path: 'group', component: GroupComponent, canActivate: [AuthGuard]}, 
    {path: 'channel', component: ChannelComponent, canActivate: [AuthGuard]}, 
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        ChatComponent,
        GroupComponent,
        ChannelComponent,
        RegisterComponent
      ],
      imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SoftFrameAssignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SoftFrameAssignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SoftFrameAssignment app is running!');
  });
});
