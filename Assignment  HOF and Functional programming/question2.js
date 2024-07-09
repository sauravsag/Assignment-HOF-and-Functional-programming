function printRandomNumberIndefinitely() {
    setInterval(() => {
        const randomNumber = Math.random();
        console.log(randomNumber);
    }, 2000);
}

printRandomNumberIndefinitely();
