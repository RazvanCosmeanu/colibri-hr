import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import mockData from '../../../mockData';
import StaffList from './StaffList';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

jest.mock('../../../lib/http', () => {
  return {
    get: () => Promise.resolve(mockData),
  };
});

afterEach(jest.clearAllMocks);

describe('StaffList', () => {
  beforeEach(() =>
    act(async () => {
      const history = createMemoryHistory();

      render(
        <Router location={history.location} navigator={history}>
          <StaffList />
        </Router>,
      );
    }),
  );

  describe('Render', () => {
    it('Should render the staff-list section', async () => {
      await waitFor(() =>
        expect(screen.getByTestId('staff-list')).toBeVisible(),
      );
    });

    it('Should render the correct entries in the table', async () => {
      await waitFor(() =>
        expect(screen.getByText(mockData[0].first_name)).toBeVisible(),
      );
    });
  });

  describe('Search', () => {
    it('Should be able to show my search results', async () => {
      await waitFor(() =>
        expect(screen.getByText(mockData[0].first_name)).toBeVisible(),
      );

      const input = screen.getByTestId('input-element');

      act(() => {
        fireEvent.change(input, { target: { value: mockData[4].first_name } });
      });

      await waitFor(() => {
        expect(screen.getByText(mockData[4].first_name)).toBeVisible();
        expect(() => screen.getByText(mockData[0].first_name)).toThrow();
      });
    });
  });
});
