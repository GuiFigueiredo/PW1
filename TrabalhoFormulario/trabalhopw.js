function validarcpf(){
	
	var nome = form1.nome.value;
	var email = form1.email.value;
	var cpf= form1.CPF.value;
	var endereço= form1.endereço.value;
	var cidade= form1.cidade.value;
	var estado= form1.Estado.value;
	var uf= form1.UF.value;
	var cep= form1.CEP.value;
	var pais= form1.pais.value;
	
	
if(nome==""){
	
alert('Preencha o campo com seu nome')
form1.nome.focus();
return false;	
}
if(nome.length < 5){
	
alert('Digite seu nome completo');
form1.nome.focus();
return false;	
}	

if(cpf==""){
	
alert('Preencha o campo com seu CPF');
form1.CPF.focus();
return false;	
	
}
if(cpf.length != 11 ){
	
alert('a Quantidade de caracteres é inválida');
form1.CPF.focus();
return false;	
}

if(email==""){
	
alert('Por favor preencha o campo com seu email');
form1.email.focus();
return false;

}	
if(endereço==""){
	
alert('informe o endereço');
form1.endereço.focus();
return false;	
}
if(cidade==""){
	
alert('informe a cidade');
form1.cidade.focus();
return false;	
}
if(estado==""){
	
alert('informe o estado');
form1.Estado.focus();
return false;	
}
if(uf==""){
	
alert('informe o UF');
form1.UF.focus();
return false;	
}
if(cep==""){
	
alert('informe o cep ');
form1.CEP.focus();
return false;	
}
if(pais==""){
	
alert('informe o país');4
form1.pais.focus();
return false;	
}
}