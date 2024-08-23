export default function ProductDetails({ params }: {
    params: { productId: number };
}) {
    return <h1>Details of product {params.productId} </h1>
}
