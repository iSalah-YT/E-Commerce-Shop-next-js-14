'use client';

import { Product } from '@/typing';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { useToast } from '../ui/use-toast';

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const { toast } = useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
      title: 'Added to cart',
      description: 'Check your cart to complete your order',
      variant: 'success',
    });
    dispatch(addItem(product as any));
  };

  return (
    <div className="p-4">
      {/* Image */}
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      {/* Category */}
      <p className="mt-5 text-xs capitalize text-gray-500">
        {product.category}
      </p>

      {/* Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>

      {/* Ratings */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          );
        })}
      </div>

      {/* Price */}
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">{`$${(
          product.price + 10
        ).toFixed(2)}`}</p>

        <p className="text-black text-lg font-bold opacity-80">
          ${product.price}
        </p>
      </div>

      {/* Add to cart button */}
      <div className="mt-4 flex items-center space-x-2">
        <Button
          onClick={() => {
            addToCartHandler(product);
          }}
          size={'icon'}
        >
          <ShoppingBag size={18} />
        </Button>

        <Button size={'icon'} className="bg-red-500">
          <Heart size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
