<template>
  <div class="w-full py-2 bg-red-600 text-center text-white text-xs">
    Dapatkan Diskon 50% Sekarang!
  </div>
  <nav class="bg-white w-full sticky top-0 z-50 shadow">
    <div
      class="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20"
    >
      <a class="flex-shrink-0 ml-10" href="#">
        <img src="../assets/sepatu/logo1.png" class="h-14 w-20" alt="Logo" />
      </a>
      <div class="hidden md:flex flex-grow justify-center space-x-10 ml-10">
        <ul class="flex space-x-10">
          <li>
            <a href="#" class="text-gray-900 hover:text-gray-700">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 hover:text-gray-700">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 hover:text-gray-700">Services</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 hover:text-gray-700">Pricing</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 hover:text-gray-700">Contact</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-10 pr-10">
        <button type="button" class="btn btn-outline-primary">
          <i class="bi bi-search text-2xl"></i>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <i class="bi bi-cart3 text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
  <section id="section-1" class="relative">
    <img
      src="../assets/sepatu/bg2.jpeg"
      alt="Background"
      class="w-full lg:h-auto h-[265px] object-fill"
    />
    <div
      class="absolute z-10 w-full h-full top-2 lg:px-20 flex flex-col items-end justify-center"
    >
      <div
        class="capitalize text-white text-xl lg:text-4xl tracking-wide leading-snug text-right"
      >
        <span>Kita sedain</span> <b>Sepatu</b><br />
        <span>Buat yang Katanya</span> <b>Starboy</b><br />
      </div>
      <div
        class="cursor-pointer bg-red-900 lg:p-4 p-2 w-40 lg:w-52 text-center text-white rounded lg:text-base text-xs mt-4 lg:mt-8 hover:opacity-70"
      >
        Dapatkan Sekarang
      </div>
    </div>
  </section>

  <section id="section-2" class="lg:py-20 py-10 w-full bg-red-100">
    <div class="w-full text-center text-xl text-dark">
      Keuntungan Yang Kami Berikan
    </div>
    <div
      class="mt-6 lg:mt-12 w-full grid grid-cols-2 lg:flex gap-6 lg:gap-10 justify-between lg:px-20 px-4"
    >
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-truck-flatbed text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Bisa Pembayaran COD
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-award text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Barang Original
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-shield-check text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Kualitas Terjamin
        </div>
      </div>
      <div
        class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4"
      >
        <div class="w-full text-center text-red-700">
          <i class="bi bi-tags text-5xl"></i>
        </div>
        <div class="text-red-700 w-full text-center lg:text-lg">
          Harga Terjangkau
        </div>
      </div>
    </div>
  </section>
  <section id="section-3" class="py-16 lg:px-20 px-4 flex flex-col gap-10">
    <div class="w-full text-start text-xl text-dark">Kategori Produk</div>
    <div class="w-[362px] md:w-full overflow-x-auto">
      <div class="flex w-full">
        <div
          class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-red-400 text-white"
        >
          Nike
        </div>
        <div
          class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-red-300 text-white"
        >
          New Belance
        </div>
        <div
          class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-red-400 text-white"
        >
          Salomon
        </div>
        <div
          class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-red-300 text-white"
        >
          Vans
        </div>
        <div
          class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-red-400 text-white"
        >
          Ventela
        </div>
      </div>
    </div>
  </section>
  <section
    id="section-4"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-start text-xl text-dark">Sepatu Nike</div>
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="Nike"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nike1.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Nike Air Jordan 17
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                157$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="nike"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nike2.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Nike Size the day
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                17$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="nike"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nike3.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Nike Happines
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                10$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="nike"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nike4.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Nike Stranger
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                30$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded hidden lg:block">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="buket uang 1"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nike5.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Nike Alexandra
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                50$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center hover:opacity-60 text-dark">
      <a href="#" class=""> Lihat Semuanya </a>
    </div>
  </section>
  <section
    id="section-5"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-start text-xl text-dark">Sepatu New Belance</div>
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="New Belance"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nb1.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              New Belance Magnum
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                157$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="New Belance"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nb2.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              New Belance Surya
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                17$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="New Belance"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nb3.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              New Belance Garpit
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                10$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="New Belance"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nb4.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              New Belance LA
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                30$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded hidden lg:block">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="New Belance"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/nb5.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              New Belance Cerutu
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                50$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center hover:opacity-60 text-dark">
      <a href="#" class=""> Lihat Semuanya </a>
    </div>
  </section>
  <section
    id="section-6"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-start text-xl text-dark">Sepatu Salomon</div>
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="Salomon"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/salomon1.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Salomon HTML
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                157$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="Salomon"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/salomon2.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Salomon CSS
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                17$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="Salomon"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/salomon3.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Salomon Javascript
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                10$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="Salmomon"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/salomon4.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Salomon PHP
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                30$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded hidden lg:block">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="salomon"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/salomon5.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              Salomon C++
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                50$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center hover:opacity-60 text-dark">
      <a href="#" class=""> Lihat Semuanya </a>
    </div>
  </section>
  <section
    id="section-7"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-start text-xl text-dark">Sepatu Vans</div>
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="vans"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/vans1.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              vans of the wall
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                157$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="vans"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/vans2.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              vans of the wall
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                17$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="vans"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/vans3.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              vans of the wall
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                10$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="vans"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/vans4.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              vans of the wall
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                30$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded hidden lg:block">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="vans"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/vans5.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              vans of the wall
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                50$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center hover:opacity-60 text-dark">
      <a href="#" class=""> Lihat Semuanya </a>
    </div>
  </section>
  <section
    id="section-8"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-start text-xl text-dark">Sepatu Ventela</div>
    <div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="ventela"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/ventela1.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              ventela lokal
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                157$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="ventela"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/ventela2.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              ventela lokal
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                17$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="ventela"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/ventela3.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              ventela lokal
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                10$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="ventela"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/ventela4.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              ventela lokal
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                30$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6151ebec="" class="bg-red-100 rounded hidden lg:block">
          <div data-v-6151ebec="" class="">
            <img
              data-v-6151ebec=""
              alt="ventela"
              class="w-full h-56 object-cover image-lazy pulse"
              lazy="loaded"
              src="../assets/sepatu/ventela5.jpg"
            />
          </div>
          <div
            data-v-6151ebec=""
            class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-3"
          >
            <div data-v-6151ebec="" class="text-dark text-sm font-medium">
              ventela lokal
            </div>
            <div data-v-6151ebec="" class="flex items-center gap-1">
              <i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i
              ><i
                data-v-6151ebec=""
                class="bi bi-star-fill text-xs text-yellow-600"
              ></i>
            </div>
            <div
              data-v-6151ebec=""
              class="flex justify-between w-full items-center"
            >
              <div data-v-6151ebec="" class="text-dark font-medium text-sm">
                50$
              </div>
              <div
                data-v-6151ebec=""
                class="bg-red-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60"
              >
                <i
                  data-v-6151ebec=""
                  class="bi bi-cart-plus text-lg text-white"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center hover:opacity-60 text-dark">
      <a href="#" class=""> Lihat Semuanya </a>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-red-100"
  >
    <div class="w-full text-center text-xl text-dark">Testimoni Pelanggan</div>
    <div class="flex space-x-3">
      <div class="flex-1 bg-red-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Muhammad Fauzi</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
      <div class="flex-1 bg-red-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Muhammad Fauzi</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10"
  >
    <div class="w-full text-xl text-dark">Metode Pembayaran</div>
    <div class="flex gap-8">
      <div class="bg-red-100 rounded p-4">
        <div>
          <img src="../assets/sepatu/dana.png" class="w-24 h-auto" />
        </div>
      </div>
      <div class="bg-red-100 rounded p-4">
        <div>
          <img src="../assets/sepatu/bca.png" class="w-24 h-auto" />
        </div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 px-4 lg:px-20 flex flex-col gap-10 bg-aboo"
  >
    <div class="w-full text-start text-xl text-dark">Pertanyaan Umum (FAQ)</div>
    <div class="flex flex-col gap-4">
      <details class="bg-red-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </details>
      <details class="bg-red-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </details>
      <details class="bg-red-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </details>
      <details class="bg-red-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>
      </details>
    </div>
  </section>
  <footer>
    <div
      id="cta"
      class="bg-red-300 py-12 w-full flex lg:flex-row flex-col gap-4 justify-between items-center px-4 lg:px-20"
    >
      <div
        class="text-xl lg:text-2xl text-center lg:text-start font-medium text-white leading-normal tracking-tighter"
      >
        Lebih Mudah Mengirim Hadiah dan <br />
        Bunga Untuk Orang Tercinta
      </div>
      <div
        class="cursor-pointer bg-red-500 p-2 lg:p-4 w-40 lg:w-52 text-sm text-center text-white rounded hover:opacity-70"
      >
        Dapatkan Sekarang
      </div>
    </div>
    <div
      class="bg-red-600 w-full pt-16 pb-4 px-4 lg:px-20 flex flex-col items-center lg:items-start gap-12"
    >
      <div>
        <img
          src="../assets/sepatu/logo1.png"
          alt="logo white toko buket"
          class="w-52 h-auto"
        />
      </div>
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-center items-center lg:justify-between w-full lg:items-start"
      >
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Alamat</div>
          <div class="text-sm lg:text-base">Cianjur, Jawa Barat</div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kategori Produk</div>
          <div class="text-sm lg:text-base">Sepatu Nike</div>
          <div class="text-sm lg:text-base">Sepatu New Belance</div>
          <div class="text-sm lg:text-base">Sepatu Salomon</div>
          <div class="text-sm lg:text-base">Sepatu Vans</div>
          <div class="text-sm lg:text-base">Sepatu Ventela</div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kontak Kami</div>
          <div class="text-sm lg:text-base">0866-6666-6666</div>
          <div class="text-sm lg:text-base">sneakers@shop.com</div>
        </div>
      </div>
      <div class="w-full text-center text-white text-xs">
        © 2024 Sneakers All rights reserved
      </div>
    </div>
  </footer>
</template>
