'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { addItem } from '@/store/cartSlice';
import { Product } from '@/typing';
import { useDispatch } from 'react-redux';

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const addCartHandler = () => {
    toast({
      title: 'Added to cart',
      description: 'Check your cart to complete your order',
      variant: 'success',
    });
    dispatch(addItem(product as any));
  };

  return (
    <Button onClick={() => addCartHandler()} className="mt-6">
      AddToCart
    </Button>
  );
};

export default AddToCart;
