import React from 'react'
import { Row } from 'react-bootstrap';

import MedicalStoreProject from './MedicalStoreProject';
import ToDoAPP from './ToDoAPP';
import TicTacToeGame from './TicTacToeGame';


export default function Projects() {
  
  return (
    <>
      <MedicalStoreProject></MedicalStoreProject>
      <ToDoAPP></ToDoAPP>
      <TicTacToeGame></TicTacToeGame>
    </>
  )
}