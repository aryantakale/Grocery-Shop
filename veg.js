let elementsel=document.querySelector(".elements");
let cartitemsel=document.querySelector(".offcanvas-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-light span");
const products=[
    {
        id:1,
        name:"Haldiram's Sev Bhujiya",
        desc:"Snacks & Munchies",
        stock:10,
        price:18,
        delPrice:24,
        qty:0
    },
    {
        id:2,
        name:"NutriChoice Digestive",
        desc:"Bakery & Buiscuits",
        stock:8,
        price:24,
        qty:0
    },
    {
        id:3,
        name:"Cadbury 5 Star Chocolate",
        desc:"Bakery & Buiscuits",
        stock:9,
        price:32,
        qty:0
    },
    {
        id:4,
        name:"Onion Flavour Potato",
        desc:"Snacks & Munchies",
        stock:10,
        price:3,
        qty:0
    },
    {
        id:5,
        name:"Salted instant popcorn",
        desc:"Instant food",
        stock:5,
        price:13,
        qty:0
    },
    {
        id:6,
        name:"Blueberry Greek Yogurt",
        desc:"Dairy, Bread & Eggs",
        stock:6,
        price:18,
        qty:0
    },
    {
        id:7,
        name:"Britannia Cheese Slices",
        desc:"Dairy, Bread & Eggs",
        stock:7,
        price:24,
        qty:0
    },
    {
        id:8,
        name:"Kellog's original cereals",
        desc:"Instant Food",
        stock:8,
        price:32,
        

        qty:0
    },
    {
        id:9,
        name:"Slurrp Millet Chocolate",
        desc:"Snacks & Munchies",
        stock:9,
        price:3,
        qty:0
    },
    {
        id:10,
        name:"Amul Butter - 500g",
        desc:"Dairy, Bread & Eggs",
        stock:10,
        price:13,
        qty:0
    }
]
function displayproducts()
{
    products.forEach((product)=>{
            elementsel.innerHTML+=`
            <div class="col-md-2">
            <div class="card">
            <div class="card-body">
              
              <img src="images/${product.id}.jpg" height="140" width="140">
              <div class="d-flex justify-content-center d-none">
                <div class="p-2">

                </div>
             
              </div>
              
              <p class="card-text text-muted ">${product.desc}</p>

              <a href="details.html"><p style="font-size:15px;">${product.name}</p></a>
              <div class="d-flex" style="font-size:12px;">
              <i class="fa-solid fa-star text-warning">
              </i><i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star-half-stroke text-warning"></i>
              <p class="text-muted">4.5(149)</p>         
              </div>
              <div class="d-flex" style="font-size:12px;">
                <p>$${product.price}</p>
                <p class="text-muted flex-grow-1">$24</p> 

                <button type="button" class="btn btn-sm btn-success" onclick="addtocart(${product.id})">+ Add</button>        
              </div>
            </div>
          </div>
          </div>    
        
            </div>
            
            `
    });
}
displayproducts();  // call displaay product
  
let cart=[];

function addtocart(id){
     
       //check if product is already exist or not
     if(cart.some(item=>item.id==id))
       {
            changeqty("plus",id);
              
       }else{
               const item =products.find((product)=>product.id===id);
                  cart.push({
                        ...item,
                        qty:1

                  }); 
                // alert(item.name)
          }
       updatecart();  // call method
}  

function updatecart(){
           rendercartitems();
        //    rendersubtotal();

}

function  rendercartitems(){
         
        cartitemsel.innerHTML="";
         cart.forEach((item)=>{

                 cartitemsel.innerHTML+=  `
                 <tr><td><img src="images/${item.id}.jpg" height=50 width=50></td>
                 <td><p style="font-size:13px;">${item.name}</p></td>
            `




         })
          


}

function changeqty(action,id)
{
    cart=cart.map((item)=>
    {

        let qty = item.qty;
        if(item.id===id)
        {
            if(action === "-" && qty>1)
            {
                qty--;
            }elseif(action === "+" && qty<item.stock)
            {
                qty++;
            }
        }
        return{
            ...item,
            qty
        }

    })

    updatecart();
}

// function removeitem(aa);

function rendersubtotal(){
    let totalprice = 0,totalitems = 0;
    cart.forEach(item)=>{
        totalprice = totalprice + (item.price*item.qty)
        totalitems = totalitems+item.qty
    }
}