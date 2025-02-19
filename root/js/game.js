// Fonction pour infliger des dégâts à une case (playerId) en cas de clic
function takeDamage(playerId) {
    const playerBar = document.getElementById(`hp-${playerId}`);
    let currentHealth = playerBar.value;

    // Infliger 10 dégâts à la case
    currentHealth -= 10;

    // Si les points de vie tombent à 0 ou moins, la case est morte
    if (currentHealth <= 0) {
        currentHealth = 0;
        console.log(`${playerId} est mort !`);
    }

    // Mettre à jour la barre de progression
    updateHealthBar(playerId, currentHealth);
}

// Fonction pour mettre à jour la barre de vie (comme dans l'exemple précédent)
function updateHealthBar(playerId, newValue) {
    const playerBar = document.getElementById(`hp-${playerId}`);
    playerBar.value = newValue;

    // Change la couleur de la barre en fonction de la valeur
    if (newValue > 50) {
        playerBar.style.backgroundColor = "green";
    } else if (newValue > 25) {
        playerBar.style.backgroundColor = "yellow";
    } else {
        playerBar.style.backgroundColor = "red";
    }
}