
// selectors
let main=document.querySelector(".main-row");
let newProducts=[];
let id=0;
let cardBody=document.getElementById("card-body");

if(select.value==1){
    main.innerHTML="";
    products.forEach(x=>{
        if(x.price<50){
            main.innerHTML+=`
            <div class="col-lg-3">
                <div class="border p-3 shadow-sm rounded">
                    <div class="">
                        <img src="${x.image}" class="item-img" alt="">
                    </div>
                    <div class="pt-3">
                        <h5>${x.title.slice(0,13)}</h5>
                        <div class="d-flex justify-content-between my-3" value="${id}">
                            <p class="mb-0 text-black-50">${x.price} $</p>
                            <p href="./item-price.html" class="text-decoration-none buy-item mb-0 bg-primary rounded-1 text-white px-2 py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">buy</p>
                        </div>
                    </div>
                </div>
            </div>`;
            newProducts.push(x);
            id++;
        }
    })
};

let buy=document.querySelectorAll(".buy-item");

buy.forEach(function(x){
    x.addEventListener("click",function(e){
        let show=e.target.parentElement.getAttribute("value");
        show=Number(show);
        let product= newProducts[show];
        cardBody.innerHTML= `
        <div class="col-lg-6">
        <img src="${product.image}" alt="" class="item-img">
        </div>
        <div class="col-lg-6">
            <div class="m-2">
                <label for="name">Product Name</label>
                <input type="text" value="${product.title.slice(0,13)}" id="name" readonly class="p-2 outline-dark border-1 show-title w-100">
                <br>
                <label for="price">Price</label> <br>
                <input type="text" value="${product.price} $" id="price" readonly class="p-2 show-price w-100">
                <br><br>
                <label for="quantity" class="mb-2 mb-lg-3">Quantity</label> <br>
                <div class="text-center">
                <div class="number-input d-flex">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus w-25">-</button>
                    <input class="quantity w-50 text-center" min="0" name="quantity" value="1" id="qty" type="number" readonly>
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus w-25">+</button>
                </div>
                </div>
            </div>
        </div>
        `;
        // console.log(product.price);
    });
})
