interface Player {
  name: string;
  indx: number;
  tee: string;
}

interface Side {
  id: number;
  date: string;
  betType: string;
  players: Player[];
}

interface SidesResponse {
  sides: Side[];
}

export async function getSides() {
  const response = await fetch('/api/sides', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    alert('Network response was not ok');
    throw new Error('Network response was not ok');
  }

  console.log(response);
  const data = await response.json();
  return data;
}
