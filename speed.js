function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Kmph = 1;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      console.log("You're driving within the speed limit. Keep it up!");
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / 5);
  
      if (demeritPoints >= maxDemeritPoints) {
        console.log("License suspended! You have too many demerit points.");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Test the speedDetector function with different speeds
  speedDetector(65); // You're driving within the speed limit. Keep it up!
  speedDetector(80); // Points: 2
  speedDetector(160); // License suspended! You have too many demerit points.
  