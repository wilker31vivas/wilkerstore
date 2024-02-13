export default function filter(categorie){
    console.log(categorie == "all")
    const products = document.querySelectorAll(".product-card")
    var nodosHidden = Array.from(products).filter(function(nodo) {
        return nodo.getAttribute("info") !== categorie;
    });
    var nodosShow = Array.from(products).filter(function(nodo) {
        return nodo.getAttribute("info") == categorie;
    });
    nodosShow.map(function(index){
        index.style.display = "block"
    })
    nodosHidden.map(function(index){
        index.style.display = "none"
    })
    
    if (categorie == "all"){
        return Array.from(products).map(function(index){
            index.style.display = "block"
        })
    }
}