"use client";

import Image from "next/image";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Card, Carousel } from "./components/ui/apple-cards-carousel";
import { LayoutGrid } from "./components/ui/layout-grid";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./components/ui/google-gemini-effect";
import { HoverEffect } from "./components/ui/card-hover-effect";
import '@/app/styles/a.css';
import Loading from './components/loader/loading'; 



export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Student",
      link: "/student",
    },
    {
      name: "Galery",
      link: "/galery",
    },
  ];

  const products = [
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-1.jpeg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-2.jpeg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-3.jpeg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-4.jpeg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-5.jpeg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-6.jpg",
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-7.jpg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-8.jpg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-9.jpg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-10.jpg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-11.jpg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-12.JPG", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-13.JPG", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-14.jpeg", 
    },
    {
      title: "Memory",
      link: "/galery",
      thumbnail: "/images/image-15.jpg", 
    },
];


function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{ ...card, content: card.content || <p>No content available</p> }}
      index={index}
      layout={true}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Struktur-Rayon
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
   
  const DummyContent = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                  Saya Rey
                </span>{" "}
                disini saya membuat website rayon berbasis Next-Js dalam rangka tahap pembelajaran,terima kasih sudah berkunjung.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "Guru-Rayon",
      title: "Alan Jaelani, S.kom.",
      src: "/images/Profile-1.jpg",
    },
    {
      category: "Pengembang-Web",
      title: "M.Reysha Nova A.",
      src: "/images/Profile-2.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Ketua-Rayon",
      title: "Bagus Panji",
      src: "/images/Profile-3.jpg",
    },
   
    {
      category: "Wakil-Ketua",
      title: "Dwi Aziz Wilson",
      src: "/images/Profile-4.jpg",
    },
    {
      category: "Sekretaris X",
      title: "Rezqia",
      src: "/images/Profile-none.jpg",
    },
    {
      category: "Sekretaris XI",
      title: "Inggit Lugina",
      src: "/images/Profile-6.jpg",
    },
    {
      category: "Bendahara X",
      title: "Andini Syifa",
      src: "/images/Profile-7.WEBP",
    },
    {
      category: "Bendahara XI-1",
      title: "Azriel",
      src: "/images/Profile-8.jpg",
    },
    {
      category: "Bendahara XI-2",
      title: "Nisa Samrotul",
      src: "/images/Profile-9.jpg",
    },
  ];

  function LayoutGridDemo() {
    return (
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    );
  }
   
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Cicurug-9
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Sebuah pertemuan sesaat, kami memulai pelajaran baru. Selama 3 tahun untuk menjadi lebih baik.
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div className="w-full h-96 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63392.67582712313!2d106.75863134547133!3d-6.764704532132865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cc92293bd7bf%3A0xf2039a32f77f7367!2sKec.%20Cicurug%2C%20Kabupaten%20Sukabumi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1726378927498!5m2!1sid!2sid"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Wikrama Vocational High-School
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Wikrama Vocational High School, located in [city/country], stands as a beacon of excellence in technical and vocational education. Renowned for its innovative curriculum and industry-driven approach, Wikrama empowers students with practical skills and cutting-edge knowledge. The school’s state-of-the-art facilities and dedicated faculty foster an environment where future leaders and skilled professionals thrive. With a strong emphasis on hands-on learning and real-world applications, Wikrama Vocational High School transforms ambition into achievement, shaping students into dynamic contributors to the global workforce.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/18r6-86gb_9BtX3MoEnrR0Mn1w5q7kpxs/preview"
          allow="autoplay"
          title="Embedded Google Drive Video"
        ></iframe>
      </div>
    );
  };
  
   
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "/images/mages-1.jpeg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "/images/map-1.png",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/images/wikrama-1.png",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "/images/kerja-1.png",
    },
  ];

  function GoogleGeminiEffectDemo() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
   
    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
   
    return (
      <div
        className="h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    );
  }

  function CardHoverEffectDemo() {
    return (
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    );
  }
  const projects = [
    {
      title: "Next-Js",
      description:
        "Website Rayon yang diintergrasikan dan ditingkatkan lebih baik dengan Next-js",
      link: "https://nextjs.org/",
    },
    {
      title: "Aceternity",
      description:
        "Tata letak design template menggunakan typescript yang memudahkan mengintegrasi dan berkarya",
      link: "https://ui.aceternity.com/",
    },
    {
      title: "Tailwind",
      description:
        "Menggunakan salah satu framework populer yang digunakan dalam Tailwind CSS untuk memudahkan dalam membuat desain UI",
      link: "https://google.com",
    },
    {
      title: "Open-source",
      description:
        "Website rayon ini dijadikan sebagai jejak pembelajaran, dengan ini semua orang bisa mendapat hak untuk memilikinya.",
      link: "https://meta.com",
    },
    {
      title: "Pengembangan-pengoptimalan",
      description:
        "Atas izin tuhan yang esa, saya mengembangkan website rayon ini dalam waktu dalam kurun waktu sehari. Kedepannya saya berencana menambahkan Auth dan lain sebagainya, seperti Chat-Runtime.",
      link: "https://amazon.com",
    },
    {
      title: "Next-Auth",
      description:
        "Coming-soon.",
      link: "https://microsoft.com",
    },
  ];
  
  

  return (<>
  <head>
    <title>Cicurug-9</title>
      <meta name="description" content="Web Pengembangan Rayon" />
      <link rel="icon" type="image/png"  sizes="50x50" href="/images/logo.png" />
    </head>
    <body>
    <main>
      <FloatingNav navItems={navItems}/>
      <HeroParallax products={products}/>
      <AppleCardsCarouselDemo />
      <LayoutGridDemo />
      <GoogleGeminiEffectDemo />
      <CardHoverEffectDemo />
      <Loading />
      </main> </body></>
  );
}
