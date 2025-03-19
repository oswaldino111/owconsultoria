import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import Curriculo from './curriculo/main';
import Projetos from './projetos/main';
import Exemplos from './exemplos/main';
import Jogos from './jogos/main';

export default function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div className="container">Carregando...</div>}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/curriculo" element={<Curriculo />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/codigos" element={<Exemplos />} />
                    <Route path="/jogos" element={<Jogos />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}