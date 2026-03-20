<script>
(function() {
    function enableSecretLetterCode(secretSequence, callback) {
        let pressedKeys = [];

        document.addEventListener('keydown', (event) => {
            const key = event.key.toUpperCase(); // normalize to uppercase
            pressedKeys.push(key);

            // Keep only the last N keys
            if (pressedKeys.length > secretSequence.length) {
                pressedKeys.shift();
            }

            // Compare the sequences
            const pressedString = pressedKeys.join('');
            const secretString = secretSequence.join('').toUpperCase(); // ensure uppercase

            if (pressedString === secretString) {
                callback();
                pressedKeys = []; // reset
            }
        });
    }

    // When the user types "GOAT", open the URL in a new tab
    enableSecretLetterCode(['G','O','A','T'], function() {
        window.open('https://sites.google.com/view/pkgcar', '_blank');
    });
})();
</script>
