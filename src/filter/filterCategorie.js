export default function filter(categorie){
    const products = document.querySelectorAll(".product-card")
    //todos los nodos que no sean igual a categorie
    var nodosHidden = Array.from(products).filter(function(nodo) {
        return nodo.getAttribute("info") !== categorie;
    });
    //todos los nodos que sean igual a categorie
    var nodosShow = Array.from(products).filter(function(nodo) {
        return nodo.getAttribute("info") == categorie;
    });
    //mostrar todos los nodos que sean igual a categorie
    nodosShow.map(function(index){
        index.style.display = "grid"
    })
    //ocultar todos los nodos que sean igual a categorie
    nodosHidden.map(function(index){
        index.style.display = "none"
    })
    
    if (categorie == "all"){
        return Array.from(products).map(function(index){
            index.style.display = "grid"
        })
    }
}