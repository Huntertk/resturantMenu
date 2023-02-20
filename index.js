const menu = [
    {
        id: 1,
        name: "pancakes",
        category: "veg",
        price: 250,
        img: "images/item-1.jpeg",
        desc: "pancake dipped with honey extra added with berries."
    },
    {
        id: 2,
        name: "burger",
        category: "nonveg",
        price: 399,
        img: "images/item-2.jpeg",
        desc: "delicious burger with chicken fillings and french fries."
    },
    {
        id: 3,
        name: "creamy milkshake",
        category: "shakes",
        price: 190,
        img: "images/item-3.jpeg",
        desc: "creamy milkshake with donout and berries."
    },
    {
        id: 4,
        name: "chicken biryani",
        category: "nonveg",
        price: 450,
        img: "images/item-4.jpg",
        desc: "pot chicken biryani with fresh chicken marinated in a mixture of original biryani masala."
    },
    {
        id: 5,
        name: "chicken tandoori",
        category: "nonveg",
        price: 800,
        img: "images/item-5.jpg",
        desc: "chicken tandoori marinated fresh chicken with indian spices."
    },
    {
        id: 6,
        name: "Masala Dosa",
        category: "veg",
        price: 249,
        img: "images/item-6.jpg",
        desc: "south indian special food masala dosa with fillings of potato and indian spices."
    },
    {
        id: 7,
        name: "Oreo Shake",
        category: "shakes",
        price: 149,
        img: "images/item-6.jpeg",
        desc: "oreo shaks with milk and chocolate syrup and oreo biscuit."
    },
    {
        id: 8,
        name: "Indian Thali",
        category: "veg",
        price: 1149,
        img: "images/item-7.jpg",
        desc: "indian thali with 5 different types of vegitables item with parotha."
    },
    {
        id: 9,
        name: "chole bhature",
        category: "veg",
        price: 149,
        img: "images/item-8.jpg",
        desc: "fresh and soft bhature with spicy chole."
    },
    {
        id: 10,
        name: "chicken curry",
        category: "nonveg",
        price: 499,
        img: "images/item-9.jpg",
        desc: "chicken curry with spicy masala."
    },
]

const sectionMain = document.querySelector('.section-main')
const filterBtn = document.querySelectorAll('.filter-btn')
console.log(filterBtn)



window.addEventListener("DOMContentLoaded", () =>{
    renderMenu(menu)

    filterBtn.forEach((btn) => {
        btn.addEventListener('click', (e)=>{
            const categoryBtn = e.currentTarget.dataset.id
            const categoryMenu = menu.filter((item)=> {
                if(item.category === categoryBtn){
                    return item
                }
            })
            if(categoryBtn === 'all'){
                renderMenu(menu)
            } else{
                renderMenu(categoryMenu)
            }
            console.log(categoryMenu)
        })
    })
})


const renderMenu  = (menu) => {
    const getMenu = menu.map((item) => {
        return `
        <article class="menu-item">
        <img src="${item.img}" alt="img-food" class="photo icon">
        <div class="item-info">
            <header>
                <h4>${item.name}</h4>
                <h4 class="price">₹${item.price}</h4>
            </header>
              <p class="item-text">${item.desc}</p>
        </div>
    </article>
        `
    }).join('')
    sectionMain.innerHTML = getMenu
}