import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './src/routes'
import { yellow } from 'ansi-colors';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return <Routes/>
}
