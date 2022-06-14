const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];


const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

let currProduct = products[0]
const currImg = document.querySelector(".productImg")
const currTitle = document.querySelector(".productTitle")
const currPrice = document.querySelector(".productPrice")
const currColors = document.querySelectorAll(".color")
const currSizes = document.querySelectorAll(".size")

// console.log(currProduct)

menuItem.forEach((item, index) => {

    item.addEventListener("click", () => {
        console.log("clicked ", index)

        currProduct = products[index]
        // console.log(currProduct)
        wrapper.style.transform = `translateX( ${-100 * index}vw )`


        
        currImg.src = currProduct.colors[0].img
        currTitle.textContent = currProduct.title
        currPrice.textContent = currProduct.price


        // paint the box for respective color
        currColors.forEach((color, index) => {
            color.style.backgroundColor = currProduct.colors[index].code
        })

        // add click functionality on colors
        currColors.forEach((color, index) => {
            color.addEventListener("click", () => {
                currImg.src = currProduct.colors[index].img
                }
            )

        })  


    })
})


// console.log(menuItem)
