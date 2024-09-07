function pesquisar (){
    let section = document.getElementById ("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa"). value;

   if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado.</p>"
    return
   };
   campoPesquisa= campoPesquisa.toLowerCase()

   let resultados= "";
   let titulo= "";
   let sinopse= "";
   let link= "";
   let tags= "";
   
for (let dado of dados) {
    titulo= dado.titulo.toLocaleLowerCase ()
    sinopse= dado.sinopse.toLocaleLowerCase ()
    link= dado.link.toLocaleLowerCase ()
    tags= dado.tags.toLocaleLowerCase ()
    if (titulo.includes (campoPesquisa)|| sinopse.includes (campoPesquisa)|| link.includes (campoPesquisa) || tags.includes (campoPesquisa)){
         resultados +=`
    <div class="item-resultado">
           <h2>
               <a href="#" target="_blank">${dado.titulo}</a>      
               </h2>
           <p class="sinopse-meta">${dado.sinopse}</p>
           <a href=${dado.link}</a>
           <h2>
   </div>
   `;
    }
  
}
if (!resultados) {
    resultados= "<p> Essa palavra não foi encontrada.</p>"
}
section.innerHTML = resultados 
}

