import type { CardDetails } from "./types/CardDetails";

const valueOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
export type CompareResult = "player1" | "player2" | "draw";

export const compareCards = (player1Card: CardDetails, player2Card: CardDetails): CompareResult => {
  const player1CardValue = valueOrder.indexOf(player1Card.value);
  const player2CardValue = valueOrder.indexOf(player2Card.value);
  if (player1CardValue > player2CardValue) {
    return "player1";
  } else if (player1CardValue < player2CardValue) {
    return "player2";
  } else {
    return "draw";
  }
}