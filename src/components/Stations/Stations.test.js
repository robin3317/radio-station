/* eslint-disable array-callback-return */
import { render, screen } from '@testing-library/react';
import Stations from './Stations';
import DB from '../../DB.json';

describe('Stations component', () => {
  test('renders stations list', () => {
    render(<Stations />);

    DB.data.map((station) => {
      const stationNameElement = screen.getByText(station.channelName, {
        exact: false,
      });
      expect(stationNameElement).toBeInTheDocument();
    });
  });

  test('show control panel when click on the station', () => {});
});
