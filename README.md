# RUD Rocket

Model rocket flight computer and telemetry ground station. Provides a real-time dashboard for monitoring avionics data during flight tests.

## Features

- **Live Telemetry**: WebSocket + WebSerial connectivity to onboard avionics (ESP32)
- **Flight Data Visualization**: Altitude, velocity, acceleration charts (Recharts)
- **GPS Tracking**: Integrated Leaflet map for real-time position tracking
- **3D Rocket Visualization**: Three.js/React-Three-Fiber model rendering
- **Mission Log**: Real-time message stream from avionics with regex parsing
- **Weather Overlay**: Live wind and temperature data
- **Flight Phases**: Progress bar tracking mission stages (pre-launch, ascent, descent, recovery)

## Tech Stack

- **Framework**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit, RxJS
- **UI**: Rebass, Emotion, Linaria (CSS-in-JS)
- **Charts**: Recharts
- **Maps**: Leaflet / react-leaflet
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Serial**: Web Serial API via @rxjs-ninja/rxjs-utility
- **Linting**: ESLint with Airbnb config

## Architecture

```
src/
├── components/     -- Reusable UI widgets (CameraCard, CommandInput, Timer, etc.)
├── interfaces/     -- TypeScript interfaces (IDataVisual, IPosition, IWeather)
├── redux/          -- Redux store, reducer, hooks
├── services/       -- RxJS observables (Connection, Location, Message, Time, Weather)
├── style-components/ -- Styled UI primitives (Badge, Button, Card, Clock, etc.)
├── App.tsx         -- Main dashboard layout
├── Chart.tsx       -- Flight data chart components
├── Map.tsx         -- GPS map component
├── Mission.tsx     -- Mission log panel
├── Weather.tsx     -- Weather data display
└── StatusLabel.tsx / ConnectionLabel.tsx -- Telemetry status indicators
```

## Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Configuration

The avionics WebSocket URL defaults to `ws://127.0.0.1:81` and can be configured via `localStorage` or the Redux store.

## Note

Designed for use with ESP32-based flight computers communicating over WebSocket (WiFi) or Web Serial (USB). Tested with C-class motors and flywheel-based recovery systems.
