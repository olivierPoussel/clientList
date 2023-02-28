import './styles/app.css'
import React from 'react'
import { createRoot } from 'react-dom/client';
import ClientListPage from './Page/ClientListPage';

const container = document.getElementById('react-app');
const root = createRoot(container);
root.render(<ClientListPage />);