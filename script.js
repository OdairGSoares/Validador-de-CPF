function validacao() {

    var cpf = document.getElementById("cpf_digitado").value;

    if ( valida_CPF(cpf) ) {

        document.getElementById('error').style.display="none";
        document.getElementById('success').style.display="block";

    }else{

        document.getElementById('error').style.display="block";
        document.getElementById('success').style.display="none";
    }

}

function valida_CPF(cpf) {

    console.log(cpf.length)

    if ( cpf.length == 11 ) {

        var numeros = cpf.substring(0, 9);

        var digitos = cpf.substring(9);

        var soma = 0;

        for ( var i = 10; i > 1; i-- ) {

            soma += numeros.charAt(10 - i) * i;
        }

        var res = ( soma % 11 ) < 2 ? 0 : 11 -  ( soma % 11 );

        // Validação do primeiro digito.

        if ( res != digitos.charAt(0) ) {

            return false;
        }

        soma = 0;

        numeros = cpf.substring(0, 10);

        for ( i = 11; i > 1; i-- ) {

            soma += numeros.charAt(11 - i) * i;
        }

        res = ( soma % 11 ) < 2 ? 0 : 11 -  ( soma % 11 );

        // Validação do segundo digito.

        if ( res != digitos.charAt(1) ) {

            return false;
        }

        return true;

    } else {

        return false;

    }

}