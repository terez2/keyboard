import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ChatService} from "../../sevices/chat.service";
import {BaseKeyboardComponent} from "../base-keyboard.component";

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialComponent extends BaseKeyboardComponent {

  constructor(protected chatService: ChatService) {
    super(chatService);
  }

}
