//CÁLCULO DE MASA CORPORAL (Peso en Kg, Estatura en metros)

function imc(peso, estatura) {
    let dieta;
    let imc = peso / (estatura * estatura)

    switch (true) {

        case imc < 16:
            dieta = 'delgado severo'
            break;

        case imc >= 16 && imc < 18.49:
            dieta = 'delgado'
            break;

        case imc >= 18.49 && imc <= 30:
            dieta = 'normal'
            break;

        case imc > 30 && imc < 40:
            dieta = 'sobrepeso-obesidad'
            break;

        case imc >= 40:
            dieta = 'obesidad mórbida'
            break;

    }
    return [imc, dieta]
}

console.log(imc(80, 1.80))
