const favoritefood = [
    {
        id:"food012",
        name:"pizza",
        highTemeperture:true,
        isWestern:true,
    },
    {   
        id:"food024",
        name:"hotPot",
        highTemeperture:true,
        isWestern:false,
    },
    {   
        id:"food052",
        name:"noodles",
        highTemeperture:true,
        isWestern:false,
    },
    {   
        id:"food002",
        name:"hamburgers",
        highTemeperture:true,
        isWestern:true,
    },
    {   
        id:"food101",
        name:"chicken",
        highTemeperture:true,
        isWestern:false,
    },
    {   
        id:"food007",
        name:"bread",
        highTemeperture:false,
        isWestern:true,
    },
 ]
//  const findWest = function(list){
//     for(var ii=0;ii<favoritefood.length;ii++){
//         var item=list[ii]
//         if(item.isWestern === true){
//             console.log(item)
//         }
//     }
//  }
//  findWest(favoritefood)

//  const findname = function(listdish,namedishes){
//     var result=null
//     for(var ii=0;ii<listdish.length;ii++)
//         var item=listdish[ii]
//         if(item.name === namedishes){
//             result=item
//         }
//         return result
//  }
// console.log(findname(favoritefood,"noodles"))

// the  javascript data methods:find
// const pizza = favoritefood.find(function(item){
//     return(item.id === "food012")
// })
// console.log(pizza)
// const Westernfood = favoritefood.filter(function(item){
//     return(item.isWestern === true)
// })
// console.log(Westernfood)
const coldfood = favoritefood.filter(function(item){
    return(item.highTemeperture === false)
})
console.log(coldfood)

 