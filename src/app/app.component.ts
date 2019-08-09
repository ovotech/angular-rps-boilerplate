import { Component } from "@angular/core";
import { GameLogic, GESTURES, Gesture } from "./gameLogic.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  playerWeapon: Gesture;
  computerWeapon: string;
  result: string;
  availableWeapons = GESTURES;

  constructor(private gameLogic: GameLogic) {}

  /**
   * Sets the player-chosen weapon, randomly selects a weapon for the computer and
   * determines the winner of the rock-paper-scissors battle.
   */
  fight(weapon: Gesture) {
    this.playerWeapon = weapon;
    this.result = this.gameLogic.determineWinner(this.playerWeapon);
  }

  /**
   * Resets the game state for a new round.
   */
  resetGame() {
    this.playerWeapon = undefined;
    this.computerWeapon = undefined;
    this.result = undefined;
  }
}
