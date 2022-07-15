import {Component, HostListener} from '@angular/core';
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  buttons = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['M', 'N', 'O', 'P'], ['Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X'], ['Y', 'Z'], ['_', '.', '?', '!'], ['←',
    //'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ]]
  buttonIndex: number = 0;
  selectedCharIndex?: number = undefined;
  MAX_TIME_LEFT = 1;
  timeLeft = this.MAX_TIME_LEFT;
  interval?: number;
  data = {command: 'confirm'};

  text = ''

  lastCharButtonIndex = () => this.buttons[this.buttonIndex].length - 1

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // this.keyEventWithTimer(event);
    this.keyEventWithoutTimer(event);
  }

  constructor(private chatService: ChatService) {
    // todo: unsubscribe
    this.chatService.getMessage().subscribe((data: any) => {
      this.updateDataWithoutTimer(data);
      // this.updateData(data);
    })
  }

  // all chars in button, after it can go to next button
  keyEventWithoutTimer(event: KeyboardEvent) {
    if (event.code === 'ArrowRight') {
      this.updateDataWithoutTimer({command: 'next'})
    } else if (event.code === 'Enter') {
      this.updateDataWithoutTimer({command: 'confirm'})
    }
  }

  // after time left select char
  keyEventWithTimer(event: KeyboardEvent) {
    if (this.interval) {
      this.resetTimer();
    }
    if (event.code === 'ArrowRight') {
      this.updateDataWithTimer({command: 'next'})
    } else if (event.code === 'Enter') {
      this.updateDataWithTimer({command: 'confirm'})
      this.startTimer()
    }
  }

  updateDataWithoutTimer(data: { command: string },) {
    if (data.command === 'confirm') {
      // index is defined
      if (typeof this.selectedCharIndex === 'number') {
        // user wants to select this character
        const result = this.buttons[this.buttonIndex][this.selectedCharIndex];
        this.addCharacter(result)
        // todo: next version
        this.selectedCharIndex = undefined;
      } else {
        this.selectedCharIndex = 0;
      }
    } else if (data.command === 'next') {
      if (typeof this.selectedCharIndex === 'number') {
        if (this.selectedCharIndex < this.lastCharButtonIndex()) {
          this.selectedCharIndex++;
        } else {
          this.selectedCharIndex = undefined;
        }
      } else {
        this.nextButton();
      }

    }
  }

  updateDataWithTimer(data: { command: string },) {
    if (data.command === 'confirm') {
      // index is defined
      if (typeof this.selectedCharIndex === 'number') {
        // user wants to select this character
        if (this.timeLeft > 0) {
          if (this.selectedCharIndex < this.lastCharButtonIndex()) {
            this.selectedCharIndex++;
          } else {
            this.selectedCharIndex = 0;
          }
        }
        // index is not defined, user wants to select button
      } else {
        this.selectedCharIndex = 0;
      }
    } else if (data.command === 'next') {
      this.selectedCharIndex = undefined;
      this.nextButton();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          if (this.data.command === 'confirm' && typeof this.selectedCharIndex === 'number') {
            const result = this.buttons[this.buttonIndex][this.selectedCharIndex];
            this.addCharacter(result)
            // todo: next version
            // this.selectedCharIndex = undefined;
            // this.resetTimer();
          }
          this.timeLeft = this.MAX_TIME_LEFT;
        }
      }, 1000
    )
  }

  addCharacter(character: string) {
    if (!character) {
      console.error('Character is not defined.')
      return;
    }
    if (character === '←') {
      this.text = this.text.slice(0, this.text.length - 1);
    // } else if (character === '_') {
    //   this.text += '&nbsp;';
    } else {
      this.text += character;
    }
  }

  nextButton() {
    if (this.buttonIndex < 8) {
      this.buttonIndex++;
    } else {
      this.buttonIndex = 0;
    }
  }

  private resetTimer(){
    this.timeLeft = this.MAX_TIME_LEFT;
    clearInterval(this.interval);
  }


}
