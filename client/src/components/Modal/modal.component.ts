import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

export class ModalComponent {
  @Input() isModal: boolean;
  @Input() message: string;
  @Output() closed = new EventEmitter<boolean>();

  close() {
    this.closed.emit(false);
  }
}
