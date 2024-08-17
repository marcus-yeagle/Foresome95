interface Player {
  name: string;
  indx: number;
  tee: string;
}

interface Bettor {
  name: string;
  action: number;
  side: string;
  wager: number;
  toWin: number;
}

interface Side {
  id: string;
  date: string;
  betType: string;
  players: Player[];
  bettors: Bettor[];
  prop?: string;
  score?: number;
  sides: any[];
  outcome: string;
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

export async function postSide(newSide: Side) {
  const response = await fetch('/api/sides', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSide),
  });

  if (!response.ok) {
    alert('Network response was not ok');
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}
