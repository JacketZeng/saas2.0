import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(private ngbModal: NgbModal, private toastr: ToastrService) { }

  alert(message: string) {
    this.ngbModal.open(message);
  }

  toolError(message: string, title?: string, options?: any) {
    this.toastr.error(message, title, options);
  }
  toolSucc(message: string, title?: string, options?: any) {
    this.toastr.success(message, title, options);
  }

}
