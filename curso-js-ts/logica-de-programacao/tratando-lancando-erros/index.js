// Try, catch, throw

// function soma (x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('x e y precisam ser números.');
//     }

//     return x + y;

// }

// try{
//     console.log(soma(1, '2'));
// }catch(err){
//     console.log(err);
// }

// Try, Catch, Finally

// try{
//     // Executada quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch(e){
//     // Executada quando há erros
//     console.log('Tratando o erro');
// } finally{
//     // Executado sempre
//     console.log('FINALLY: Eu sempre sou executado')
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    // Tratar erro
} finally{
    console.log('Tenha um bom dia');
}



