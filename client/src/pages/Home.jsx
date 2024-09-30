import React, { useEffect } from 'react';
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useProductStore from '../store/product';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("producs:", products);

  ; return (
    <div>
      <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
          <Text
            fontSize={'30'}
            fontWeight={'bold'}
            bgGradient={'linear(to-r, cyan.400, blue.500)'}
            bgClip={'text'}
            textAlign={'center'}
          >
            Current Products
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={'full'}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>

          {products.length === 0 &&
            <Text
              fontSize={'xl'}
              fontWeight={'bold'}
              textAlign={'center'}
              color={'gray.500'}
            >
              Products Not Found... {"    "}
              <Link to={'/create'}>
                <Text as={'span'} color='blue.500' _hover={{ textDecoration: "underline" }}>
                  Add Product
                </Text>
              </Link>
            </Text>
          }

        </VStack>
      </Container>
    </div>
  )
}

export default Home