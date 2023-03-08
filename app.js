const reviews = [
    {
      id: 1,
      brand: 'Ahşap Temizleyici',
      amount: '5 Litre',
      img: './pictures/Ahşap Temizleyici.png',
      info: "Tüm yüzeyleri temizler ayrıca bakterileri ve kirleri önler.",
    },
    {
      id: 2,
      brand: 'Aspirin',
      amount: '5 Litre',
      img: './pictures/Aspirin.png',
      info: 'halı, kumaş, fayans, parke gibi tüm yüzeylerde temizlik sağlar.',
    },
    {
      id: 3,
      brand: 'Köpük Sıvı Sabun',
      amount: '30 Litre',
      img: './pictures/Köpük Sıvı Sabun.png',
      info: 'El temizliği için otomatik köpük makinelerine uygun bol köpüklü bakteri ve kire karşı sabun',
    },
    {
      id: 4,
      brand: 'Sıvı Arap Sabunu',
      amount: '30 Litre',
      img: './pictures/Sıvı ARap Sabunu.png',
      info: 'Doğal sıvı arap sabunu temizlikte her alanda kullanılır.',
    },
  ];

  const img = document.getElementById("item-img");
  const brand = document.getElementById("brand");
  const amount = document.getElementById("amount");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')
  const randomBtn = document.querySelector('.random-btn')

  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function(){
    showBrand(); 
  })

  function showBrand() {
    const item = reviews[currentItem];
    img.src = item.img;
    brand.textContent = item.brand;
    amount.textContent = item.amount;
    info.textContent = item.info;
  }

  nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showBrand();
  });

  prevBtn.addEventListener('click', function(){
    currentItem--;
   if(currentItem < 0 ) {
    currentItem = reviews.length - 1;

   }
    showBrand();
  });

  randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showBrand();
  })