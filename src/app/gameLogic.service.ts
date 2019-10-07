import { Injectable } from "@angular/core";

export type Gesture = "Rock" | "Paper" | "Scissors";
export const GESTURES: Array<Gesture> = ["Rock", "Paper", "Scissors"];
export type Result = "Player" | "Computer" | "Draw";

@Injectable({
  providedIn: "root"
})
export class GameLogic {
  constructor() {}

  generateComputerGesture(): Gesture {
    // TODO: Implement selection of computer gesture
    return "Rock";
  }

  determineWinner(playerGesture: Gesture): Result {
    // TODO: add the required code to determine the winner here.
    const computerGesture = this.generateComputerGesture();
    return "Player";
  }
}
