<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 me-6 text-end">
        WELCOME TO
      </p>
      <p class="title-main me-6 text-end">
        MY PERSONAL CV
      </p>
      
      <iframe width="760" height="415"
       src="https://www.youtube.com/embed/a1Cn7MsHdxs" 
        title="YouTube video player" frameborder="0" 
        class="me-auto ms-auto mt-10 w"
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>

      <div class="mt-16 flex w-full justify-center">
      <a
        :href="cvUrl"
        download="Bartek-Fenicki-CV.pdf"
        class=" bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        📄 Get my CV
      </a>
    </div>
      



    </div>
    
    

    </template>
  <script setup>
  import cv from '@/assets/img/cv-bartek-2025-recent-kopia.pdf'

  const cvUrl = cv
  </script>

    <style scoped>
    .title-sub {
      font-size: 25px;
      }
    .title-main {
    font-size: 50px;
    }
    iFrame {
      width: 650px;
       height: 355px;
    }

    @media screen and (max-width:1200px) {
      iFrame {
        width: 500px;
        height: 300px;
      }
    }
    @media screen and (max-width:600px) {
      iFrame {
        width: 400px;
        height: 250px;
      }
    }
    @media screen and (max-width:450px) {
      iFrame {
        width: 300px;
        height: 200px;
      }
      .title-sub {
      font-size: 15px;
      }
    .title-main {
    font-size: 30px;
    }
    }

    </style>