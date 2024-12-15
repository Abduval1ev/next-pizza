'use client'
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Container, Filters, TopBar, Title } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className='pb-14 mt-10'>
        <main className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                categoryId={1}
                title={'Pizza'}
                products={[
                  {
                    id: 1,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 2,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 3,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 4,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                ]} />
              <ProductsGroupList
                categoryId={2}
                title={'Breakfast'}
                products={[
                  {
                    id: 1,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 2,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 3,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 4,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                ]} />
              <ProductsGroupList
                categoryId={3}
                title={'Hot-Dog'}
                products={[
                  {
                    id: 1,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 2,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 3,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                  {
                    id: 4,
                    name: 'wertyuiop[',
                    imageURL: 'https://media.dodostatic.net/image/r:292x292/0193B021D8A4778BA9DA00A8CD83795D.avif',
                    price: 45.5,
                    items: [{ price: 440 }]
                  },
                ]} />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
