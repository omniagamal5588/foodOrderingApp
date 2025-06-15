'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '../ui/label'
import { formatCurrency } from '@/lib/formatters'
import { Extra, Product, ProductSizes, Size } from '@prisma/client'
import { ProductWithRelations } from '@/types/product'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addToCartItem,
  lessQuanOfItem,
  removeItemFromCart,
  selectCartItems,
} from '@/redux/features/cart/cartSlice'
import { getItemQuantity } from '@/lib/cart'

function AddToCartButton({ item }: { item: ProductWithRelations }) {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCartItems)
  const quantity = getItemQuantity(item.id, cart)

  const defaultSize =
    cart.find((el) => el.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL)

  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!)
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(
    cart.find((el) => el.id === item.id)?.extras || []
  )

  let totalPrice = item.basePrice
  if (selectedSize) totalPrice += selectedSize.price
  if (selectedExtras.length > 0)
    selectedExtras.forEach((extra) => (totalPrice += extra.price))

  const handleAddToCart = () => {
    dispatch(
      addToCartItem({
        basePrice: item.basePrice,
        id: item.id,
        image: item.image,
        name: item.name,
        size: selectedSize,
        extras: selectedExtras,
      })
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add To Cart</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[480px] max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl px-6 py-8">
        <DialogHeader className="text-center space-y-4">
          <Image
            src={item.image}
            alt={item.name}
            width={180}
            height={180}
            className="mx-auto rounded-lg object-cover shadow-md"
          />
          <DialogTitle className="text-2xl font-semibold text-primary">
            {item.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {item.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-10 mt-6">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size" className="block text-lg font-medium text-accent">
              Pick Your Size
            </Label>
            <RadioGroup>
              {item.sizes.map((size) => (
                <div
                  key={size.id}
                  className="flex items-center space-x-2 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
                >
                  <RadioGroupItem
                    value={selectedSize.name}
                    checked={selectedSize.id === size.id}
                    onClick={() => setSelectedSize(size)}
                    id={size.id}
                  />
                  <Label htmlFor={size.id}>
                    {size.name} {formatCurrency(size.price + item.basePrice)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4 text-center">
            <Label htmlFor="add-extra" className="block text-lg font-medium text-accent">
              Any Extras?
            </Label>
            {item.extras.map((extra) => {
              const isChecked = selectedExtras.find((e) => e.id === extra.id)
              const handleCheck = () => {
                if (isChecked) {
                  setSelectedExtras((prev) => prev.filter((e) => e.id !== extra.id))
                } else {
                  setSelectedExtras((prev) => [...prev, extra])
                }
              }
              return (
                <div
                  key={extra.id}
                  className="flex items-center space-x-2 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
                >
                  <Checkbox
                    id={extra.id}
                    checked={Boolean(isChecked)}
                    onClick={handleCheck}
                  />
                  <Label
                    htmlFor={extra.id}
                    className="text-sm font-medium text-accent"
                  >
                    {extra.name} {formatCurrency(extra.price)}
                  </Label>
                </div>
              )
            })}
          </div>
        </div>

        <DialogFooter className="mt-8">
          {quantity === 0 ? (
            <Button
              type="submit"
              onClick={handleAddToCart}
              className="w-full h-12 text-base font-semibold"
            >
              Add to cart – {formatCurrency(totalPrice)}
            </Button>
          ) : (
            <div className="flex flex-col gap-4 w-full items-center">
              <div className="flex gap-4 items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() => dispatch(lessQuanOfItem({ id: item.id }))}
                >
                  –
                </Button>
                <span className="text-lg font-medium text-accent">{quantity} in cart</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() =>
                    dispatch(
                      addToCartItem({
                        basePrice: item.basePrice,
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        extras: selectedExtras,
                        size: selectedSize,
                      })
                    )
                  }
                >
                  +
                </Button>
              </div>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
              >
                Remove
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddToCartButton
