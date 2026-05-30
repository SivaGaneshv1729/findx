import { API_BASE_URL } from './config';

export const getPlots = async (token = null) => {
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/plots`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch plots');
  }

  return response.json();
};

export const createPlot = async (plotData, token) => {
  const response = await fetch(`${API_BASE_URL}/plots`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plotData),
  });

  if (!response.ok) {
    throw new Error('Failed to create plot');
  }

  return response.json();
};

export const verifyPlot = async (plotId, token) => {
  const response = await fetch(`${API_BASE_URL}/plots/${plotId}/verify`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to verify plot');
  }

  return response.json();
};

export const deletePlot = async (plotId, token) => {
  const response = await fetch(`${API_BASE_URL}/plots/${plotId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete plot');
  }

  return response.json(); // Note: some APIs might return 204 No Content without body
};
