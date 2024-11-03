"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation'

interface CategoryImage {
  image_url: string;
}

interface CategoryData {
  category_name: string;
  images: CategoryImage[];
}

interface Brand {
  name: string;
  main_image_url: string;
  logo_url: string;
  title: string;
  short_description: string;
  description_image_url: string;
  long_description: string;
  images_by_category: CategoryData[];
}

const RocaPromo = () => {
  const params = useParams();
  const [brands, setBrands] = useState<Brand>({} as Brand);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`http://plenum.a-h-y.com/api/brands/${params.brand}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBrands(data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchBrands();
  }, [params.brand]);

  return (
    <div className="bg-black text-white min-h-screen pt-40">
      {/* Title Section */}
      <div className="px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-5xl font-mansory">{brands.name}</h1>
      </div>

      {/* Blue Banner with Logo Section */}
      <div className="py-16 relative flex justify-center items-center h-[200px] md:h-[300px] lg:h-[450px]">
        {brands.main_image_url && (
          <Image
            src={brands.main_image_url}
            width={1000}
            height={600}
            className="object-cover"
            alt="Brand Banner"
          />
        )}

        {brands.logo_url && (
          <Image
            src={brands.logo_url}
            width={150}
            height={100}
            alt="Roca Logo"
            className="w-24 md:w-48 h-auto absolute z-10"
          />
        )}
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title and Description */}
        <div className="mt-28 space-y-6 lg:space-y-10 md:text-center text-left">
          <h2 className="text-lg md:text-xl lg:text-3xl font-mansory max-w-xl mx-auto text-left">
            {brands.title}
          </h2>
          <p className="text-gray-300 text-sm lg:text-base max-w-xl md:mx-auto text-left">
            {brands.short_description}
          </p>
        </div>

        {/* New Image Placeholder */}
        <div className="mt-12 md:flex md:justify-center">
          <div className="w-full md:w-[800px] h-max">
            {brands.description_image_url && (
              <Image
                width={1000}
                height={600}
                src={brands.description_image_url}
                alt={'main-img'}
              />
            )}
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-10 lg:mt-20 space-y-4 md:text-center text-left pb-16">
          <p className="text-gray-300 text-sm lg:text-base max-w-xl md:mx-auto text-left">
            {brands.long_description}
          </p>
        </div>

        {/* <FloorTilesGalleryWithSuspense /> */}
        <div className='pb-20'>
          {brands?.images_by_category?.map((category: CategoryData) => (
            <div key={category.category_name}>
              <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-mansory uppercase mt-14 md:mt-40 mb-10 md:mb-28 lg:mb-10'>
                {category.category_name}
              </h1>

              <div className='w-full relative grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
                {/* Loop through images and render cards */}
                {category.images.map((image: CategoryImage, index: number) => (
                  <div className="card w-full" key={index}>
                    <Image
                      width={447}
                      height={298}
                      src={image.image_url}
                      alt={'tile-img'}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RocaPromo;
