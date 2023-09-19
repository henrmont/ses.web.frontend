import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private snackbar: MatSnackBar,
    private responsive: BreakpointObserver
  ) { }

  showMessage(message: any) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  setResolution(obj: Device) {
    obj.isHandset = this.responsive.isMatched(Breakpoints.Handset)
    obj.isHandsetLandscape = this.responsive.isMatched(Breakpoints.HandsetLandscape)
    obj.isHandsetPortrait = this.responsive.isMatched(Breakpoints.HandsetPortrait)
    obj.isTablet = this.responsive.isMatched(Breakpoints.Tablet)
    obj.isWeb = this.responsive.isMatched(Breakpoints.Web)
  }

  logout() {
    window.localStorage.clear()
    window.location.reload()
  }

}
