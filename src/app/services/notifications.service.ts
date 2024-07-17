import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }
  showSuccess(body: string, title?: string) {
    this.toastr.success(body, title);
  }
  showWarnings(body: string, title?: string) {
    this.toastr.warning(body, title);
  }
  showError(body: string, title?: string) {
    this.toastr.error(body, title);
  }
}
