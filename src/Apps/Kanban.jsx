import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/App.css"; // Corrected the CSS path
import { kanbanData } from "../data/dummy"; // Assuming kanbanData is properly imported

function ControlledBoard() {
  // Use kanbanData as the initial board state
  const [controlledBoard, setBoard] = useState(kanbanData);

  function handleCardMove(card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board
      children={controlledBoard}
      onCardDragEnd={handleCardMove}
      allowRemoveCard
      allowRenameColumn
    />
  );
}

const Kanban = () => {
  return (
    <>
      <div className="w-full h-32 bg-gray-200 rounded-md text-black flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Kanban</h2>
      </div>
      <div className="flex justify-center">
        <ControlledBoard />
      </div>
    </>
  );
};

export default Kanban;
