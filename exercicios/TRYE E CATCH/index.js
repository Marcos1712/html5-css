

try{
    
    const idade = 2;
    
    if(idade < 0){
        throw new Error("idade é negativa")
    }
    else if (idade > 0){
    throw new Error("idade é positiva")
    }
    else if (idade == 0){
    throw new Error("idade é igual")
    }
} catch(err){
console.log(err.message)
} finally{
    console.log("depois do erro")
}

