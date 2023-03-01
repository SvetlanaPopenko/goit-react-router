import { ProductList } from "components/ProductList";
import { getProducts } from "FakeAPI";
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "components/SearchBox";


const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name")??"";
        const products = getProducts();

    const visibleProducts = products.filter((product) => product.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase()));

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    return (
        <main>
            <SearchBox value={productName} onChange={ updateQueryString} />
                  <ProductList products={visibleProducts}/>
        </main>
    );
}

export default Products;