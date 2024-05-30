"use client";

import { useState } from 'react';
import { readStreamableValue } from 'ai/rsc';
import { getWeather } from './streaming.action';

export default function StreamingClient() {
  const [weather, setWeather] = useState(null);

  return (
    <div>
      <button
        onClick={async () => {
          const weatherUI = await getWeather();
          setWeather(weatherUI);
        }}
      >
        What is the weather?
      </button>

      {weather}
    </div>
  );
}