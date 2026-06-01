import { API_BASE_URL } from './config';

const fakePlots = [
  {
    id: 1,
    title: 'Premium Corner Plot',
    price: '₹45,00,000',
    lat: 17.0425,
    lng: 81.8228,
    areaSqYds: 200,
    facing: 'East',
    status: 'For Sale',
    location: 'Diwancheruvu, Rajahmundry',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 2,
    title: 'Highway Facing Land',
    price: '₹1,20,00,000',
    lat: 17.0500,
    lng: 81.8300,
    areaSqYds: 500,
    facing: 'North',
    status: 'For Sale',
    location: 'Lalacheruvu, Rajahmundry',
    images: [
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 3,
    title: 'Residential Plot near School',
    price: '₹25,00,000',
    lat: 17.0350,
    lng: 81.8150,
    areaSqYds: 150,
    facing: 'West',
    status: 'For Sale',
    location: 'Morampudi, Rajahmundry',
    images: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 4,
    title: 'Commercial Land near Airport',
    price: '₹85,00,000',
    lat: 17.0800,
    lng: 81.8500,
    areaSqYds: 300,
    facing: 'South',
    status: 'For Sale',
    location: 'Madhurapudi, Rajahmundry',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 5,
    title: 'Gated Community Plot',
    price: '₹35,00,000',
    lat: 17.0450,
    lng: 81.8200,
    areaSqYds: 180,
    facing: 'East',
    status: 'For Sale',
    location: 'Vemagiri, Rajahmundry',
    images: [
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop',
    ]
  }
];

export const getPlots = async (token = null) => {
  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/plots`, {
      headers,
    });

    if (!response.ok) {
      console.warn('Failed to fetch plots, returning fake data instead.');
      return fakePlots;
    }

    const data = await response.json();
    return data.length > 0 ? data : fakePlots;
  } catch (err) {
    console.warn('API error, returning fake data instead.', err);
    return fakePlots;
  }
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
