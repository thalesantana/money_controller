import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/indext";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false);
  }
  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
    </>
  );
} 
