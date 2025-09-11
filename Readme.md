# Weather App ☀️🌧️

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React%20Query-5-EF4444?logo=reactquery&logoColor=white)](https://tanstack.com/query/latest)
[![Zustand](https://img.shields.io/badge/Zustand-5-3C3C3C)](https://zustand-demo.pmnd.rs/)
[![Vitest](https://img.shields.io/badge/Vitest-3-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

A small weather app built with React + TypeScript (Vite). It shows current weather and a 5‑day forecast for the selected city. It uses OpenWeatherMap for weather data and LocationIQ for city autocomplete. Requests are cached with React Query; global state is managed with Zustand.

ℹ️ Note: if API tokens are missing, city autocomplete falls back to mock data; weather/forecast require coordinates from the API and won’t work fully.

![Preview](public/assets/images/preview.gif)

## Features 🔎

- 🔍 City search: autocomplete with debounce and selection from a list.
- 📍 Geolocation: asks for permission on search focus (wired for future scenarios).
- 🌡️ Current weather: temperature, description, visibility, wind, humidity, pressure.
- 📅 5‑day forecast: daily cards (noon UTC slice for each day).
- 🔄 Unit switch: °C/°F with instant client‑side conversion.
- 🗃️ Caching: results cached for 5 minutes to reduce requests.

## Tech Stack 🧰

- React 18, TypeScript, Vite
- @tanstack/react-query for data fetching/caching
- Zustand for global state
- Ant Design for the search autocomplete
- Axios for HTTP
- SCSS (sass-embedded) for styles
- Vitest + Testing Library + JSDOM for tests

## Quick Start 🚀

1. Install dependencies:
   - `npm install`
2. Create `.env.local` in the project root and add tokens (see Environment Variables).
3. Start dev server:
   - `npm run dev`
4. Open in browser:
   - http://localhost:5173

Recommended Node.js: 18+.

## Environment Variables ⚙️

Create `.env.local` in the project root:

```
VITE_OPENWEATHERMAP_API_TOKEN=<your_OpenWeatherMap_key>
VITE_LOCATIONIQ_TOKEN=<your_LocationIQ_key>
```

- Without `VITE_LOCATIONIQ_TOKEN`, autocomplete uses mock data and does not return coordinates — weather/forecast will be unavailable.
- Without `VITE_OPENWEATHERMAP_API_TOKEN`, weather API requests cannot be made.

## Scripts 📦

- `npm run dev`: run Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the built app locally
- `npm test`: run tests in headless mode
- `npm run test:watch`: watch mode for tests
- `npm run test:ui`: Vitest UI mode
- `npm run test:coverage`: coverage report

## Usage 🧭

- Type at least 2 characters in the search field and pick a city.
- Toggle temperature units in the header (°C / °F).
- With tokens configured, current weather and 5‑day forecast will be displayed.

## Project Structure 🗂️ (high level)

- `src/components/` — UI components (search, weather/forecast cards, temperature switch, etc.)
- `src/api/` — API layers (OpenWeatherMap, LocationIQ)
- `src/store/` — Zustand global store
- `src/mock/` — mock data (cities, weather condition variants, etc.)
- `src/util/` — utilities (string clean, temperature conversion, icon mapping)
- `public/assets/images/` — icons and images

## Implementation Details 🔧

- Weather API:
  - Current: OpenWeatherMap `/data/2.5/weather?lat={lat}&lon={lon}&appid=...`
  - Forecast: OpenWeatherMap `/data/2.5/forecast?lat={lat}&lon={lon}&appid=...`
- City search: LocationIQ `/v1/autocomplete?...` (if a token is provided).
- Units: OpenWeatherMap returns Kelvin; client converts to °C/°F.
- Caching: query keys include coordinates and type (current/forecast); stale time is 5 minutes.

## Tests 🧪

- Unit tests cover utilities and the temperature switch.
- Run: `npm test` or `npm run test:watch`.
- Coverage: `npm run test:coverage`.

## Known Limitations ⚠️

- Without API keys, autocomplete uses mocks and does not yield coordinates — weather/forecast queries won’t run.
- Icons map to OpenWeatherMap weather IDs; unknown IDs use `no-icon`.
