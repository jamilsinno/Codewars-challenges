function Hero (name) {
    // add default values here
    let hero = {
      name: name || "Hero",
      position: "00",
      health: 100,
      damage: 5,
      experience: 0,
    }
    return hero
  }