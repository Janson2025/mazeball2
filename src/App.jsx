import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './context/Customization'

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas >
          <color attach="background" args={['#213547']} />
          <fog attach="fog" args={['213547', 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
      </CustomizationProvider>
  );
}

export default App
