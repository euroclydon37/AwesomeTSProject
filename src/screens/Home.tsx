import { useQuery } from '@apollo/client';
import React from 'react';
import { Ant } from '../components/Ant';
import { Page } from '../components/Page';
import { ALL_ANTS } from '../constants/queries';
import { GetAllAnts } from '../constants/__generated__/GetAllAnts';

export function HomeScreen() {
  const { data } = useQuery<GetAllAnts>(ALL_ANTS);

  if (data) {
    console.log(data);
  }

  return (
    <Page title="Home">{data?.ants.map(ant => ant && <Ant ant={ant} />)}</Page>
  );
}
