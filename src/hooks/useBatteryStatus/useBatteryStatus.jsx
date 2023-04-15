import { useState, useEffect } from "react";

const useBatteryStatus = () => {
  const [batteryStatus, setBatteryStatus] = useState({
    level: 1,
    charging: false,
  });

  useEffect(() => {
    const handleBatteryChange = (event) => {
      const { level, charging } = event.target;
      setBatteryStatus({
        level,
        charging,
      });
    };

    navigator.getBattery().then((battery) => {
      setBatteryStatus({
        level: battery.level,
        charging: battery.charging,
      });

      battery.addEventListener("levelchange", handleBatteryChange);
      battery.addEventListener("chargingchange", handleBatteryChange);

      return () => {
        battery.removeEventListener("levelchange", handleBatteryChange);
        battery.removeEventListener("chargingchange", handleBatteryChange);
      };
    });
  }, []);

  return batteryStatus;
};

export default useBatteryStatus;
