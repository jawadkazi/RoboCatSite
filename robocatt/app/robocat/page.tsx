import { Metadata } from 'next';
import RoboCatClient from './RoboCatClient';

export const metadata: Metadata = {
  title: 'RoboCat - Dell Children\'s Hospital',
  description: 'A collaborative project by Dell friends to bring joy and comfort to children at Dell Children\'s Hospital through technology and creativity.',
};

export default function RoboCatPage() {
  return <RoboCatClient />;
}