var matrizNomes = [];
function adicionar()
{
 var convidado = document.getElementById("nome1").value;
matrizNomes.push(convidado);
matrizNomes.sort();
document.getElementById("nome1").value = '';
document.getElementById("mostrarNomes").innerHTML = matrizNomes;
document.getElementById("mostrarNomes").style.display = "block";

}







function pesquisar()
{
  var consulta = document.getElementById("consulta").value;
   
 var quantidade = 0;
 
for (j=0; j<matrizNomes.length; j++)
{
   if(consulta==matrizNomes[j]){
   quantidade++;

 }
}
document.getElementById("resultado").innerHTML =
" Nome encontrado " + quantidade + "vez(es)";



}