import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Rating from "../../components/ui/Rating";
import Range from "../../components/ui/Range";
import { Checkbox } from "../../components/ui/Checkbox";
import { ShoppingCartIcon, HeartIcon, TruckIcon, CreditCardIcon, TrashIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, HomeModernIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function OnlineShopPage() {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      price: "$399",
      rating: 5,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      price: "$120",
      rating: 4,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      category: "Shoes"
    },
    {
      id: 3,
      name: "Basic Tee",
      price: "$35",
      rating: 3,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
      category: "Clothing"
    },
    {
      id: 4,
      name: "Sony Headphones",
      price: "$250",
      rating: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      category: "Electronics"
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Online Shop</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen dan layout untuk toko online, termasuk kartu produk dan keranjang belanja.
        </p>
      </div>

      <div className="space-y-12">
        {/* Product Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Grid</h2>
          <CodeBlock code={`<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {products.map((product) => (
    <div key={product.id} className="group relative rounded-2xl bg-white border border-zinc-200 p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
      <div className="aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-zinc-900 dark:text-white">{product.price}</p>
      </div>
      <div className="mt-2 flex items-center gap-1">
         <Rating value={product.rating} readOnly size="sm" />
         <span className="text-xs text-zinc-500 dark:text-zinc-400">({product.rating})</span>
      </div>
      <Button size="sm" className="w-full mt-4 relative z-10">Add to Cart</Button>
    </div>
  ))}
</div>`}>
            <div className="w-full">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative rounded-2xl bg-white border border-zinc-200 p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-zinc-900 dark:text-white">{product.price}</p>
                            </div>
                            <div className="mt-2 flex items-center gap-1">
                                <Rating value={product.rating} readOnly size="sm" />
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">({product.rating})</span>
                            </div>
                            <Button size="sm" className="w-full mt-4 relative z-10">Add to Cart</Button>
                        </div>
                    ))}
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Product Card Horizontal */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Card Horizontal</h2>
          <CodeBlock code={`<div className="flex w-full max-w-xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:flex-row">
    <div className="h-48 w-full shrink-0 overflow-hidden rounded-t-2xl md:h-auto md:w-48 md:rounded-l-2xl md:rounded-tr-none">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Shoe" className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col justify-between p-6 w-full">
        <div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Nike Air Max 270</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Men's Running Shoe</p>
                </div>
                <Badge variant="success" size="sm">In Stock</Badge>
            </div>
            <div className="mt-4">
                <span className="text-3xl font-bold text-zinc-900 dark:text-white">$120</span>
                <span className="ml-2 text-sm text-zinc-500 line-through dark:text-zinc-400">$150</span>
            </div>
            <div className="mt-2">
                <Rating value={4} readOnly size="sm" />
            </div>
        </div>
        <div className="mt-6 flex gap-3">
            <Button className="flex-1">Add to Cart</Button>
            <Button variant="secondary" type="outline" className="px-3"><HeartIcon className="h-5 w-5" /></Button>
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="flex w-full max-w-xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:flex-row">
                    <div className="h-48 w-full shrink-0 overflow-hidden rounded-t-2xl md:h-auto md:w-48 md:rounded-l-2xl md:rounded-tr-none">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Shoe" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between p-6 w-full">
                        <div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Nike Air Max 270</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Men's Running Shoe</p>
                                </div>
                                <Badge variant="success" size="sm">In Stock</Badge>
                            </div>
                            <div className="mt-4">
                                <span className="text-3xl font-bold text-zinc-900 dark:text-white">$120</span>
                                <span className="ml-2 text-sm text-zinc-500 line-through dark:text-zinc-400">$150</span>
                            </div>
                            <div className="mt-2">
                                <Rating value={4} readOnly size="sm" />
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <Button className="flex-1">Add to Cart</Button>
                            <Button variant="secondary" type="outline" className="px-3"><HeartIcon className="h-5 w-5" /></Button>
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Shopping Cart Item */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Shopping Cart Item</h2>
          <CodeBlock code={`<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
    <div className="flex flex-col sm:flex-row items-center gap-6">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" alt="Product" className="h-24 w-24 rounded-xl object-cover" />
        <div className="flex flex-1 flex-col gap-2 sm:gap-0 w-full">
            <div className="flex justify-between w-full">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Apple Watch Series 7</h3>
                <p className="text-lg font-bold text-zinc-900 dark:text-white">$399.00</p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Electronics • Midnight Aluminum</p>
            <div className="mt-4 flex items-center justify-between w-full">
                <div className="flex items-center rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                    <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">-</button>
                    <span className="px-3 py-1 text-sm font-medium border-x border-zinc-200 dark:border-zinc-700">1</span>
                    <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">+</button>
                </div>
                <button className="text-sm font-medium text-red-600 hover:text-red-500 dark:text-red-400 transition-colors">Remove</button>
            </div>
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" alt="Product" className="h-24 w-24 rounded-xl object-cover" />
                        <div className="flex flex-1 flex-col gap-2 sm:gap-0 w-full">
                            <div className="flex justify-between w-full">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Apple Watch Series 7</h3>
                                <p className="text-lg font-bold text-zinc-900 dark:text-white">$399.00</p>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Electronics • Midnight Aluminum</p>
                            <div className="mt-4 flex items-center justify-between w-full">
                                <div className="flex items-center rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                                    <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">-</button>
                                    <span className="px-3 py-1 text-sm font-medium border-x border-zinc-200 dark:border-zinc-700">1</span>
                                    <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">+</button>
                                </div>
                                <button className="text-sm font-medium text-red-600 hover:text-red-500 dark:text-red-400 transition-colors">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Product Detail */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Detail</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Product Images */}
    <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Product" className="h-full w-full object-cover object-center" />
        </div>
        <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 cursor-pointer border-2 border-transparent hover:border-cyan-500 transition-colors">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Thumbnail" className="h-full w-full object-cover object-center" />
                </div>
            ))}
        </div>
    </div>

    {/* Product Info */}
    <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Sony WH-1000XM4</h1>
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                    <Rating value={5} readOnly size="sm" />
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">(128 reviews)</span>
                </div>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">$348.00</p>
        </div>

        <div className="prose prose-sm text-zinc-500 dark:text-zinc-400 mb-8">
            <p>Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.</p>
        </div>

        <div className="space-y-6">
            {/* Color Selection */}
            <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Color</h3>
                <div className="flex items-center gap-3">
                    {['bg-black', 'bg-zinc-200', 'bg-blue-900'].map((color, i) => (
                        <button key={i} className={\`w-8 h-8 rounded-full \${color} ring-2 ring-offset-2 ring-transparent hover:ring-cyan-500 focus:ring-cyan-500 dark:ring-offset-zinc-900 transition-all\`} aria-label="Select color"></button>
                    ))}
                </div>
            </div>

            {/* Size Selection */}
            <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Size</h3>
                <div className="flex items-center gap-3">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button key={size} className="min-w-[3rem] h-10 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition-colors">
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <button className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">-</button>
                    <span className="px-2 font-medium">1</span>
                    <button className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">+</button>
                </div>
                <Button className="flex-1">Add to Cart</Button>
                <Button variant="secondary" type="outline" className="px-3"><HeartIcon className="h-6 w-6" /></Button>
            </div>
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Product" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 cursor-pointer border-2 border-transparent hover:border-cyan-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Thumbnail" className="h-full w-full object-cover object-center" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Sony WH-1000XM4</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                    <Rating value={5} readOnly size="sm" />
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">(128 reviews)</span>
                                </div>
                                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                                <span className="text-sm text-green-600 font-medium">In Stock</span>
                            </div>
                            <p className="text-2xl font-bold text-zinc-900 dark:text-white">$348.00</p>
                        </div>

                        <div className="prose prose-sm text-zinc-500 dark:text-zinc-400 mb-8">
                            <p>Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.</p>
                        </div>

                        <div className="space-y-6">
                            {/* Color Selection */}
                            <div>
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Color</h3>
                                <div className="flex items-center gap-3">
                                    {['bg-black', 'bg-zinc-200', 'bg-blue-900'].map((color, i) => (
                                        <button key={i} className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-transparent hover:ring-cyan-500 focus:ring-cyan-500 dark:ring-offset-zinc-900 transition-all`} aria-label="Select color"></button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Size</h3>
                                <div className="flex items-center gap-3">
                                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                        <button key={size} className="min-w-[3rem] h-10 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition-colors">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700">
                                    <button className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">-</button>
                                    <span className="px-2 font-medium">1</span>
                                    <button className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">+</button>
                                </div>
                                <Button className="flex-1">Add to Cart</Button>
                                <Button variant="secondary" type="outline" className="px-3"><HeartIcon className="h-6 w-6" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Checkout */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Shipping Form */}
    <div className="lg:col-span-2 space-y-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <TruckIcon className="h-5 w-5" /> Shipping Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="John Doe" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Address</label>
                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="123 Main St" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">City</label>
                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="New York" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Postal Code</label>
                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="10001" />
                </div>
            </div>
        </div>
    </div>

    {/* Order Summary */}
    <div className="lg:col-span-1">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sticky top-24">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" /> Order Summary
            </h3>
            <div className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between"><span>Subtotal</span><span>$519.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>$10.00</span></div>
                <div className="flex justify-between"><span>Tax</span><span>$5.00</span></div>
            </div>
            <div className="flex justify-between items-center py-4 text-lg font-bold text-zinc-900 dark:text-white">
                <span>Total</span>
                <span>$534.00</span>
            </div>
            <Button className="w-full">Confirm Order</Button>
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                <TruckIcon className="h-5 w-5" /> Shipping Address
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="John Doe" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Address</label>
                                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="123 Main St" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">City</label>
                                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="New York" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Postal Code</label>
                                    <input type="text" className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" placeholder="10001" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sticky top-24">
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                <CreditCardIcon className="h-5 w-5" /> Order Summary
                            </h3>
                            <div className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                                <div className="flex justify-between"><span>Subtotal</span><span>$519.00</span></div>
                                <div className="flex justify-between"><span>Shipping</span><span>$10.00</span></div>
                                <div className="flex justify-between"><span>Tax</span><span>$5.00</span></div>
                            </div>
                            <div className="flex justify-between items-center py-4 text-lg font-bold text-zinc-900 dark:text-white">
                                <span>Total</span>
                                <span>$534.00</span>
                            </div>
                            <Button className="w-full">Confirm Order</Button>
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Order History */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Order History</h2>
          <CodeBlock code={`<div className="w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
    <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
            <thead className="bg-zinc-50 text-xs uppercase text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                <tr>
                    <th scope="col" className="px-6 py-4">Order ID</th>
                    <th scope="col" className="px-6 py-4">Date</th>
                    <th scope="col" className="px-6 py-4">Status</th>
                    <th scope="col" className="px-6 py-4">Total</th>
                    <th scope="col" className="px-6 py-4 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900">
                {[
                    { id: "#12345", date: "Oct 24, 2023", status: "Delivered", variant: "success", total: "$120.00" },
                    { id: "#12346", date: "Oct 21, 2023", status: "Processing", variant: "warning", total: "$399.00" },
                    { id: "#12347", date: "Sep 12, 2023", status: "Cancelled", variant: "danger", total: "$35.00" },
                ].map((order) => (
                    <tr key={order.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">{order.id}</td>
                        <td className="px-6 py-4">{order.date}</td>
                        <td className="px-6 py-4"><Badge variant={order.variant} size="sm">{order.status}</Badge></td>
                        <td className="px-6 py-4">{order.total}</td>
                        <td className="px-6 py-4 text-right"><Button size="sm" variant="light">View</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>`}>
            <div className="w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
                            <thead className="bg-zinc-50 text-xs uppercase text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Order ID</th>
                                    <th scope="col" className="px-6 py-4">Date</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4">Total</th>
                                    <th scope="col" className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900">
                                {[
                                    { id: "#12345", date: "Oct 24, 2023", status: "Delivered", variant: "success", total: "$120.00" },
                                    { id: "#12346", date: "Oct 21, 2023", status: "Processing", variant: "warning", total: "$399.00" },
                                    { id: "#12347", date: "Sep 12, 2023", status: "Cancelled", variant: "danger", total: "$35.00" },
                                ].map((order) => (
                                    <tr key={order.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">{order.id}</td>
                                        <td className="px-6 py-4">{order.date}</td>
                                        <td className="px-6 py-4"><Badge variant={order.variant} size="sm">{order.status}</Badge></td>
                                        <td className="px-6 py-4">{order.total}</td>
                                        <td className="px-6 py-4 text-right"><Button size="sm" variant="light">View</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Wishlist */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
          <CodeBlock code={`<div className="space-y-4">
    {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Product" className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-1 flex-col gap-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-bold text-zinc-900 dark:text-white">Nike Air Max 270</h3>
                    <Badge variant="success" size="sm" className="hidden sm:inline-flex">In Stock</Badge>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Men's Running Shoe</p>
                <div className="mt-1 font-bold text-zinc-900 dark:text-white">$120.00</div>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
                <Button size="sm" className="w-full whitespace-nowrap">Add to Cart</Button>
                <Button size="sm" variant="danger" type="outline" className="w-full flex items-center justify-center gap-2">
                    <TrashIcon className="h-4 w-4" /> Remove
                </Button>
            </div>
        </div>
    ))}
</div>`}>
            <div className="w-full">
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Product" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2">
                                    <h3 className="font-bold text-zinc-900 dark:text-white">Nike Air Max 270</h3>
                                    <Badge variant="success" size="sm" className="hidden sm:inline-flex">In Stock</Badge>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Men's Running Shoe</p>
                                <div className="mt-1 font-bold text-zinc-900 dark:text-white">$120.00</div>
                            </div>
                            <div className="flex flex-col gap-2 w-full sm:w-auto">
                                <Button size="sm" className="w-full whitespace-nowrap">Add to Cart</Button>
                                <Button size="sm" variant="danger" type="outline" className="w-full flex items-center justify-center gap-2">
                                    <TrashIcon className="h-4 w-4" /> Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Category List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Category List</h2>
          <CodeBlock code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
        { name: "Electronics", count: "120", icon: <DevicePhoneMobileIcon className="h-6 w-6" /> },
        { name: "Computers", count: "85", icon: <ComputerDesktopIcon className="h-6 w-6" /> },
        { name: "Home & Living", count: "240", icon: <HomeModernIcon className="h-6 w-6" /> },
        { name: "Fashion", count: "350", icon: <SparklesIcon className="h-6 w-6" /> },
    ].map((category) => (
        <div key={category.name} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white hover:border-cyan-500 hover:shadow-md transition-all cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-cyan-500 group">
            <div className="mb-3 p-3 rounded-full bg-zinc-100 text-zinc-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-cyan-900/30 dark:group-hover:text-cyan-400">
                {category.icon}
            </div>
            <span className="font-medium text-zinc-900 dark:text-white">{category.name}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{category.count} products</span>
        </div>
    ))}
</div>`}>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Electronics", count: "120", icon: <DevicePhoneMobileIcon className="h-6 w-6" /> },
                        { name: "Computers", count: "85", icon: <ComputerDesktopIcon className="h-6 w-6" /> },
                        { name: "Home & Living", count: "240", icon: <HomeModernIcon className="h-6 w-6" /> },
                        { name: "Fashion", count: "350", icon: <SparklesIcon className="h-6 w-6" /> },
                    ].map((category) => (
                        <div key={category.name} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white hover:border-cyan-500 hover:shadow-md transition-all cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-cyan-500 group">
                            <div className="mb-3 p-3 rounded-full bg-zinc-100 text-zinc-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-cyan-900/30 dark:group-hover:text-cyan-400">
                                {category.icon}
                            </div>
                            <span className="font-medium text-zinc-900 dark:text-white">{category.name}</span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">{category.count} products</span>
                        </div>
                    ))}
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Promo Banner */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Promo Banner</h2>
          <CodeBlock code={`<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
    <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get 25% off during our Big Sale!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Most of our best-selling products are on sale for a limited time. Don't miss out on this opportunity.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            {[
                { value: "02", label: "Days" },
                { value: "12", label: "Hours" },
                { value: "45", label: "Minutes" },
                { value: "20", label: "Seconds" },
            ].map((item) => (
                <div key={item.label} className="flex flex-col rounded-lg bg-white/10 p-3 backdrop-blur-sm min-w-[70px]">
                    <span className="text-3xl font-bold text-white">{item.value}</span>
                    <span className="text-xs text-blue-100">{item.label}</span>
                </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
            <Button variant="light" size="lg">Shop Sale</Button>
            <Button variant="dark" type="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">Learn more</Button>
        </div>
    </div>
    {/* Decorative circles */}
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"></div>
</div>`}>
            <div className="w-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Get 25% off during our Big Sale!
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                            Most of our best-selling products are on sale for a limited time. Don't miss out on this opportunity.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            {[
                                { value: "02", label: "Days" },
                                { value: "12", label: "Hours" },
                                { value: "45", label: "Minutes" },
                                { value: "20", label: "Seconds" },
                            ].map((item) => (
                                <div key={item.label} className="flex flex-col rounded-lg bg-white/10 p-3 backdrop-blur-sm min-w-[70px]">
                                    <span className="text-3xl font-bold text-white">{item.value}</span>
                                    <span className="text-xs text-blue-100">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button variant="light" size="lg">Shop Sale</Button>
                            <Button variant="dark" type="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">Learn more</Button>
                        </div>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"></div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Product Reviews */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Reviews</h2>
          <CodeBlock code={`<div className="space-y-6">
    {[
        {
            id: 1,
            author: "Jese Leos",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            date: "October 24, 2023",
            rating: 5,
            title: "Thinking to buy another one!",
            content: "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on the manual winding mechanism and the watch has kept perfect time for the last 24 hours."
        },
        {
            id: 2,
            author: "Bonnie Green",
            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
            date: "November 12, 2023",
            rating: 4,
            title: "Very good watch",
            content: "I bought this watch for my son, who is 10 years old. He loves it. It is a bit big for him, but he doesn't care. He loves the look of it and the fact that it is automatic."
        }
    ].map((review) => (
        <div key={review.id} className="p-6 bg-white rounded-2xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={review.avatar} alt={review.author} />
                    <div>
                        <div className="font-bold text-zinc-900 dark:text-white">{review.author}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">{review.date}</div>
                    </div>
                </div>
                <Rating value={review.rating} readOnly size="sm" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{review.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300">{review.content}</p>
        </div>
    ))}
</div>`}>
            <div className="w-full">
                <div className="space-y-6">
                    {[
                        {
                            id: 1,
                            author: "Jese Leos",
                            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
                            date: "October 24, 2023",
                            rating: 5,
                            title: "Thinking to buy another one!",
                            content: "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on the manual winding mechanism and the watch has kept perfect time for the last 24 hours."
                        },
                        {
                            id: 2,
                            author: "Bonnie Green",
                            avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
                            date: "November 12, 2023",
                            rating: 4,
                            title: "Very good watch",
                            content: "I bought this watch for my son, who is 10 years old. He loves it. It is a bit big for him, but he doesn't care. He loves the look of it and the fact that it is automatic."
                        }
                    ].map((review) => (
                        <div key={review.id} className="p-6 bg-white rounded-2xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full" src={review.avatar} alt={review.author} />
                                    <div>
                                        <div className="font-bold text-zinc-900 dark:text-white">{review.author}</div>
                                        <div className="text-sm text-zinc-500 dark:text-zinc-400">{review.date}</div>
                                    </div>
                                </div>
                                <Rating value={review.rating} readOnly size="sm" />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{review.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-300">{review.content}</p>
                        </div>
                    ))}
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Product Filters */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Filters</h2>
          <CodeBlock code={`<div className="flex flex-col md:flex-row gap-8">
    <div className="w-full md:w-64 shrink-0 space-y-8">
        <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Categories</h3>
            <div className="space-y-2">
                {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys'].map((category) => (
                    <div key={category} className="flex items-center">
                        <Checkbox id={category} label={category} />
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Price Range</h3>
            <div className="space-y-4">
                <Range dual min={0} max={1000} value={[100, 500]} onChange={() => {}} showValue />
            </div>
        </div>
        <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Rating</h3>
            <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2 cursor-pointer group">
                        <Checkbox id={\`rating-\${rating}\`} />
                        <Rating value={rating} readOnly size="sm" />
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white">& Up</span>
                    </div>
                ))}
            </div>
        </div>
        <Button className="w-full">Apply Filters</Button>
    </div>
    <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
            ))}
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-64 shrink-0 space-y-8">
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Categories</h3>
                            <div className="space-y-2">
                                {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys'].map((category) => (
                                    <div key={category} className="flex items-center">
                                        <Checkbox id={`cat-${category}`} label={category} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <Range dual min={0} max={1000} value={[100, 500]} onChange={() => {}} showValue />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Rating</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <div key={rating} className="flex items-center gap-2 cursor-pointer group">
                                        <Checkbox id={`rating-${rating}`} />
                                        <Rating value={rating} readOnly size="sm" />
                                        <span className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white">& Up</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button className="w-full">Apply Filters</Button>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-[3/4] rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Empty Cart */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Empty Cart</h2>
          <CodeBlock code={`<div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <ShoppingCartIcon className="h-12 w-12 text-zinc-400 dark:text-zinc-500" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">Your cart is empty</h3>
    <p className="mb-8 max-w-sm text-zinc-500 dark:text-zinc-400">Looks like you haven't added anything to your cart yet. Explore our products and find something you love.</p>
    <Button size="lg">Start Shopping</Button>
</div>`}>
            <div className="w-full">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                        <ShoppingCartIcon className="h-12 w-12 text-zinc-400 dark:text-zinc-500" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">Your cart is empty</h3>
                    <p className="mb-8 max-w-sm text-zinc-500 dark:text-zinc-400">Looks like you haven't added anything to your cart yet. Explore our products and find something you love.</p>
                    <Button size="lg">Start Shopping</Button>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Invoice */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Invoice</h2>
          <CodeBlock code={`<div className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm print:shadow-none print:border-none">
    {/* Header */}
    <div className="flex justify-between items-start mb-8">
        <div>
            <div className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter mb-4">
                <span className="bg-cyan-500 px-2 py-0.5 rounded text-white">N</span>
                <span className="text-cyan-500">NUSA</span>
                <span className="text-zinc-900 dark:text-white">UI</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                123 Business Street<br />
                Tech City, TC 90210<br />
                billing@nusa-ui.com
            </p>
        </div>
        <div className="text-right">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">INVOICE</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">Invoice #: <span className="font-medium text-zinc-900 dark:text-white">INV-2023-001</span></p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Date: <span className="font-medium text-zinc-900 dark:text-white">Oct 24, 2023</span></p>
            <div className="mt-4">
                <Badge variant="success">Paid</Badge>
            </div>
        </div>
    </div>

    {/* Client Info */}
    <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-zinc-100 dark:border-zinc-800">
        <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Bill To</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                John Doe<br />
                456 Client Avenue<br />
                New York, NY 10012<br />
                john@example.com
            </p>
        </div>
        <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Ship To</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                John Doe<br />
                456 Client Avenue<br />
                New York, NY 10012
            </p>
        </div>
    </div>

    {/* Items Table */}
    <div className="mb-8">
        <table className="w-full text-left text-sm">
            <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <th className="py-3 font-bold text-zinc-900 dark:text-white">Item</th>
                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-center">Qty</th>
                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-right">Price</th>
                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-right">Total</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                    { name: "Apple Watch Series 7", qty: 1, price: 399.00 },
                    { name: "Nike Air Max 270", qty: 2, price: 120.00 },
                    { name: "Sony WH-1000XM4", qty: 1, price: 348.00 },
                ].map((item, i) => (
                    <tr key={i}>
                        <td className="py-4 text-zinc-700 dark:text-zinc-300">{item.name}</td>
                        <td className="py-4 text-center text-zinc-700 dark:text-zinc-300">{item.qty}</td>
                        <td className="py-4 text-right text-zinc-700 dark:text-zinc-300">\${item.price.toFixed(2)}</td>
                        <td className="py-4 text-right font-medium text-zinc-900 dark:text-white">\${(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    {/* Summary */}
    <div className="flex justify-end mb-8">
        <div className="w-64 space-y-3">
            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>Subtotal</span>
                <span>$987.00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>Tax (10%)</span>
                <span>$98.70</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>Shipping</span>
                <span>$10.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-zinc-900 dark:text-white pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <span>Total</span>
                <span>$1,095.70</span>
            </div>
        </div>
    </div>

    {/* Footer */}
    <div className="text-center pt-8 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">Thank you for your business!</p>
        <Button size="sm" variant="secondary" type="outline" onClick={() => window.print()}>Print Invoice</Button>
    </div>
</div>`}>
            <div className="w-full">
                <div className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter mb-4">
                                <span className="bg-cyan-500 px-2 py-0.5 rounded text-white">N</span>
                                <span className="text-cyan-500">NUSA</span>
                                <span className="text-zinc-900 dark:text-white">UI</span>
                            </div>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                123 Business Street<br />
                                Tech City, TC 90210<br />
                                billing@nusa-ui.com
                            </p>
                        </div>
                        <div className="text-right">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">INVOICE</h1>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">Invoice #: <span className="font-medium text-zinc-900 dark:text-white">INV-2023-001</span></p>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Date: <span className="font-medium text-zinc-900 dark:text-white">Oct 24, 2023</span></p>
                            <div className="mt-4">
                                <Badge variant="success">Paid</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Client Info */}
                    <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-zinc-100 dark:border-zinc-800">
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Bill To</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                John Doe<br />
                                456 Client Avenue<br />
                                New York, NY 10012<br />
                                john@example.com
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Ship To</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                John Doe<br />
                                456 Client Avenue<br />
                                New York, NY 10012
                            </p>
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="mb-8">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                    <th className="py-3 font-bold text-zinc-900 dark:text-white">Item</th>
                                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-center">Qty</th>
                                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-right">Price</th>
                                    <th className="py-3 font-bold text-zinc-900 dark:text-white text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {[
                                    { name: "Apple Watch Series 7", qty: 1, price: 399.00 },
                                    { name: "Nike Air Max 270", qty: 2, price: 120.00 },
                                    { name: "Sony WH-1000XM4", qty: 1, price: 348.00 },
                                ].map((item, i) => (
                                    <tr key={i}>
                                        <td className="py-4 text-zinc-700 dark:text-zinc-300">{item.name}</td>
                                        <td className="py-4 text-center text-zinc-700 dark:text-zinc-300">{item.qty}</td>
                                        <td className="py-4 text-right text-zinc-700 dark:text-zinc-300">${item.price.toFixed(2)}</td>
                                        <td className="py-4 text-right font-medium text-zinc-900 dark:text-white">${(item.price * item.qty).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary */}
                    <div className="flex justify-end mb-8">
                        <div className="w-64 space-y-3">
                            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                                <span>Subtotal</span>
                                <span>$987.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                                <span>Tax (10%)</span>
                                <span>$98.70</span>
                            </div>
                            <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                                <span>Shipping</span>
                                <span>$10.00</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-zinc-900 dark:text-white pt-3 border-t border-zinc-200 dark:border-zinc-800">
                                <span>Total</span>
                                <span>$1,095.70</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-8 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">Thank you for your business!</p>
                        <Button size="sm" variant="secondary" type="outline">Print Invoice</Button>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}