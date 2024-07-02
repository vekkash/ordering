import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div class="relative">
 {/* <video autoPlay muted loop id="bg-video" className="fixed top-0 left-0 min-w-full min-h-full z-0 opacity-50">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0468/large_preview/_import_615e879da73ba7.00965427.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <div class="p-6">
<div class="flex flex-row justify-between">
<h1 class="text-2xl font-extrabold text-orange-600">FoOdIEe.</h1>
<div class="flex flex-row ">
<button class=" cursor-pointer px-3 mt-2 text-black">Home</button>
<button class=" cursor-pointer px-3 mt-2 text-black">Menu</button>
<button class=" cursor-pointer px-3 mt-2 text-black">Mobile app</button>
<button class=" cursor-pointer px-3 mt-2 text-black">Contact us</button></div>
<div class="flex flex-row gap-3">
<button><img class="size-6 mt-4" src="https://tse1.mm.bing.net/th?id=OIP.pJmN4Ur-bbOCrKetJs7j3gHaHx&pid=Api&P=0&h=180"/></button>
<button><img class="size-10 mt-2" src="https://tse3.mm.bing.net/th?id=OIP.BDJeb7WLodho_lf3iZtCjAHaHa&pid=Api&P=0&h=180"/></button>
<button class=" cursor-pointer px-3 mt-2 border border-orange-600 rounded-full bg-orange-200 hover:bg-orange-300 text-black"><Link to="/Signup">Signup</Link></button></div>
</div>
<div class="relative">
  <img class="w-full size-64" src="https://www.simplemost.com/wp-content/uploads/2017/06/healthy-meal-portion-control.jpeg" />
  <div class="absolute top-0 left-0 py-5 px-4 bg-orange-100 bg-opacity-50">
    <h1 class="text-4xl text-black font-medium ">Order your </h1>
    <h1 class="text-4xl text-black mt-3 font-medium">favourite food here</h1>
    <p class="mt-4 text-black font-semibold">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
    <p class="text-black font-semibold">ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
  </div>
</div>    

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
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Cakes">Cakes</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="http://2.bp.blogspot.com/-Q4oLLQEDfmE/UmfQZRS_cXI/AAAAAAAAIpI/n1KV5xavp48/s1600/20131022_121432.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Pureveg">Pure Veg</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://tse4.mm.bing.net/th?id=OIP.3qiOYdcpu2jl8G9ln1phLgHaE8&pid=Api&P=0&h=180"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Pasta">Pasta</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Noodles">Noodles</Link></button></div>

<div class="flex flex-col"><img class="size-20 rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.G0UEQVIcVXM0cj-ykNDFlgHaEx&pid=Api&P=0&h=180"/>
<button class=" cursor-pointer px-5 py-3 mr-auto text-black hover:bg-orange-300"><Link to="/Beverage">Beverages</Link></button></div>
</div>
</div>
<h1 class="text-2xl font-semibold" >Top dishes near you</h1>
<div class="flex flex-row gap-20">
<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-2.jpg"/>
  <p class="font-bold">Greek salad</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.250</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse2.mm.bing.net/th?id=OIP.NqPUfMwurtW5z96AqqA8JgHaHa&pid=Api&P=0&h=180"/>
  <p class="font-bold">Veg salad</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.150</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="http://parsleyinmyteeth.com/wp-content/uploads/2016/02/Clover-Red-Beet-Sprout-Salad-with-Avocado-Black-Beans-Quinoa-from-Parsley-In-My-Teeth-e1454438634610.jpg"/>
  <p class="font-bold">Clover salad</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.250</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse4.mm.bing.net/th?id=OIP.Mzpst0GEtRefP_TeWfOS2AHaE8&pid=Api&P=0&h=180"/>
  <p class="font-bold">Chicken salad</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.200</p>
</div>
</div>

<div class="flex flex-row gap-20">
<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse4.mm.bing.net/th?id=OIP.n0IeiGrD475i9A5f-SRaVgHaLH&pid=Api&P=0&h=180"/>
  <p class="font-bold">Lasagna Rolls</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.250</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse1.mm.bing.net/th?id=OIP.TYUA87qzaM9ZYu31Ie5dzgAAAA&pid=Api&P=0&h=180"/>
  <p class="font-bold">Peri Peri Rolls</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.210</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse1.mm.bing.net/th?id=OIP.M_mvWS2lQUIOgFOHV_pkNgHaE8&pid=Api&P=0&h=180"/>
  <p class="font-bold">Chicken Rolls</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.200</p>
</div>

<div class="border rounded-lg shadow-lg inline-block p-6">
  <img class="size-48 rounded-lg mb-4" src="https://tse3.mm.bing.net/th?id=OIP.AMlucNVldzQyqOjWJTv-kAHaHa&pid=Api&P=0&h=180"/>
  <p class="font-bold">Veg Rolls</p>
  <p>Food provides essential nutrients </p>
  <p>for overall health and well-being</p>
  <p class="text-orange-600 font-extrabold">Rs.120</p>
</div>

    </div>
    </div>
    </div>
  )
}
