import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {ChatService} from "../../sevices/chat.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {BaseKeyboardComponent} from "../base-keyboard.component";

@UntilDestroy()
@Component({
  selector: 'app-custom-keyboard',
  templateUrl: './custom-keyboard.component.html',
  styleUrls: ['./custom-keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomKeyboardComponent extends BaseKeyboardComponent {

  buttons = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['M', 'N', 'O', 'P'], ['Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X'], ['Y', 'Z'], ['_', '.', '?', '!'], ['←',
    //'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ]]

  constructor(protected chatService: ChatService) {
    super(chatService);
  }

}
