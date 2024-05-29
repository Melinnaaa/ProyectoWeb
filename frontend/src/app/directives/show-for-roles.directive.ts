import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[akoShowForRoles]'
})
export class ShowForRolesDirective implements OnInit, OnDestroy {
  @Input('akoShowForRoles') allowedRoles: number[] = [];
  private roleSubscription: Subscription | null = null;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    console.log('ShowForRolesDirective ngOnInit');
    this.roleSubscription = this.authService.roleChanges.subscribe(() => {
      this.updateView();
    });
    this.updateView();
  }

  ngOnDestroy(): void {
    console.log('ShowForRolesDirective ngOnDestroy');
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

  private updateView(): void {
    this.viewContainer.clear(); // Limpia la vista antes de crear una nueva
    try {
      const userRole = this.authService.getRole();
      console.log('User Role:', userRole);
      console.log('Allowed Roles:', this.allowedRoles);
      if (this.authService.isLoggedIn() && this.allowedRoles.includes(userRole)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.log('View created');
      } else {
        console.log('View not created');
      }
    } catch (error) {
      console.error('Error updating view:', error);
    }
  }
}
