import React  from 'react';
import { SimpleForm } from '../../components/SimpleForm';

export const PlaygroundScreen: React.FC = () => {
  return <SimpleForm onSubmit={data => console.log(data)} />
}
