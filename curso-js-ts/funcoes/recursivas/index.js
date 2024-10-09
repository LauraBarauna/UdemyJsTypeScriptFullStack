function fatorial (n) {
    // Caso base
    if (n ===1 || n ===0 )
        return 1;
    // Chamada recursiva
    else
    return n * fatorial(n-1);
}

console.log(fatorial(4));