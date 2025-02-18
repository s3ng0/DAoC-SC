document.addEventListener("DOMContentLoaded", function () {
    const orb = document.querySelector('.orb');
    const orbRadius = orb.offsetWidth / 2;

    let orbX = window.innerWidth / 2 - orbRadius;
    let orbY = window.innerHeight / 3.5 - orbRadius;
    let velocityX = 0;
    let velocityY = 0;
    const friction = 0.96; // Friction pour ralentir l'orbe de manière plus progressive
    const pushStrength = 0.4; // Force de poussée initiale
    const maxSpeed = 10; // Vitesse maximale pour éviter les déplacements trop rapides

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Centre de l'orbe
        const orbCenterX = orbX + orbRadius;
        const orbCenterY = orbY + orbRadius;

        // Distance entre la souris et le centre de l'orbe
        const distance = Math.sqrt(
            Math.pow(mouseX - orbCenterX, 2) + Math.pow(mouseY - orbCenterY, 2)
        );

        // Vérifie si la distance est inférieure ou égale au rayon de l'orbe
        if (distance <= orbRadius) {
            const deltaX = orbCenterX - mouseX;
            const deltaY = orbCenterY - mouseY;

            // Projette l'orbe dans la direction opposée à la souris
            velocityX = deltaX * pushStrength;
            velocityY = deltaY * pushStrength;
        }
    });

    // Fonction de mise à jour de la position de l'orbe
    function updateOrb() {
        // Applique la friction pour ralentir l'orbe avec le temps
        velocityX *= friction;
        velocityY *= friction;

        // Limiter la vitesse maximale
        velocityX = Math.max(-maxSpeed, Math.min(velocityX, maxSpeed));
        velocityY = Math.max(-maxSpeed, Math.min(velocityY, maxSpeed));

        // Mise à jour des positions en fonction des vitesses
        orbX += velocityX;
        orbY += velocityY;

        // Gestion des rebonds contre les parois
        // Détection du bord gauche/droit
        if (orbX <= 0) {
            orbX = 0; // Forcer l'orbe à être collée au bord gauche
            velocityX *= -1; // Inverse la direction
            velocityX *= friction; // Applique la friction après un rebond
        } else if (orbX >= window.innerWidth - orb.offsetWidth) {
            orbX = window.innerWidth - orb.offsetWidth; // Forcer l'orbe à être collée au bord droit
            velocityX *= -1; // Inverse la direction
            velocityX *= friction; // Applique la friction après un rebond
        }

        // Détection du bord haut/bas
        if (orbY <= 0) {
            orbY = 0; // Forcer l'orbe à être collée au bord supérieur
            velocityY *= -1; // Inverse la direction
            velocityY *= friction; // Applique la friction après un rebond
        } else if (orbY >= window.innerHeight - orb.offsetHeight) {
            orbY = window.innerHeight - orb.offsetHeight; // Forcer l'orbe à être collée au bord inférieur
            velocityY *= -1; // Inverse la direction
            velocityY *= friction; // Applique la friction après un rebond
        }

        // Applique la nouvelle position à l'orbe
        orb.style.left = orbX + 'px';
        orb.style.top = orbY + 'px';

        // Répéter l'animation
        requestAnimationFrame(updateOrb);
    }
    // Démarrer l'animation
    updateOrb();
});
