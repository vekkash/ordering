import React from 'react'
import { Link } from 'react-router-dom';


export default function Topdiv() {
  return (
    <div>
        <div class="p-6">
<div class="border rounded-lg shadow-lg p-6 mt-5">
  <h1 class="text-2xl font-semibold">Explore our menu</h1>
  <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy</p>
  <p>your cravings and elevate your dining experience, one delicious meal at a time</p>
  <div class="flex flex-row gap-16 mt-5">
    <div class="flex flex-col">
     <button> <img class="size-20 rounded-full" src="http://img.taste.com.au/QaDKlckA/taste/2016/11/fresh-summer-vegetable-salad-91664-1.jpeg"/></button>
      <button class="cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Salad">Salad</Link></button>
    </div>
   <div class="flex flex-col"><img class="size-20 rounded-full" src="https://www.fajarmag.com/wp-content/uploads/2020/04/spring-roll-recipe-step-by-step-instructions-scaled.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Rolls">Rolls</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://www.theplazarestaurant.com/wp-content/uploads/2018/05/Plaza-46-min.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Deserts">Desserts</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://images6.alphacoders.com/868/thumb-1920-868514.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Sandwich">Sandwich</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://assets.marthastewart.com/styles/wmax-1500/d24/med104694_0509_choc_cake/med104694_0509_choc_cake_sq.jpg?itok=jCMTbw74"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Cakes">Cake</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="http://2.bp.blogspot.com/-Q4oLLQEDfmE/UmfQZRS_cXI/AAAAAAAAIpI/n1KV5xavp48/s1300/20131022_121432.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Pureveg">Pure Veg</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://tse4.mm.bing.net/th?id=OIP.3qiOYdcpu2jl8G9ln1phLgHaE8&pid=Api&P=0&h=180"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Pasta">Pasta</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Noodles">Noodles</Link></button></div>
<div class="flex flex-col"><img class="size-20 rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.G0UEQVIcVXM0cj-ykNDFlgHaEx&pid=Api&P=0&h=180"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Beverage">Beverages</Link></button></div>
</div>
</div> 
    </div>
    </div>
  )
}
