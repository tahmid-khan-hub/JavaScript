const products = [
    {name: 'vivo Mobile'},
    {name: 'iPhone'},
    {name: 'samsung mobile'},
    {name: 'Lenovo MobIle'},
    {name: 'xiaomi Mobile'},
    {name: 'opPo MobilE'},
    {name: 'iqoo Mobile'},
];

function searchProduct(products, search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase()))
            matched.push(product);
    }
    return matched;
}

const ans = searchProduct(products, 'mobilE');
console.log(ans);