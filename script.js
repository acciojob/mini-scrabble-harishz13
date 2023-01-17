//your code here
		let evaluatedText = document.getElementById("evaluatedText");
        let letterCount = document.getElementById("letterCount");

        evaluatedText.addEventListener("input",calculateLength)

        function calculateLength(){
        let word = evaluatedText.value;
        let wordlength = word.length;

        letterCount.innerHTML = word.length;