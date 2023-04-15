import React from "react";
import useBatteryStatus from "./useBatteryStatus"; // Replace with the actual path to your useBatteryStatus hook

const MyComponent = () => {
  const batteryStatus = useBatteryStatus();

  return (
    <div>
      <h1>Battery Status</h1>
      <p>Level: {batteryStatus.level}</p>
      <p>Charging: {batteryStatus.charging ? "Yes" : "No"}</p>
    </div>
  );
};

export default MyComponent;
