import { useEffect, useState } from 'react';
import MissionPanel from './components/MissionPanel';
import connectionObservable from './services/ConnectionProvider';

function Mission() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const subscription = connectionObservable.subscribe((x) => {
      if (x.split(',').length < 14) {
        setMessage((m) => m.concat(x).concat('\n'));
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const clear = () => setMessage(() => '');

  return (
    <MissionPanel
      missionName={`Flight Test ${new Date().toLocaleDateString('en-US')}`}
      rocketType="RUD Rocket"
      motorType="C CLASS (FLYWHEEL SUB)"
      avionicType="WROOM ESP32"
      message={message}
      clearHandle={clear}
    />
  );
}

export default Mission;
