import { Component } from "@angular/core";
import { GameLogic, GESTURES, Gesture } from "./gameLogic.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  playerGesture: Gesture;
  computerGesture: string;
  result: string;
  availableGestures = GESTURES;

  constructor(private gameLogic: GameLogic) {}

  /**
   * Sets the player-chosen gesture, randomly selects a gesture for the computer and
   * determines the winner of the rock-paper-scissors battle.
   */
  fight(gesture: Gesture) {
    this.playerGesture = gesture;
    this.result = this.gameLogic.determineWinner(this.playerGesture);
  }

  /**
   * Resets the game state for a new round.
   */
  resetGame() {
    this.playerGesture = undefined;
    this.computerGesture = undefined;
    this.result = undefined;
  }
}
