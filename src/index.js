import _ from 'lodash';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css';
import Container from './components/Container';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <Container />
);